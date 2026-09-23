import * as THREE from "three";
import {
  techTerminalPanels,
  type TerminalEventTemplate,
  type TerminalLine,
  type TerminalPanelContent,
} from "../content/techTerminalContent";
import { TerminalTexture, type TerminalRuntimeState, type TerminalTextureMetrics } from "./TerminalTexture";

export interface TerminalControllerMetrics {
  redrawCount: number;
  textureUploadCount: number;
  eventsGenerated: number;
  panels: Array<{ name: string; metrics: TerminalTextureMetrics }>;
}

interface TerminalEntry {
  name: string;
  content: TerminalPanelContent;
  texture: TerminalTexture;
  mesh: THREE.Mesh;
  recentEventIds: string[];
  initialStarted: boolean;
  lastEventStartedAt: number;
  initialTimer?: number;
  nextTimer?: number;
  nextDueAt?: number;
}

const PANEL_NAMES = ["Terminal_Panel_A", "Terminal_Panel_B", "Terminal_Panel_C"] as const;
const DURATION_OPTIONS = ["173ms", "284ms", "412ms", "621ms", "831ms"];
const ROUTE_OPTIONS = ["/projects", "/tech", "/assets", "/camera"];

function materialArray(mesh: THREE.Mesh): THREE.Material[] {
  return Array.isArray(mesh.material) ? mesh.material : [mesh.material];
}

function makeTerminalMaterial(source: THREE.Material, texture: THREE.Texture): THREE.MeshBasicMaterial {
  const sourceWithAlpha = source as THREE.MeshStandardMaterial;
  const material = new THREE.MeshBasicMaterial({
    name: "MAT_Terminal_Dynamic_Canvas",
    map: texture,
    color: 0xffffff,
    transparent: source.transparent,
    opacity: source.opacity,
    alphaTest: sourceWithAlpha.alphaTest ?? 0,
    side: THREE.FrontSide,
    depthTest: true,
    depthWrite: true,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  material.userData.isContentMaterial = true;
  material.userData.isDynamicTerminalMaterial = true;
  return material;
}

function randomBetween(min: number, max: number): number {
  return min + Math.random() * Math.max(0, max - min);
}

function substituteTokens(text: string): string {
  return text
    .replace(/\{\{duration\}\}/g, () => DURATION_OPTIONS[Math.floor(Math.random() * DURATION_OPTIONS.length)])
    .replace(/\{\{route\}\}/g, () => ROUTE_OPTIONS[Math.floor(Math.random() * ROUTE_OPTIONS.length)]);
}

function instantiateLines(lines: readonly TerminalLine[]): TerminalLine[] {
  return lines.map((line) => ({
    ...line,
    text: line.text === undefined ? undefined : substituteTokens(line.text),
  }));
}

export class TerminalController {
  private readonly terminals: TerminalEntry[] = [];
  private active = false;
  private hasEnteredTech = false;
  private liveEnabled = true;
  private watchdogTimer: number | undefined;

  constructor(
    private readonly root: THREE.Object3D,
    contents: readonly TerminalPanelContent[] = techTerminalPanels,
  ) {
    PANEL_NAMES.forEach((name, index) => {
      const mesh = root.getObjectByName(name) as THREE.Mesh | undefined;
      const content = contents[index];
      if (!mesh?.isMesh || !content) {
        console.warn(`[Terminal] ${name} or its content data was not found; dynamic canvas skipped.`);
        return;
      }
      const texture = new TerminalTexture({
        width: 1024,
        height: 512,
        title: content.title,
        mascot: content.id === "tools" ? "orange-crab" : undefined,
        maxHistoryLines: 100,
        visibleLineCount: 9,
        typingSpeed: 34,
        cursorInterval: 620,
      });
      mesh.userData.isContentPlane = true;
      mesh.userData.contentPlaneRole = name;
      const materials = materialArray(mesh).map((source) => makeTerminalMaterial(source, texture.texture));
      mesh.material = materials.length === 1 ? materials[0] : materials;
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      this.terminals.push({
        name,
        content,
        texture,
        mesh,
        recentEventIds: [],
        initialStarted: false,
        lastEventStartedAt: 0,
      });
    });
    console.log("[Terminal] live panels", JSON.stringify(this.terminals.map((entry) => entry.name)));
  }

  activate(): void {
    if (!this.liveEnabled) return;
    this.active = true;
    if (!this.hasEnteredTech) {
      this.hasEnteredTech = true;
      this.scheduleInitialSequences(0);
      this.startWatchdog();
      return;
    }

    this.ensureLiveScheduling();
    this.startWatchdog();
  }

  deactivate(): void {
    this.active = false;
    this.stopWatchdog();
    this.terminals.forEach((entry) => {
      this.clearEntryTimers(entry);
      entry.texture.pause();
    });
  }

  replay(): void {
    this.clearAllTimers();
    this.liveEnabled = true;
    this.active = true;
    this.hasEnteredTech = true;
    this.terminals.forEach((entry) => {
      entry.texture.reset();
      entry.recentEventIds = [];
      entry.initialStarted = false;
      entry.lastEventStartedAt = 0;
    });
    this.scheduleInitialSequences(0);
    this.startWatchdog();
  }

  pause(): void {
    this.liveEnabled = false;
    this.active = false;
    this.stopWatchdog();
    this.terminals.forEach((entry) => {
      this.clearEntryTimers(entry);
      entry.texture.pause();
    });
  }

  resume(): void {
    this.liveEnabled = true;
    this.active = true;
    if (!this.hasEnteredTech) {
      this.hasEnteredTech = true;
      this.scheduleInitialSequences(0);
      this.startWatchdog();
      return;
    }
    this.ensureLiveScheduling();
    this.startWatchdog();
  }

  pauseForVisibility(): void {
    this.clearAllTimers();
    this.terminals.forEach((entry) => entry.texture.pause());
  }

  resumeFromVisibility(): void {
    if (!this.active || !this.liveEnabled) return;
    this.ensureLiveScheduling();
    this.startWatchdog();
  }

  setLiveEnabled(enabled: boolean): void {
    if (enabled) this.resume();
    else this.pause();
  }

  generateEvent(panelIndex: number): void {
    if (!this.active || !this.liveEnabled) return;
    const entry = this.terminals[panelIndex];
    if (!entry || entry.texture.isBusy()) return;
    this.clearNextTimer(entry);
    const event = this.chooseEvent(entry);
    if (event) this.startEvent(entry, event);
  }

  clearHistory(): void {
    this.terminals.forEach((entry) => entry.texture.clearHistory());
  }

  completeInstantly(): void {
    this.terminals.forEach((entry) => {
      if (entry.initialTimer !== undefined) {
        window.clearTimeout(entry.initialTimer);
        entry.initialTimer = undefined;
        this.startInitial(entry);
      }
      entry.texture.completeInstantly();
    });
  }

  getMetrics(): TerminalControllerMetrics {
    const panels = this.terminals.map((entry) => ({ name: entry.name, metrics: entry.texture.getMetrics() }));
    return {
      redrawCount: panels.reduce((sum, panel) => sum + panel.metrics.redrawCount, 0),
      textureUploadCount: panels.reduce((sum, panel) => sum + panel.metrics.textureUploadCount, 0),
      eventsGenerated: panels.reduce((sum, panel) => sum + panel.metrics.eventsGenerated, 0),
      panels,
    };
  }

  getState(): {
    active: boolean;
    hasEnteredTech: boolean;
    isPaused: boolean;
    isLive: boolean;
    isTyping: boolean;
    panelCount: number;
  } {
    return {
      active: this.active,
      hasEnteredTech: this.hasEnteredTech,
      isPaused: !this.active || this.terminals.some((entry) => entry.texture.getState() === "paused"),
      isLive: this.active && this.liveEnabled,
      isTyping: this.terminals.some((entry) => entry.texture.getState() === "typing"),
      panelCount: this.terminals.length,
    };
  }

  dispose(): void {
    this.clearAllTimers();
    this.stopWatchdog();
    this.terminals.forEach((entry) => entry.texture.dispose());
    this.terminals.length = 0;
  }

  private scheduleInitialSequences(delay: number): void {
    this.terminals.forEach((entry, index) => this.scheduleInitial(entry, delay + index * 500));
  }

  private scheduleInitial(entry: TerminalEntry, delay: number): void {
    this.clearInitialTimer(entry);
    entry.initialTimer = window.setTimeout(() => {
      entry.initialTimer = undefined;
      this.startInitial(entry);
    }, delay);
  }

  private startInitial(entry: TerminalEntry): void {
    if (!this.active || !this.liveEnabled || entry.initialStarted) return;
    entry.initialStarted = true;
    const started = entry.texture.startEvent(
      instantiateLines(entry.content.initialLines),
      () => this.scheduleNext(entry),
      300,
    );
    if (!started) entry.initialStarted = false;
  }

  private scheduleNext(entry: TerminalEntry, minOverride?: number, maxOverride?: number): void {
    if (!this.active || !this.liveEnabled || !entry.initialStarted) return;
    if (entry.nextTimer !== undefined) return;
    const delay = randomBetween(
      minOverride ?? entry.content.minEventDelay,
      maxOverride ?? entry.content.maxEventDelay,
    );
    entry.nextDueAt = performance.now() + delay;
    entry.nextTimer = window.setTimeout(() => {
      entry.nextTimer = undefined;
      entry.nextDueAt = undefined;
      if (!this.active || !this.liveEnabled) return;
      if (entry.texture.isBusy()) {
        this.scheduleNext(entry, 220, 500);
        return;
      }
      const event = this.chooseEvent(entry);
      if (event) this.startEvent(entry, event);
    }, delay);
  }

  private startEvent(entry: TerminalEntry, event: TerminalEventTemplate): void {
    if (!this.active || !this.liveEnabled || entry.texture.isBusy()) return;
    const now = performance.now();
    if (now - entry.lastEventStartedAt < 500) {
      this.scheduleNext(entry, 500, 800);
      return;
    }
    const started = entry.texture.startEvent(
      instantiateLines(event.lines),
      () => this.scheduleNext(entry),
      event.outputPause ?? randomBetween(180, 360),
    );
    if (!started) {
      this.scheduleNext(entry, 220, 500);
      return;
    }
    entry.lastEventStartedAt = now;
    entry.recentEventIds.push(event.id);
    if (entry.recentEventIds.length > 4) entry.recentEventIds.shift();
  }

  private ensureLiveScheduling(): void {
    if (!this.active || !this.liveEnabled || document.hidden) return;
    this.terminals.forEach((entry, index) => {
      entry.texture.resume();
      if (!entry.initialStarted) {
        if (entry.initialTimer === undefined) this.scheduleInitial(entry, 220 + index * 160);
        return;
      }
      if (entry.nextTimer === undefined && entry.texture.getState() === "idle") {
        this.scheduleNext(entry, 220, 500);
      }
    });
  }

  private startWatchdog(): void {
    if (this.watchdogTimer !== undefined) return;
    this.watchdogTimer = window.setInterval(() => {
      // This is a scheduling health check only. It never redraws a canvas;
      // TerminalTexture remains event-driven and redraws only on state change.
      this.ensureLiveScheduling();
    }, 1000);
  }

  private stopWatchdog(): void {
    if (this.watchdogTimer !== undefined) window.clearInterval(this.watchdogTimer);
    this.watchdogTimer = undefined;
  }

  private chooseEvent(entry: TerminalEntry): TerminalEventTemplate | undefined {
    const recent = new Set(entry.recentEventIds.slice(-3));
    const candidates = entry.content.events.filter((event) => !recent.has(event.id));
    const pool = candidates.length > 0 ? candidates : entry.content.events;
    if (pool.length === 0) return undefined;
    const totalWeight = pool.reduce((sum, event) => sum + (event.weight ?? 1), 0);
    let cursor = Math.random() * totalWeight;
    for (const event of pool) {
      cursor -= event.weight ?? 1;
      if (cursor <= 0) return event;
    }
    return pool[pool.length - 1];
  }

  private clearInitialTimer(entry: TerminalEntry): void {
    if (entry.initialTimer !== undefined) window.clearTimeout(entry.initialTimer);
    entry.initialTimer = undefined;
  }

  private clearNextTimer(entry: TerminalEntry): void {
    if (entry.nextTimer !== undefined) window.clearTimeout(entry.nextTimer);
    entry.nextTimer = undefined;
    entry.nextDueAt = undefined;
  }

  private clearEntryTimers(entry: TerminalEntry): void {
    this.clearInitialTimer(entry);
    this.clearNextTimer(entry);
  }

  private clearAllTimers(): void {
    this.terminals.forEach((entry) => this.clearEntryTimers(entry));
  }
}

export type { TerminalRuntimeState };
