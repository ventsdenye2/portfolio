import type { DetailState, MainState } from "../camera/cameraTypes";
import {
  getModuleContent,
  portfolioContent,
  type CreativityEntry,
  type PortfolioProject,
  type PortfolioState,
} from "../content/portfolioContent";

const NAV_STATES: MainState[] = ["personalIntro", "techStack", "projects", "creativityBase", "moreInterests"];
const STATE_LABELS: Record<PortfolioState, string> = {
  personalIntro: "Personal Intro",
  techStack: "Tech Stack",
  projects: "Projects",
  creativityBase: "Creativity",
  moreInterests: "More Interests",
};
const INTRO_MANIFESTO_LINES = ["I observe.", "I question.", "I imagine.", "I create."] as const;

export interface PortfolioUiSnapshot {
  mainState: MainState;
  detailState: DetailState;
  isTransitioning: boolean;
}

export interface PortfolioUiCallbacks {
  navigateTo: (state: MainState) => Promise<boolean>;
  enterCreativityCloseup: (entrySlug?: string) => Promise<boolean>;
  exitCreativityCloseup: () => Promise<boolean>;
  previewCreativityEntry: (entrySlug: string) => void;
  setProjectIndex: (index: number) => void;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[character] ?? character);
}

export class PortfolioUi {
  private readonly panel = document.querySelector<HTMLElement>("#module-panel");
  private readonly index = document.querySelector<HTMLElement>("#module-index");
  private readonly kicker = document.querySelector<HTMLElement>("#module-kicker");
  private readonly introManifesto = document.querySelector<HTMLElement>("#intro-manifesto");
  private readonly title = document.querySelector<HTMLElement>("#module-title");
  private readonly subtitle = document.querySelector<HTMLElement>("#module-subtitle");
  private readonly body = document.querySelector<HTMLElement>("#module-body");
  private readonly creativityShowcase = document.querySelector<HTMLElement>("#creativity-showcase");
  private readonly timeline = document.querySelector<HTMLElement>("#module-timeline");
  private readonly tags = document.querySelector<HTMLElement>("#module-tags");
  private readonly actions = document.querySelector<HTMLElement>("#module-actions");
  private readonly creativityExperience = document.querySelector<HTMLElement>("#creativity-experience");
  private readonly creativityExperienceFrame = document.querySelector<HTMLIFrameElement>("#creativity-experience-frame");
  private readonly creativityExperienceTitle = document.querySelector<HTMLElement>("#experience-title");
  private readonly status = document.querySelector<HTMLElement>("#ui-status");
  private readonly brandCaption = document.querySelector<HTMLElement>("#brand-caption");
  private readonly introTypewriter = document.querySelector<HTMLElement>("#intro-typewriter");
  private readonly introTypewriterText = document.querySelector<HTMLElement>("#intro-typewriter-text");
  private readonly callbacks: PortfolioUiCallbacks;
  private currentSnapshot: PortfolioUiSnapshot = {
    mainState: "personalIntro",
    detailState: "base",
    isTransitioning: false,
  };
  private currentProjectIndex = 0;
  private interactionLocked = false;
  private wheelResetTimer: number | undefined;
  private hasRendered = false;
  private typewriterTimer: number | undefined;
  private typewriterRunId = 0;
  private typewriterRunning = false;
  private typewriterLineIndex = 0;
  private typewriterSuffix = "";
  private typewriterDeleting = false;
  private introManifestoTimer: number | undefined;
  private introManifestoRunId = 0;
  private introManifestoPlayed = false;
  private renderedMainState: MainState | undefined;
  private renderedDetailState: DetailState | undefined;
  private selectedCreativitySlug: string = portfolioContent.conceptLab[0]?.slug ?? "";
  private closeupExperienceVisible = false;

  constructor(callbacks: PortfolioUiCallbacks) {
    this.callbacks = callbacks;
  }

  bind(): void {
    document.querySelectorAll<HTMLButtonElement>("[data-portfolio-nav]").forEach((button) => {
      button.addEventListener("click", () => {
        const state = button.dataset.portfolioNav as MainState | undefined;
        if (state) void this.goTo(state);
      });
    });
    document.querySelector<HTMLAnchorElement>("[data-portfolio-home]")?.addEventListener("click", (event) => {
      event.preventDefault();
      void this.goTo("personalIntro");
    });
    this.actions?.addEventListener("click", (event) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-ui-action]");
      if (!target) return;
      const action = target.dataset.uiAction;
      if (action === "prev-project") this.changeProject(-1);
      if (action === "next-project") this.changeProject(1);
      if (action === "goto-projects") void this.goTo("projects");
      if (action === "goto-intro") void this.goTo("personalIntro");
      if (action === "enter-closeup") void this.enterCloseup();
      if (action === "exit-closeup") void this.exitCloseup();
    });
    this.creativityShowcase?.addEventListener("click", (event) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-creativity-entry]");
      if (!target) return;
      const entrySlug = target.dataset.creativityEntry;
      if (entrySlug) void this.enterCloseup(entrySlug);
    });
    this.creativityShowcase?.addEventListener("pointerover", (event) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-creativity-entry]");
      const entrySlug = target?.dataset.creativityEntry;
      if (entrySlug) this.previewCreativityEntry(entrySlug);
    });
    this.creativityShowcase?.addEventListener("focusin", (event) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-creativity-entry]");
      const entrySlug = target?.dataset.creativityEntry;
      if (entrySlug) this.previewCreativityEntry(entrySlug);
    });
    this.creativityExperience?.addEventListener("click", (event) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-experience-action]");
      if (target?.dataset.experienceAction === "exit") void this.exitCloseup();
    });
    window.addEventListener("wheel", (event) => {
      if (event.target instanceof HTMLElement && event.target.closest("#module-panel")) return;
      if (Math.abs(event.deltaY) < 14 || this.interactionLocked) return;
      event.preventDefault();
      window.clearTimeout(this.wheelResetTimer);
      this.wheelResetTimer = window.setTimeout(() => this.interactionLocked = false, 650);
      this.interactionLocked = true;
      const currentIndex = NAV_STATES.indexOf(this.currentSnapshot.mainState);
      const nextIndex = Math.max(0, Math.min(NAV_STATES.length - 1, currentIndex + (event.deltaY > 0 ? 1 : -1)));
      if (nextIndex !== currentIndex) void this.goTo(NAV_STATES[nextIndex]);
      else this.interactionLocked = false;
    }, { passive: false });
    window.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      event.preventDefault();
      const currentIndex = NAV_STATES.indexOf(this.currentSnapshot.mainState);
      const nextIndex = Math.max(0, Math.min(NAV_STATES.length - 1, currentIndex + (event.key === "ArrowDown" ? 1 : -1)));
      if (nextIndex !== currentIndex) void this.goTo(NAV_STATES[nextIndex]);
    });
  }

  setStatus(message: string): void {
    if (this.status) this.status.textContent = message;
  }

  setProjectIndex(index: number): void {
    this.currentProjectIndex = (index + portfolioContent.projects.length) % portfolioContent.projects.length;
    this.render(this.currentSnapshot);
  }

  sync(snapshot: PortfolioUiSnapshot): void {
    // Keep the target panel visible while a navigation click is moving the
    // camera. Intermediate camera snapshots must not revert it to the source.
    if (snapshot.isTransitioning && this.interactionLocked) {
      this.currentSnapshot = { ...this.currentSnapshot, isTransitioning: true };
      return;
    }
    const changed = !this.hasRendered
      || snapshot.mainState !== this.currentSnapshot.mainState
      || snapshot.detailState !== this.currentSnapshot.detailState
      || snapshot.isTransitioning !== this.currentSnapshot.isTransitioning;
    this.currentSnapshot = snapshot;
    if (changed) this.render(snapshot);
  }

  private async goTo(state: MainState): Promise<void> {
    if (this.interactionLocked || state === this.currentSnapshot.mainState && this.currentSnapshot.detailState === "base") return;
    const previousSnapshot = this.currentSnapshot;
    this.interactionLocked = true;
    if (this.currentSnapshot.detailState === "closeup" || this.closeupExperienceVisible) this.hideCloseupExperience();
    const pendingSnapshot: PortfolioUiSnapshot = {
      mainState: state,
      detailState: "base",
      isTransitioning: true,
    };
    this.currentSnapshot = pendingSnapshot;
    this.render(pendingSnapshot);
    const success = await this.callbacks.navigateTo(state);
    this.interactionLocked = false;
    if (!success) {
      this.currentSnapshot = previousSnapshot;
      this.render(previousSnapshot);
      this.setStatus("Navigation is still settling…");
    }
  }

  private async enterCloseup(entrySlug = this.selectedCreativitySlug): Promise<void> {
    if (this.interactionLocked || this.currentSnapshot.mainState !== "creativityBase" || this.currentSnapshot.detailState === "closeup") return;
    const entry = portfolioContent.conceptLab.find((item) => item.slug === entrySlug);
    if (!entry) return;
    this.selectedCreativitySlug = entry.slug;
    this.interactionLocked = true;
    this.setCloseupPanelHidden(true);
    const success = await this.callbacks.enterCreativityCloseup(entry.slug);
    this.interactionLocked = false;
    if (success) this.showCloseupExperience(entry);
    else {
      this.setCloseupPanelHidden(false);
      this.setStatus("Creativity CloseUp is available from the base view.");
    }
  }

  private async exitCloseup(): Promise<void> {
    if (this.interactionLocked || this.currentSnapshot.detailState !== "closeup") return;
    this.interactionLocked = true;
    this.hideCloseupExperience(false);
    await this.callbacks.exitCreativityCloseup();
    this.interactionLocked = false;
  }

  private previewCreativityEntry(entrySlug: string): void {
    const entry = portfolioContent.conceptLab.find((item) => item.slug === entrySlug);
    if (!entry) return;
    this.selectedCreativitySlug = entry.slug;
    this.callbacks.previewCreativityEntry(entry.slug);
  }

  private setCloseupPanelHidden(hidden: boolean): void {
    this.panel?.classList.toggle("is-closeup-hidden", hidden);
  }

  private showCloseupExperience(entry: CreativityEntry): void {
    if (!this.creativityExperience || !this.creativityExperienceFrame) return;
    this.setCloseupPanelHidden(true);
    if (this.creativityExperienceTitle) this.creativityExperienceTitle.textContent = entry.title;
    if (this.creativityExperienceFrame.src !== new URL(entry.link, window.location.href).href) {
      this.creativityExperienceFrame.src = entry.link;
    }
    this.creativityExperience.hidden = false;
    this.closeupExperienceVisible = true;
  }

  private hideCloseupExperience(restorePanel = true): void {
    if (this.creativityExperienceFrame) this.creativityExperienceFrame.src = "about:blank";
    if (this.creativityExperience) this.creativityExperience.hidden = true;
    this.closeupExperienceVisible = false;
    this.setCloseupPanelHidden(!restorePanel);
  }

  private changeProject(delta: number): void {
    this.setProjectIndex(this.currentProjectIndex + delta);
    this.callbacks.setProjectIndex(this.currentProjectIndex);
  }

  private render(snapshot: PortfolioUiSnapshot): void {
    if (!this.panel || !this.index || !this.kicker || !this.title || !this.subtitle || !this.body || !this.timeline || !this.tags || !this.actions) return;
    const moduleChanged = !this.hasRendered
      || this.renderedMainState !== snapshot.mainState
      || this.renderedDetailState !== snapshot.detailState;
    this.hasRendered = true;
    const state = snapshot.detailState === "closeup" ? "creativityBase" : snapshot.mainState;
    const content = getModuleContent(state);
    const isCloseup = snapshot.detailState === "closeup";
    const isIntro = state === "personalIntro";
    const project = state === "projects" ? portfolioContent.projects[this.currentProjectIndex] : undefined;
    const moduleNumber = NAV_STATES.indexOf(snapshot.mainState) + 1;
    this.index.textContent = String(moduleNumber).padStart(2, "0");
    this.kicker.textContent = isCloseup ? "CREATIVITY / CLOSEUP" : content.kicker;
    if (this.introManifesto) {
      if (isIntro && moduleChanged && !this.introManifestoPlayed) {
        this.introManifestoPlayed = true;
        this.startIntroManifesto();
      }
      else this.stopIntroManifesto();
    }
    this.title.textContent = project?.title ?? (isCloseup ? "Creativity CloseUp" : content.title);
    this.subtitle.textContent = project ? `${project.type} · ${project.format}` : content.subtitle;
    this.body.innerHTML = project
      ? `<p>${escapeHtml(project.summary)}</p><p class="project-detail">${escapeHtml(project.status)} · ${escapeHtml(project.date)} · ${escapeHtml(project.format)}</p>`
      : `<p>${escapeHtml(content.body)}</p><p class="module-detail">${escapeHtml(isCloseup ? "显示器已进入近景状态；返回后可继续浏览其他模块。" : content.detail)}</p>`;
    if (this.creativityShowcase) {
      const showShowcase = state === "creativityBase" && !isCloseup;
      this.creativityShowcase.hidden = !showShowcase;
      this.creativityShowcase.innerHTML = showShowcase ? this.renderCreativityShowcase() : "";
    }
    this.timeline.hidden = !isIntro;
    this.timeline.innerHTML = isIntro ? this.renderExperienceTimeline() : "";
    const tags = project?.tags ?? content.tags;
    this.tags.innerHTML = tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    this.actions.innerHTML = this.renderActions(snapshot, project);
    this.panel.classList.toggle("is-intro", isIntro);
    this.setCloseupPanelHidden(isCloseup || this.closeupExperienceVisible);
    if (this.brandCaption) this.brandCaption.hidden = isIntro;
    if (this.introTypewriter) this.introTypewriter.hidden = !isIntro;
    if (isIntro) this.startTypewriter();
    else this.stopTypewriter();
    this.renderedMainState = snapshot.mainState;
    this.renderedDetailState = snapshot.detailState;
    this.panel.classList.remove("is-updating");
    requestAnimationFrame(() => this.panel?.classList.add("is-updating"));
    document.querySelectorAll<HTMLButtonElement>("[data-portfolio-nav]").forEach((button) => {
      const activeState = button.dataset.portfolioNav === snapshot.mainState;
      button.classList.toggle("is-active", activeState);
      button.setAttribute("aria-current", activeState ? "page" : "false");
    });
    document.querySelector("#scene-status")?.classList.toggle("is-busy", snapshot.isTransitioning);
  }

  private renderExperienceTimeline(): string {
    return `<div class="timeline-heading"><span class="timeline-rule"></span><span>EXPERIENCE / SELECTED WORK</span></div><ol>${portfolioContent.personalIntro.experienceTimeline.map((entry) => `<li class="experience-item"><time>${escapeHtml(entry.period)}</time><div><strong>${escapeHtml(entry.title)}</strong><p>${escapeHtml(entry.detail)}</p></div></li>`).join("")}</ol>`;
  }

  private renderCreativityShowcase(): string {
    return `<div class="creativity-showcase-heading"><span class="timeline-rule"></span><span>INTERACTIVE WORKS / HOVER TO PREVIEW</span></div><div class="creativity-showcase-list">${portfolioContent.conceptLab.map((entry) => `<article class="creativity-entry ${entry.slug === this.selectedCreativitySlug ? "is-selected" : ""}" data-creativity-entry="${escapeHtml(entry.slug)}" tabindex="0"><img class="creativity-entry-cover" src="${escapeHtml(entry.cover)}" alt="${escapeHtml(entry.title)} cover" /><div class="creativity-entry-copy"><p class="creativity-entry-index">${entry.slug === "ghostfont" ? "01" : "02"}</p><h2>${escapeHtml(entry.title)}</h2><p>${escapeHtml(entry.summary)}</p><div class="creativity-entry-tags">${entry.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div><button type="button" class="creativity-entry-open" data-creativity-entry="${escapeHtml(entry.slug)}">Enter CloseUp <span>↗</span></button></div></article>`).join("")}</div>`;
  }

  private startIntroManifesto(): void {
    if (!this.introManifesto || !this.panel) return;
    if (this.introManifestoTimer !== undefined) window.clearTimeout(this.introManifestoTimer);
    this.introManifestoRunId += 1;
    const runId = this.introManifestoRunId;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.introManifesto.hidden = false;
    this.introManifesto.classList.remove("is-playing", "is-exiting");
    this.introManifesto.innerHTML = INTRO_MANIFESTO_LINES
      .map((line) => `<span class="intro-manifesto-line">${escapeHtml(line)}</span>`)
      .join("");
    this.panel.classList.add("is-manifesto-active");
    this.panel.classList.remove("is-manifesto-revealed");

    requestAnimationFrame(() => {
      if (runId === this.introManifestoRunId) this.introManifesto?.classList.add("is-playing");
    });
    if (reducedMotion) {
      this.finishIntroManifesto(runId);
      return;
    }
    this.introManifestoTimer = window.setTimeout(() => {
      if (runId !== this.introManifestoRunId || !this.introManifesto) return;
      this.introManifesto.classList.add("is-exiting");
      this.introManifestoTimer = window.setTimeout(() => this.finishIntroManifesto(runId), 460);
    }, 2700);
  }

  private finishIntroManifesto(runId: number): void {
    if (runId !== this.introManifestoRunId || !this.introManifesto || !this.panel) return;
    this.introManifesto.hidden = true;
    this.introManifesto.classList.remove("is-playing", "is-exiting");
    this.panel.classList.remove("is-manifesto-active");
    this.panel.classList.add("is-manifesto-revealed");
    this.introManifestoTimer = window.setTimeout(() => {
      if (runId === this.introManifestoRunId) this.panel?.classList.remove("is-manifesto-revealed");
    }, 650);
  }

  private stopIntroManifesto(): void {
    if (this.introManifestoTimer !== undefined) window.clearTimeout(this.introManifestoTimer);
    this.introManifestoTimer = undefined;
    this.introManifestoRunId += 1;
    this.introManifesto?.classList.remove("is-playing", "is-exiting");
    if (this.introManifesto) {
      this.introManifesto.hidden = true;
      this.introManifesto.innerHTML = "";
    }
    this.panel?.classList.remove("is-manifesto-active", "is-manifesto-revealed");
  }

  private startTypewriter(): void {
    if (!this.introTypewriterText || this.typewriterRunning) return;
    const lines: readonly string[] = portfolioContent.personalIntro.openingLines;
    if (lines.length === 0) return;
    this.typewriterRunning = true;
    this.typewriterRunId += 1;
    const runId = this.typewriterRunId;
    this.typewriterLineIndex = 0;
    this.typewriterSuffix = "";
    this.typewriterDeleting = false;
    this.introTypewriterText.textContent = "I";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      this.introTypewriterText.textContent = lines[0];
      this.typewriterRunning = false;
      return;
    }
    const schedule = (callback: () => void, delay: number) => {
      this.typewriterTimer = window.setTimeout(() => {
        if (runId === this.typewriterRunId && this.typewriterRunning) callback();
      }, delay);
    };
    const tick = () => {
      const line = lines[this.typewriterLineIndex % lines.length] ?? lines[0];
      const suffix = line.startsWith("I") ? line.slice(1) : line;
      if (this.typewriterDeleting) {
        if (this.typewriterSuffix.length > 0) {
          this.typewriterSuffix = this.typewriterSuffix.slice(0, -1);
          this.introTypewriterText!.textContent = `I${this.typewriterSuffix}`;
          schedule(tick, 26);
        } else {
          this.typewriterDeleting = false;
          this.typewriterLineIndex = (this.typewriterLineIndex + 1) % lines.length;
          schedule(tick, 260);
        }
        return;
      }
      if (this.typewriterSuffix.length < suffix.length) {
        this.typewriterSuffix += suffix[this.typewriterSuffix.length] ?? "";
        this.introTypewriterText!.textContent = `I${this.typewriterSuffix}`;
        schedule(tick, 38);
        return;
      }
      this.typewriterDeleting = true;
      schedule(tick, 1450);
    };
    tick();
  }

  private stopTypewriter(): void {
    this.typewriterRunning = false;
    this.typewriterRunId += 1;
    if (this.typewriterTimer !== undefined) window.clearTimeout(this.typewriterTimer);
    this.typewriterTimer = undefined;
    this.typewriterSuffix = "";
    this.typewriterDeleting = false;
    if (this.introTypewriterText) this.introTypewriterText.textContent = "I";
  }

  private renderActions(snapshot: PortfolioUiSnapshot, project?: PortfolioProject): string {
    if (snapshot.detailState === "closeup") {
      return `<button class="ui-action ui-action-primary" type="button" data-ui-action="exit-closeup">Return to Creativity <span>←</span></button>`;
    }
    if (snapshot.mainState === "projects" && project) {
      const link = project.link
        ? `<a class="ui-action ui-action-secondary" href="${escapeHtml(project.link.url)}" target="_blank" rel="noreferrer">${escapeHtml(project.link.label)} <span>↗</span></a>`
        : "";
      return `<div class="project-controls"><button class="ui-action ui-action-secondary" type="button" data-ui-action="prev-project">← Prev</button><span>${String(this.currentProjectIndex + 1).padStart(2, "0")} / ${String(portfolioContent.projects.length).padStart(2, "0")}</span><button class="ui-action ui-action-secondary" type="button" data-ui-action="next-project">Next →</button></div>${link}`;
    }
    if (snapshot.mainState === "creativityBase") {
      return `<span class="module-action-hint">Hover a work to preview it on the monitor · click to enter CloseUp</span>`;
    }
    if (snapshot.mainState === "personalIntro" || snapshot.mainState === "techStack") {
      return `<button class="ui-action ui-action-primary" type="button" data-ui-action="goto-projects">Explore Projects <span>→</span></button>`;
    }
    return `<button class="ui-action ui-action-secondary" type="button" data-ui-action="goto-intro">Back to Intro <span>↗</span></button>`;
  }
}
