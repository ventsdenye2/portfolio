import * as THREE from "three";
import type { TerminalLine, TerminalLineType } from "../content/techTerminalContent";

export type TerminalRuntimeState = "idle" | "typing" | "output" | "scrolling" | "paused";

export interface TerminalTextureOptions {
  width?: number;
  height?: number;
  title: string;
  typingSpeed?: number;
  cursorInterval?: number;
  maxHistoryLines?: number;
  visibleLineCount?: number;
}

export interface TerminalTextureMetrics {
  redrawCount: number;
  renderCount: number;
  textureUploadCount: number;
  eventsGenerated: number;
  state: TerminalRuntimeState;
  historyLength: number;
  isComplete: boolean;
}

const FONT_FAMILY = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace';
const COLORS = {
  background: "#0e1114",
  panel: "#131a20",
  border: "#2e3d45",
  title: "#9aa7ad",
  prompt: "#67d5c5",
  command: "#f2f1eb",
  output: "#a9b4b8",
  success: "#79d6a1",
  warning: "#e2b16e",
  cursor: "#f2ae70",
} as const;

export class TerminalTexture {
  readonly canvas: HTMLCanvasElement;
  readonly texture: THREE.CanvasTexture;

  private readonly context: CanvasRenderingContext2D;
  private readonly width: number;
  private readonly height: number;
  private readonly title: string;
  private readonly typingSpeed: number;
  private readonly cursorInterval: number;
  private readonly maxHistoryLines: number;
  private readonly visibleLineCount: number;
  private readonly reducedMotion: boolean;

  private historyLines: TerminalLine[] = [];
  private currentEventLines: readonly TerminalLine[] = [];
  private currentCommandLineIndex = -1;
  private currentCommandText = "";
  private visibleCommandLength = 0;
  private currentOutputPause = 260;
  private currentEventCallback: (() => void) | undefined;

  private scrollOffset = 0;
  private scrollStartOffset = 0;
  private scrollTargetOffset = 0;
  private scrollStartTime = 0;
  private readonly scrollDuration = 240;

  private state: TerminalRuntimeState = "idle";
  private previousState: TerminalRuntimeState = "idle";
  private cursorVisible = true;
  private typingTimer: number | undefined;
  private outputTimer: number | undefined;
  private cursorTimer: number | undefined;
  private scrollTimer: number | undefined;
  private redrawCount = 0;
  private textureUploadCount = 0;
  private eventsGenerated = 0;

  constructor(options: TerminalTextureOptions) {
    this.width = options.width ?? 1024;
    this.height = options.height ?? 512;
    this.title = options.title;
    this.typingSpeed = options.typingSpeed ?? 34;
    this.cursorInterval = options.cursorInterval ?? 620;
    this.maxHistoryLines = options.maxHistoryLines ?? 100;
    this.visibleLineCount = options.visibleLineCount ?? 9;
    this.reducedMotion = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    const context = this.canvas.getContext("2d");
    if (!context) throw new Error(`Could not create terminal canvas for ${this.title}.`);
    this.context = context;

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.flipY = false;
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.ClampToEdgeWrapping;
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.generateMipmaps = false;
    this.texture.anisotropy = 1;
    this.render();
  }

  startEvent(lines: readonly TerminalLine[], onComplete?: () => void, outputPause = 260): boolean {
    if (this.state !== "idle" || this.currentEventLines.length > 0) return false;

    this.stopTimers();
    this.currentEventLines = lines;
    this.currentEventCallback = onComplete;
    this.currentOutputPause = outputPause;
    this.currentCommandLineIndex = lines.findIndex((line) => line.type === "command");
    this.currentCommandText = this.currentCommandLineIndex >= 0
      ? lines[this.currentCommandLineIndex].text ?? ""
      : "";
    this.visibleCommandLength = 0;
    this.eventsGenerated += 1;

    if (this.currentCommandLineIndex < 0) {
      this.finishEvent();
      return true;
    }

    // Put the prompt in the buffer immediately, then type only the command.
    this.appendHistory(lines.slice(0, this.currentCommandLineIndex));
    this.state = "typing";
    this.cursorVisible = true;
    this.render();
    this.startCursorTimer();
    this.scheduleNextCharacter(0);
    return true;
  }

  setLines(lines: readonly TerminalLine[]): void {
    this.reset();
    this.appendHistory(lines);
    this.scrollOffset = this.getTargetScrollOffset();
    this.render();
  }

  clearHistory(): void {
    this.historyLines = [];
    this.scrollOffset = 0;
    this.render();
  }

  reset(): void {
    this.stopTimers();
    this.historyLines = [];
    this.currentEventLines = [];
    this.currentCommandLineIndex = -1;
    this.currentCommandText = "";
    this.visibleCommandLength = 0;
    this.currentEventCallback = undefined;
    this.scrollOffset = 0;
    this.scrollTargetOffset = 0;
    this.state = "idle";
    this.previousState = "idle";
    this.cursorVisible = true;
    this.render();
  }

  render(): void {
    const context = this.context;
    context.clearRect(0, 0, this.width, this.height);
    context.fillStyle = COLORS.background;
    context.fillRect(0, 0, this.width, this.height);
    context.fillStyle = COLORS.panel;
    context.fillRect(16, 16, this.width - 32, this.height - 32);
    context.strokeStyle = COLORS.border;
    context.lineWidth = 2;
    context.strokeRect(16, 16, this.width - 32, this.height - 32);

    this.drawHeader();
    context.font = `500 25px ${FONT_FAMILY}`;
    context.textBaseline = "top";
    const lineHeight = 48;
    const left = 54;
    const firstLineTop = 108;

    context.save();
    context.beginPath();
    context.rect(32, 92, this.width - 64, this.height - 112);
    context.clip();

    let row = 0;
    this.historyLines.forEach((line) => {
      const y = firstLineTop + (row - this.scrollOffset) * lineHeight;
      if (line.type === "blank") {
        row += 0.5;
        return;
      }
      const text = line.type === "command" ? `$ ${line.text ?? ""}` : line.text ?? "";
      const color = line.type === "prompt" ? COLORS.prompt : this.colorForLine(line.type);
      row += this.drawWrappedLine(text, color, left, y, lineHeight);
    });

    if (this.currentCommandLineIndex >= 0 && this.currentEventLines.length > 0) {
      const typed = this.currentCommandText.slice(0, this.visibleCommandLength);
      row += this.drawWrappedLine(`$ ${typed}`, COLORS.command, left, firstLineTop + (row - this.scrollOffset) * lineHeight, lineHeight);
    }

    if (this.state === "typing" || this.state === "output" || this.state === "idle") {
      if (this.cursorVisible) {
        this.drawWrappedLine("▋", COLORS.cursor, left, firstLineTop + (row - this.scrollOffset) * lineHeight, lineHeight);
      }
    }
    context.restore();

    this.redrawCount += 1;
    this.textureUploadCount += 1;
    this.texture.needsUpdate = true;
  }

  pause(): void {
    if (this.state === "paused") return;
    this.previousState = this.state;
    this.stopTimers();
    this.state = "paused";
    this.render();
  }

  resume(): void {
    if (this.state !== "paused") return;
    this.state = this.previousState;
    this.render();
    if (this.state === "typing") {
      this.startCursorTimer();
      this.scheduleNextCharacter(0);
    } else if (this.state === "output") {
      this.startCursorTimer();
      this.outputTimer = window.setTimeout(() => this.finishEvent(), this.currentOutputPause);
    } else if (this.state === "scrolling") {
      this.startScrollAnimation();
    } else {
      this.startCursorTimer();
    }
  }

  stop(): void {
    this.pause();
  }

  completeInstantly(): void {
    this.stopTimers();
    if (this.state === "scrolling") {
      this.scrollOffset = this.scrollTargetOffset;
      this.state = "idle";
      this.render();
      const callback = this.currentEventCallback;
      this.currentEventCallback = undefined;
      callback?.();
      this.startCursorTimer();
      return;
    }

    if (this.currentEventLines.length > 0) {
      if (this.currentCommandLineIndex >= 0) {
        this.appendHistory([
          this.currentEventLines[this.currentCommandLineIndex],
          ...this.currentEventLines.slice(this.currentCommandLineIndex + 1),
        ]);
      } else {
        this.appendHistory(this.currentEventLines);
      }
      this.currentEventLines = [];
      this.currentCommandLineIndex = -1;
      this.currentCommandText = "";
      this.visibleCommandLength = 0;
    }

    this.scrollOffset = this.getTargetScrollOffset();
    this.scrollTargetOffset = this.scrollOffset;
    this.state = "idle";
    this.cursorVisible = true;
    this.render();
    const callback = this.currentEventCallback;
    this.currentEventCallback = undefined;
    callback?.();
    this.startCursorTimer();
  }

  getState(): TerminalRuntimeState {
    return this.state;
  }

  isBusy(): boolean {
    return this.state === "typing" || this.state === "output" || this.state === "scrolling" || this.state === "paused";
  }

  getMetrics(): TerminalTextureMetrics {
    const isComplete = this.currentEventLines.length === 0 && this.state === "idle" && this.historyLines.length > 0;
    return {
      redrawCount: this.redrawCount,
      renderCount: this.redrawCount,
      textureUploadCount: this.textureUploadCount,
      eventsGenerated: this.eventsGenerated,
      state: this.state,
      historyLength: this.historyLines.length,
      isComplete,
    };
  }

  dispose(): void {
    this.stopTimers();
    this.texture.dispose();
  }

  private scheduleNextCharacter(delay: number): void {
    this.typingTimer = window.setTimeout(() => this.typeNextCharacter(), delay);
  }

  private typeNextCharacter(): void {
    if (this.state !== "typing") return;
    this.visibleCommandLength = Math.min(this.visibleCommandLength + 1, this.currentCommandText.length);
    this.render();
    if (this.visibleCommandLength >= this.currentCommandText.length) {
      this.state = "output";
      this.outputTimer = window.setTimeout(() => this.finishEvent(), this.currentOutputPause);
      return;
    }
    const jitteredSpeed = this.typingSpeed * (0.75 + Math.random() * 0.55);
    this.scheduleNextCharacter(jitteredSpeed);
  }

  private finishEvent(): void {
    if (this.currentEventLines.length === 0) return;
    this.stopTimers();
    if (this.currentCommandLineIndex >= 0) {
      this.appendHistory([
        this.currentEventLines[this.currentCommandLineIndex],
        ...this.currentEventLines.slice(this.currentCommandLineIndex + 1),
      ]);
    } else {
      this.appendHistory(this.currentEventLines);
    }
    this.currentEventLines = [];
    this.currentCommandLineIndex = -1;
    this.currentCommandText = "";
    this.visibleCommandLength = 0;
    this.state = "scrolling";
    this.scrollTargetOffset = this.getTargetScrollOffset();
    this.startScrollAnimation();
  }

  private startScrollAnimation(): void {
    this.stopScrollTimer();
    if (this.reducedMotion || this.scrollTargetOffset <= this.scrollOffset + 0.01) {
      this.scrollOffset = this.scrollTargetOffset;
      this.state = "idle";
      this.render();
      const callback = this.currentEventCallback;
      this.currentEventCallback = undefined;
      callback?.();
      this.startCursorTimer();
      return;
    }

    this.scrollStartOffset = this.scrollOffset;
    this.scrollStartTime = performance.now();
    const tick = () => {
      if (this.state !== "scrolling") return;
      const elapsed = performance.now() - this.scrollStartTime;
      const progress = Math.min(elapsed / this.scrollDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.scrollOffset = this.scrollStartOffset + (this.scrollTargetOffset - this.scrollStartOffset) * eased;
      this.render();
      if (progress >= 1) {
        this.scrollOffset = this.scrollTargetOffset;
        this.state = "idle";
        const callback = this.currentEventCallback;
        this.currentEventCallback = undefined;
        callback?.();
        this.startCursorTimer();
        return;
      }
      this.scrollTimer = window.setTimeout(tick, 33);
    };
    tick();
  }

  private startCursorTimer(): void {
    this.stopCursorTimer();
    this.cursorTimer = window.setInterval(() => {
      if (this.state !== "typing" && this.state !== "output" && this.state !== "idle") return;
      this.cursorVisible = !this.cursorVisible;
      this.render();
    }, this.cursorInterval);
  }

  private stopTimers(): void {
    if (this.typingTimer !== undefined) window.clearTimeout(this.typingTimer);
    if (this.outputTimer !== undefined) window.clearTimeout(this.outputTimer);
    this.typingTimer = undefined;
    this.outputTimer = undefined;
    this.stopCursorTimer();
    this.stopScrollTimer();
  }

  private stopCursorTimer(): void {
    if (this.cursorTimer !== undefined) window.clearInterval(this.cursorTimer);
    this.cursorTimer = undefined;
  }

  private stopScrollTimer(): void {
    if (this.scrollTimer !== undefined) window.clearTimeout(this.scrollTimer);
    this.scrollTimer = undefined;
  }

  private appendHistory(lines: readonly TerminalLine[]): void {
    lines.forEach((line) => this.historyLines.push({ ...line }));
    if (this.historyLines.length > this.maxHistoryLines) {
      this.historyLines.splice(0, this.historyLines.length - this.maxHistoryLines);
    }
    this.scrollTargetOffset = this.getTargetScrollOffset();
  }

  private getTargetScrollOffset(): number {
    return Math.max(0, this.getVisualRowCount() - this.visibleLineCount);
  }

  private getVisualRowCount(): number {
    this.context.font = `500 25px ${FONT_FAMILY}`;
    return this.historyLines.reduce((total, line) => {
      if (line.type === "blank") return total + 0.5;
      return total + this.wrapText(line.text ?? "", this.width - 54 - 54).length;
    }, 0);
  }

  private drawHeader(): void {
    const context = this.context;
    context.fillStyle = COLORS.title;
    context.font = `600 20px ${FONT_FAMILY}`;
    context.textBaseline = "middle";
    context.fillText(this.title.toUpperCase(), 52, 53);
    context.fillStyle = COLORS.prompt;
    context.beginPath();
    context.arc(this.width - 74, 52, 6, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = COLORS.border;
    context.fillRect(52, 76, this.width - 104, 2);
  }

  private drawLine(text: string, color: string, x: number, y: number): void {
    this.context.fillStyle = color;
    this.context.fillText(text, x, y);
  }

  private drawWrappedLine(text: string, color: string, x: number, y: number, lineHeight: number): number {
    const maxWidth = this.width - x - 54;
    const chunks = this.wrapText(text, maxWidth);
    chunks.forEach((chunk, index) => this.drawLine(chunk, color, x, y + index * lineHeight));
    return Math.max(chunks.length, 1);
  }

  private wrapText(text: string, maxWidth: number): string[] {
    if (text.length === 0) return [""];
    const chunks: string[] = [];
    let current = "";
    for (const character of text) {
      const next = current + character;
      if (current && this.context.measureText(next).width > maxWidth) {
        chunks.push(current);
        current = character;
      } else {
        current = next;
      }
    }
    if (current) chunks.push(current);
    return chunks;
  }

  private colorForLine(type: TerminalLineType): string {
    if (type === "success") return COLORS.success;
    if (type === "warning") return COLORS.warning;
    return COLORS.output;
  }
}
