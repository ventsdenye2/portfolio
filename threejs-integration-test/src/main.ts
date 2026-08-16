import * as THREE from "three";
import { gsap } from "gsap";
import {
  CameraController,
} from "./camera/cameraController";
import type {
  CameraNavigationRulesFile,
  CameraState,
  CameraStatesFile,
  CameraTransitionsFile,
  MainState,
  StateName,
} from "./camera/cameraTypes";
import {
  EXPECTED_ROOTS,
  loadPortfolioScene,
  type LoadedPortfolioScene,
} from "./scene/loadPortfolioScene";
import { FloatingObjectsController } from "./scene/floatingObjects";
import { setCreativityScreenTexture, setPersonalIntroPhotoTexture, setProjectsScreenTexture } from "./scene/contentPlanes";
import { TerminalController } from "./terminal/TerminalController";
import { NPRManager, type NPRRootController, CONTENT_PLANE_NAMES } from "./npr/NPRManager";
import { DepthOfFieldController } from "./effects/depthOfField";
import { dofStatePresets } from "./effects/dofPresets";
import { lightingPresetForState, lightingPresets, type LightingPresetName } from "./effects/lightingPresets";
import {
  getSavedLightingPreset,
  hasSavedLightingPreset,
  loadLightingPresets,
  saveLightingPreset,
} from "./effects/lightingPresetStorage";
import { PortfolioUi } from "./ui/portfolioUi";
import { portfolioContent } from "./content/portfolioContent";

const queryParams = new URLSearchParams(window.location.search);
const debugMode = queryParams.get("debug") === "1";
if (queryParams.get("capture") === "1") {
  document.documentElement.classList.add("capture-mode");
}
if (debugMode) {
  document.documentElement.classList.add("debug-mode");
  document.querySelector<HTMLElement>("#debug-panel")?.removeAttribute("hidden");
}

const captureStateParam = queryParams.get("captureState");
const captureDofParam = queryParams.get("captureDof");
const captureStateNames: StateName[] = [
  "personalIntro",
  "techStack",
  "projects",
  "creativityBase",
  "creativityCloseup",
  "moreInterests",
];
import type { NPRConfig } from "./npr/nprConfig";
import { creativityPreset } from "./npr/presets/creativityPreset";
import { personalIntroPreset } from "./npr/presets/personalIntroPreset";
import { projectsPreset } from "./npr/presets/projectsPreset";
import { techStackPreset } from "./npr/presets/techStackPreset";
import { interestsPreset } from "./npr/presets/interestsPreset";
import {
  exportScenePreset,
  getSavedScenePreset,
  hasSavedScenePreset,
  loadScenePresets,
  saveScenePreset,
  type NPRSceneKey,
} from "./npr/presetStorage";
import "./style.css";

const canvasHost = document.querySelector<HTMLDivElement>("#canvas-host");
const statusElement = document.querySelector<HTMLParagraphElement>("#status");
const loadBadge = document.querySelector<HTMLSpanElement>("#load-badge");
const uiStatusElement = document.querySelector<HTMLElement>("#ui-status");
const currentStateElement = document.querySelector<HTMLElement>("#current-state");
const detailStateElement = document.querySelector<HTMLElement>("#detail-state");
const loadedRootsElement = document.querySelector<HTMLElement>("#loaded-roots");
const cameraPositionElement = document.querySelector<HTMLElement>("#camera-position");
const cameraRotationElement = document.querySelector<HTMLElement>("#camera-rotation");
const cameraFovElement = document.querySelector<HTMLElement>("#camera-fov");
const planeDebugElement = document.querySelector<HTMLPreElement>("#plane-debug");
const nprMeshCountElement = document.querySelector<HTMLElement>("#npr-mesh-count");
const nprPassCountElement = document.querySelector<HTMLElement>("#npr-pass-count");
const nprPresetStateElement = document.querySelector<HTMLElement>("#npr-preset-state");
const drawCallsElement = document.querySelector<HTMLElement>("#draw-calls");
const triangleCountElement = document.querySelector<HTMLElement>("#triangle-count");
const fpsElement = document.querySelector<HTMLElement>("#fps");
const terminalStateElement = document.querySelector<HTMLElement>("#terminal-state");
const terminalUpdatesElement = document.querySelector<HTMLElement>("#terminal-updates");
const terminalUploadsElement = document.querySelector<HTMLElement>("#terminal-uploads");
const terminalPanelMetricElements = [
  document.querySelector<HTMLElement>("#terminal-a-metrics"),
  document.querySelector<HTMLElement>("#terminal-b-metrics"),
  document.querySelector<HTMLElement>("#terminal-c-metrics"),
];

if (!canvasHost || !statusElement || !loadBadge) {
  throw new Error("Debug UI root elements are missing.");
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc6c7c4);

const camera = new THREE.PerspectiveCamera(39.6, window.innerWidth / window.innerHeight, 0.05, 1000);
camera.position.set(0, -5, 2.5);

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.info.autoReset = false;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
canvasHost.appendChild(renderer.domElement);

const initialLightingPresets = loadLightingPresets(lightingPresets);
const initialLighting = initialLightingPresets.personalIntro;
const ambientLight = new THREE.AmbientLight(0xffffff, initialLighting.ambientIntensity);
scene.add(ambientLight);
const hemisphereLight = new THREE.HemisphereLight(0xf5f6f5, 0x707473, initialLighting.hemisphereIntensity);
scene.add(hemisphereLight);
const keyLight = new THREE.DirectionalLight(0xffffff, initialLighting.keyIntensity);
keyLight.position.fromArray(initialLighting.keyPosition);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.bias = -0.00025;
keyLight.shadow.normalBias = 0.02;
keyLight.shadow.radius = 3;
keyLight.shadow.camera.left = -16;
keyLight.shadow.camera.right = 16;
keyLight.shadow.camera.top = 16;
keyLight.shadow.camera.bottom = -16;
keyLight.shadow.camera.near = 0.1;
keyLight.shadow.camera.far = 40;
keyLight.shadow.camera.updateProjectionMatrix();
scene.add(keyLight);
scene.add(keyLight.target);
const introFillLight = new THREE.DirectionalLight(0xffffff, initialLighting.fillIntensity);
introFillLight.position.set(-4, 5, 6);
introFillLight.castShadow = false;
introFillLight.target.position.fromArray(initialLighting.keyTarget);
scene.add(introFillLight);
scene.add(introFillLight.target);

const lightingTransition = {
  keyIntensity: initialLighting.keyIntensity,
  shadowIntensity: initialLighting.shadowIntensity,
  fillIntensity: initialLighting.fillIntensity,
  ambientIntensity: initialLighting.ambientIntensity,
  hemisphereIntensity: initialLighting.hemisphereIntensity,
  keyX: initialLighting.keyPosition[0],
  keyY: initialLighting.keyPosition[1],
  keyZ: initialLighting.keyPosition[2],
  targetX: initialLighting.keyTarget[0],
  targetY: initialLighting.keyTarget[1],
  targetZ: initialLighting.keyTarget[2],
};

function applyLightingTransitionValues(): void {
  keyLight.intensity = lightingTransition.keyIntensity;
  keyLight.shadow.intensity = lightingTransition.shadowIntensity;
  introFillLight.intensity = lightingTransition.fillIntensity;
  ambientLight.intensity = lightingTransition.ambientIntensity;
  hemisphereLight.intensity = lightingTransition.hemisphereIntensity;
  keyLight.position.set(lightingTransition.keyX, lightingTransition.keyY, lightingTransition.keyZ);
  keyLight.target.position.set(lightingTransition.targetX, lightingTransition.targetY, lightingTransition.targetZ);
  keyLight.target.updateMatrixWorld();
}

function setLightingForState(stateName: StateName, immediate = false): void {
  const preset = lightingPresetForState(stateName, initialLightingPresets);
  gsap.killTweensOf(lightingTransition);
  if (immediate) {
    lightingTransition.keyIntensity = preset.keyIntensity;
    lightingTransition.shadowIntensity = preset.shadowIntensity;
    lightingTransition.fillIntensity = preset.fillIntensity;
    lightingTransition.ambientIntensity = preset.ambientIntensity;
    lightingTransition.hemisphereIntensity = preset.hemisphereIntensity;
    lightingTransition.keyX = preset.keyPosition[0];
    lightingTransition.keyY = preset.keyPosition[1];
    lightingTransition.keyZ = preset.keyPosition[2];
    lightingTransition.targetX = preset.keyTarget[0];
    lightingTransition.targetY = preset.keyTarget[1];
    lightingTransition.targetZ = preset.keyTarget[2];
  } else {
    gsap.to(lightingTransition, {
      keyIntensity: preset.keyIntensity,
      shadowIntensity: preset.shadowIntensity,
      fillIntensity: preset.fillIntensity,
      ambientIntensity: preset.ambientIntensity,
      hemisphereIntensity: preset.hemisphereIntensity,
      keyX: preset.keyPosition[0],
      keyY: preset.keyPosition[1],
      keyZ: preset.keyPosition[2],
      targetX: preset.keyTarget[0],
      targetY: preset.keyTarget[1],
      targetZ: preset.keyTarget[2],
      duration: 0.9,
      ease: "power2.inOut",
      overwrite: "auto",
      onUpdate: applyLightingTransitionValues,
      onComplete: applyLightingTransitionValues,
    });
  }
  applyLightingTransitionValues();
  introFillLight.target.updateMatrixWorld();
}

let cameraController: CameraController | null = null;
let loadedPortfolio: LoadedPortfolioScene | null = null;
let floatingObjects: FloatingObjectsController | null = null;
let nprManager: NPRManager | null = null;
let terminalController: TerminalController | null = null;
let depthOfField: DepthOfFieldController | null = null;
let portfolioUi: PortfolioUi | null = null;
depthOfField = new DepthOfFieldController(renderer, scene, camera, {
  enabled: false,
  aperture: 0.0025,
  maxBlur: 0.004,
});
depthOfField.setSize(window.innerWidth, window.innerHeight);
type ActiveNprModule = NPRSceneKey;
const nprControllers: Partial<Record<ActiveNprModule, NPRRootController>> = {};
let activeNprModule: ActiveNprModule = "projects";
let dofStateName: StateName = "personalIntro";
const dofTransition = {
  aperture: 0.0025,
  maxBlur: 0.004,
};
const initialScenePresets = loadScenePresets({
  personalIntro: personalIntroPreset,
  techStack: techStackPreset,
  projects: projectsPreset,
  creativity: creativityPreset,
  interests: interestsPreset,
});
const savedScenePresetFlags: Record<NPRSceneKey, boolean> = {
  personalIntro: hasSavedScenePreset("personalIntro"),
  techStack: hasSavedScenePreset("techStack"),
  projects: hasSavedScenePreset("projects"),
  creativity: hasSavedScenePreset("creativity"),
  interests: hasSavedScenePreset("interests"),
};
const savedLightingPresetFlags: Record<LightingPresetName, boolean> = {
  personalIntro: hasSavedLightingPreset("personalIntro"),
  techStack: hasSavedLightingPreset("techStack"),
  projects: hasSavedLightingPreset("projects"),
  creativity: hasSavedLightingPreset("creativity"),
  interests: hasSavedLightingPreset("interests"),
};
let contentPlaneDiagnostics: Record<string, unknown> = {};
let shadowsEnabled = true;
let contentPlanesHighlighted = false;
let fps = 0;
let fpsFrameCount = 0;
let fpsWindowStart = performance.now();
let lastRenderTime = performance.now();
const contentPlaneNames = CONTENT_PLANE_NAMES;
const highlightedMaterialState = new Map<THREE.Material, { color?: THREE.Color; emissive?: THREE.Color; emissiveIntensity?: number }>();
const projectScreenTextures: Record<"a" | "b", THREE.CanvasTexture> = {
  a: createProjectScreenTexture("PROJECT A", "#172128", "#67d5c5"),
  b: createProjectScreenTexture("PROJECT B", "#241b2f", "#e39c73"),
};
const portfolioProjectFallbackTextures = portfolioContent.projects.map((project, index) => createProjectScreenTexture(
  project.title,
  index === 0 ? "#172128" : index === 1 ? "#20223a" : "#2b211d",
  project.screenAccent,
));
const portfolioProjectTextures: Array<THREE.Texture | null> = portfolioContent.projects.map(() => null);
let activeProjectScreen: "a" | "b" = "a";
const creativityPreviewTextures = new Map<string, THREE.Texture>();
let creativityPreviewRequest = 0;

async function loadCreativityCoverTexture(url: string): Promise<THREE.CanvasTexture> {
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const element = new Image();
    element.decoding = "async";
    element.onload = () => resolve(element);
    element.onerror = () => reject(new Error(`Could not load creativity cover: ${url}`));
    element.src = url;
  });

  // Rasterize SVG covers once before uploading them to WebGL. This keeps the
  // interactive preview independent of browser-specific SVG texture support.
  const canvas = document.createElement("canvas");
  canvas.width = 1600;
  canvas.height = 1000;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not create creativity cover canvas.");
  context.fillStyle = "#080b10";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
  texture.needsUpdate = true;
  return texture;
}

function createProjectScreenTexture(label: string, background: string, accent: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 960;
  canvas.height = 540;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not create Projects screen canvas context.");
  context.fillStyle = background;
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = `${accent}55`;
  context.lineWidth = 2;
  for (let x = 0; x <= canvas.width; x += 80) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }
  for (let y = 0; y <= canvas.height; y += 60) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }
  context.fillStyle = accent;
  context.font = "600 54px ui-monospace, SFMono-Regular, Menlo, monospace";
  context.fillText(label, 58, 96);
  context.font = "28px ui-monospace, SFMono-Regular, Menlo, monospace";
  context.fillText("PORTFOLIO PROJECT SCREEN", 60, 146);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;
  texture.needsUpdate = true;
  return texture;
}

function applyProjectScreenTexture(key: "a" | "b"): void {
  if (!loadedPortfolio) return;
  const applied = setProjectsScreenTexture(loadedPortfolio.scene, projectScreenTextures[key]);
  if (!applied) {
    setStatus("Projects_Screen was not found in the loaded GLB.", "error");
    return;
  }
  activeProjectScreen = key;
  document.querySelectorAll<HTMLButtonElement>("[data-project-screen]").forEach((button) => {
    button.dataset.active = button.dataset.projectScreen === key ? "true" : "false";
  });
  setStatus(`Projects screen texture ${key.toUpperCase()} applied only to Projects_Screen`, "success");
}

function applyPortfolioProjectTexture(index: number): void {
  if (!loadedPortfolio) return;
  const project = portfolioContent.projects[index];
  const texture = portfolioProjectTextures[index] ?? portfolioProjectFallbackTextures[index];
  if (!project || !texture || !setProjectsScreenTexture(loadedPortfolio.scene, texture)) {
    setStatus("Projects_Screen was not found in the loaded GLB.", "error");
    return;
  }
  activeProjectScreen = index === 0 ? "a" : "b";
  document.querySelectorAll<HTMLButtonElement>("[data-project-screen]").forEach((button) => {
    button.dataset.active = button.dataset.projectScreen === activeProjectScreen ? "true" : "false";
  });
  setStatus(`Project screen synced: ${project.title}`, "success");
}

async function loadPortfolioProjectTextures(): Promise<void> {
  const loader = new THREE.TextureLoader();
  await Promise.all(portfolioContent.projects.map(async (project, index) => {
    try {
      const texture = await loader.loadAsync(project.screenImage);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.flipY = false;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
      portfolioProjectTextures[index] = texture;
      console.log(`[Projects Screen] loaded real cover for ${project.title}: ${project.screenImage}`);
    } catch (error) {
      console.warn(`[Projects Screen] could not load ${project.screenImage}; using generated fallback.`, error);
    }
  }));
}

async function loadPersonalIntroPhotoTexture(): Promise<void> {
  if (!loadedPortfolio) return;
  const loader = new THREE.TextureLoader();
  try {
    const texture = await loader.loadAsync("/content-media/pic01.png");
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    texture.needsUpdate = true;
    if (!setPersonalIntroPhotoTexture(loadedPortfolio.scene, texture)) {
      console.warn("[Personal Intro] PersonalIntro_Photo was not found in the loaded GLB.");
      return;
    }
    console.log("[Personal Intro] loaded pic01.png into PersonalIntro_Photo");
  } catch (error) {
    console.warn("[Personal Intro] could not load /content-media/pic01.png; keeping the existing photo material.", error);
  }
}

async function previewCreativityEntry(entrySlug: string): Promise<void> {
  const entry = portfolioContent.conceptLab.find((item) => item.slug === entrySlug);
  if (!entry || !loadedPortfolio) return;
  const requestId = ++creativityPreviewRequest;
  let texture = creativityPreviewTextures.get(entry.slug);
  if (!texture) {
    try {
      texture = await loadCreativityCoverTexture(entry.cover);
      creativityPreviewTextures.set(entry.slug, texture);
    } catch (error) {
      console.warn(`[Creativity] could not load ${entry.cover}`, error);
      return;
    }
  }
  if (requestId !== creativityPreviewRequest || !loadedPortfolio) return;
  if (setCreativityScreenTexture(loadedPortfolio.scene, texture)) {
    setStatus(`Creativity preview synced: ${entry.title}`, "success");
  }
}

function setDofFocusForState(stateName: StateName, immediate = false): void {
  if (!depthOfField || !loadedPortfolio) return;
  dofStateName = stateName;
  const preset = dofStatePresets[stateName];
  gsap.killTweensOf(dofTransition);
  if (immediate) {
    dofTransition.aperture = preset.aperture;
    dofTransition.maxBlur = preset.maxBlur;
    depthOfField.setAperture(dofTransition.aperture);
    depthOfField.setMaxBlur(dofTransition.maxBlur);
  } else {
    const current = depthOfField.getParameters();
    dofTransition.aperture = current.aperture;
    dofTransition.maxBlur = current.maxBlur;
    gsap.to(dofTransition, {
      aperture: preset.aperture,
      maxBlur: preset.maxBlur,
      duration: 0.9,
      ease: "power2.inOut",
      overwrite: "auto",
      onUpdate: () => {
        depthOfField?.setAperture(dofTransition.aperture);
        depthOfField?.setMaxBlur(dofTransition.maxBlur);
      },
    });
  }

  const focusNames: Record<StateName, string[]> = {
    personalIntro: ["Photo_Frame", "PersonalIntro_Photo"],
    techStack: ["Terminal_Panel_A", "Terminal_Panel_B", "Terminal_Panel_C"],
    projects: ["Projects_Screen", "Workstation_Desk"],
    creativityBase: ["Creativity_Screen", "Workstation_Monitor"],
    creativityCloseup: ["Creativity_Screen", "Workstation_Monitor"],
    moreInterests: ["ROOT_MoreInterests"],
  };
  const fallbackNames: Record<StateName, string> = {
    personalIntro: "ROOT_PersonalIntro",
    techStack: "ROOT_TechStack",
    projects: "ROOT_Projects",
    creativityBase: "ROOT_Creativity",
    creativityCloseup: "ROOT_Creativity",
    moreInterests: "ROOT_MoreInterests",
  };
  const primaryObjects = focusNames[stateName]
    .map((name) => loadedPortfolio!.scene.getObjectByName(name))
    .filter((object): object is THREE.Object3D => Boolean(object));
  const objects = primaryObjects.length === 0
    ? [loadedPortfolio.scene.getObjectByName(fallbackNames[stateName])].filter((object): object is THREE.Object3D => Boolean(object))
    : stateName === "techStack" ? primaryObjects : [primaryObjects[0]];
  if (objects.length === 0) {
    depthOfField.setFocusObject(null, "None", immediate);
  } else if (objects.length === 1) {
    depthOfField.setFocusObject(objects[0], objects[0].name || getNprModuleLabel(getNprModuleForState(stateName)), immediate);
  } else {
    const bounds = new THREE.Box3();
    objects.forEach((object) => bounds.expandByObject(object));
    depthOfField.setFocusPoint(
      bounds.getCenter(new THREE.Vector3()),
      getNprModuleLabel(getNprModuleForState(stateName)),
      immediate,
    );
  }
  updateDepthOfFieldControls();
}

function updateDepthOfFieldControls(): void {
  if (!depthOfField) return;
  const toggle = document.querySelector<HTMLButtonElement>('[data-dof-action="toggle"]');
  if (toggle) toggle.textContent = `Depth of Field: ${depthOfField.isEnabled() ? "On" : "Off"}`;
  const parameters = depthOfField.getParameters();
  const apertureInput = document.querySelector<HTMLInputElement>('[data-dof-param="aperture"]');
  const blurInput = document.querySelector<HTMLInputElement>('[data-dof-param="maxBlur"]');
  if (apertureInput) apertureInput.value = String(parameters.aperture);
  if (blurInput) blurInput.value = String(parameters.maxBlur);
  const apertureOutput = document.querySelector<HTMLOutputElement>('[data-dof-value="aperture"]');
  const blurOutput = document.querySelector<HTMLOutputElement>('[data-dof-value="maxBlur"]');
  if (apertureOutput) apertureOutput.value = parameters.aperture.toFixed(4);
  if (blurOutput) blurOutput.value = parameters.maxBlur.toFixed(3);
  const focusOutput = document.querySelector<HTMLOutputElement>('[data-dof-value="focusDistance"]');
  if (focusOutput) focusOutput.value = `${parameters.focusDistance.toFixed(2)}u`;
  const targetOutput = document.querySelector<HTMLOutputElement>('[data-dof-value="focusTarget"]');
  if (targetOutput) targetOutput.value = parameters.targetLabel;
}

function isNprModule(value: string | undefined): value is ActiveNprModule {
  return value === "personalIntro"
    || value === "techStack"
    || value === "projects"
    || value === "creativity"
    || value === "interests";
}

function getNprController(module: ActiveNprModule = activeNprModule): NPRRootController | null {
  return nprControllers[module] ?? null;
}

function getNprModuleLabel(module: ActiveNprModule): string {
  const labels: Record<ActiveNprModule, string> = {
    personalIntro: "Personal Intro",
    techStack: "Tech Stack",
    projects: "Projects",
    creativity: "Creativity",
    interests: "More Interests",
  };
  return labels[module];
}

function getNprModuleForState(stateName: StateName): ActiveNprModule {
  if (stateName === "moreInterests") return "interests";
  if (stateName === "creativityBase" || stateName === "creativityCloseup") return "creativity";
  return stateName;
}

function syncActiveNprModule(stateName: StateName): void {
  activeNprModule = getNprModuleForState(stateName);
  updateNprControls();
}

function getSceneKey(module: ActiveNprModule): NPRSceneKey {
  return module;
}

function updateNprControls(): void {
  const activeController = getNprController();
  if (!activeController) return;
  const config = activeController.getConfig();
  const toggleButton = document.querySelector<HTMLButtonElement>('[data-npr-action="toggle"]');
  const outlineButton = document.querySelector<HTMLButtonElement>('[data-npr-action="outline"]');
  const hatchButton = document.querySelector<HTMLButtonElement>('[data-npr-action="hatching"]');
  const paperButton = document.querySelector<HTMLButtonElement>('[data-npr-action="paper"]');
  if (toggleButton) toggleButton.textContent = `${getNprModuleLabel(activeNprModule)} NPR: ${activeController.isEnabled() ? "On" : "Off"}`;
  if (outlineButton) outlineButton.textContent = `Outline: ${config.outlineEnabled ? "On" : "Off"}`;
  if (hatchButton) hatchButton.textContent = `Hatching: ${config.hatchingEnabled ? "On" : "Off"}`;
  if (paperButton) paperButton.textContent = `Paper Noise: ${config.paperNoiseEnabled ? "On" : "Off"}`;

  document.querySelectorAll<HTMLButtonElement>('[data-npr-action="toggle-module"]').forEach((button) => {
    const module = button.dataset.nprTarget;
    if (!isNprModule(module)) return;
    const controller = getNprController(module);
    button.textContent = `${getNprModuleLabel(module)} NPR: ${controller?.isEnabled() ? "On" : "Off"}`;
  });

  document.querySelectorAll<HTMLButtonElement>("[data-npr-module]").forEach((button) => {
    button.dataset.active = button.dataset.nprModule === activeNprModule ? "true" : "false";
    const module = button.dataset.nprModule as ActiveNprModule;
    button.dataset.saved = savedScenePresetFlags[module] ? "true" : "false";
  });
  if (nprPresetStateElement) {
    const nprState = savedScenePresetFlags[activeNprModule] ? "saved" : "built-in";
    const lightingState = savedLightingPresetFlags[activeNprModule] ? "saved" : "baseline";
    nprPresetStateElement.textContent = `${getNprModuleLabel(activeNprModule)} · NPR ${nprState} · Lighting ${lightingState}`;
  }
  document.querySelectorAll<HTMLInputElement>("[data-npr-param]").forEach((input) => {
    const parameter = input.dataset.nprParam as keyof NPRConfig;
    const value = config[parameter];
    if (typeof value !== "number") return;
    input.value = String(value);
    const output = document.querySelector<HTMLOutputElement>(`[data-npr-value="${parameter}"]`);
    if (output) output.value = parameter === "hatchAngle" ? `${value.toFixed(0)}°` : value.toFixed(2);
  });
}

function applyWarmGroundMaterial(root: THREE.Object3D): void {
  const ground = root.getObjectByName("Portfolio_Ground_Plane");
  if (!ground || !(ground as THREE.Mesh).isMesh) return;
  forEachMaterial(ground as THREE.Mesh, (material) => {
    const withColor = material as THREE.MeshStandardMaterial;
    if ("color" in withColor) withColor.color.set("#e8e9e6");
    if ("roughness" in withColor) withColor.roughness = 0.92;
    material.needsUpdate = true;
  });
}

function captureProjectsPreview(): void {
  nprManager?.update();
  if (depthOfField) depthOfField.render();
  else renderer.render(scene, camera);
  renderer.domElement.toBlob((blob) => {
    if (!blob) {
      setStatus("Could not capture the Projects NPR preview.", "error");
      return;
    }
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "npr_projects_final.png";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Current WebGL canvas downloaded as npr_projects_final.png", "success");
  }, "image/png");
}

function captureDofReference(): void {
  if (!depthOfField) return;
  depthOfField.render(1 / 60);
  const snapshot = cameraController?.getDebugSnapshot();
  const state = snapshot?.detailState === "closeup"
    ? "creativity_closeup"
    : snapshot?.currentMainState ?? dofStateName;
  const suffix = depthOfField.isEnabled() ? "on" : "off";
  const filename = `dof_${state}_${suffix}.png`;
  renderer.domElement.toBlob((blob) => {
    if (!blob) {
      setStatus(`Could not capture ${filename}`, "error");
      return;
    }
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus(`DOF reference downloaded as ${filename}`, "success");
  }, "image/png");
}

function saveActiveNprPreset(): void {
  const controller = getNprController();
  if (!controller) return;
  const sceneKey = getSceneKey(activeNprModule);
  saveScenePreset(sceneKey, controller.getConfig());
  saveLightingPreset(sceneKey, initialLightingPresets[sceneKey]);
  savedScenePresetFlags[sceneKey] = true;
  savedLightingPresetFlags[sceneKey] = true;
  updateNprControls();
  setStatus(`${getNprModuleLabel(activeNprModule)} parameters saved locally`, "success");
}

function loadActiveNprPreset(): void {
  const controller = getNprController();
  if (!controller) return;
  const sceneKey = getSceneKey(activeNprModule);
  const saved = getSavedScenePreset(sceneKey);
  const savedLighting = getSavedLightingPreset(sceneKey);
  if (saved) {
    controller.loadConfig(saved);
    savedScenePresetFlags[sceneKey] = true;
  } else {
    controller.resetPreset();
    savedScenePresetFlags[sceneKey] = false;
  }
  if (savedLighting) {
    const lighting = initialLightingPresets[sceneKey];
    if (typeof savedLighting.keyIntensity === "number") lighting.keyIntensity = savedLighting.keyIntensity;
    if (typeof savedLighting.shadowIntensity === "number") lighting.shadowIntensity = savedLighting.shadowIntensity;
    if (typeof savedLighting.fillIntensity === "number") lighting.fillIntensity = savedLighting.fillIntensity;
    if (typeof savedLighting.ambientIntensity === "number") lighting.ambientIntensity = savedLighting.ambientIntensity;
    if (typeof savedLighting.hemisphereIntensity === "number") lighting.hemisphereIntensity = savedLighting.hemisphereIntensity;
    if (Array.isArray(savedLighting.keyPosition) && savedLighting.keyPosition.length === 3) {
      lighting.keyPosition = [...savedLighting.keyPosition] as [number, number, number];
    }
    if (Array.isArray(savedLighting.keyTarget) && savedLighting.keyTarget.length === 3) {
      lighting.keyTarget = [...savedLighting.keyTarget] as [number, number, number];
    }
    savedLightingPresetFlags[sceneKey] = true;
  } else {
    savedLightingPresetFlags[sceneKey] = false;
  }
  const currentState = cameraController?.getDebugSnapshot();
  if (currentState) {
    const currentStateName: StateName = currentState.detailState === "closeup"
      ? "creativityCloseup"
      : currentState.currentMainState;
    if (getNprModuleForState(currentStateName) === sceneKey) setLightingForState(currentStateName);
  }
  setStatus(
    saved || savedLighting
      ? `${getNprModuleLabel(activeNprModule)} saved NPR and lighting parameters loaded`
      : `${getNprModuleLabel(activeNprModule)} has no saved preset; built-in values restored`,
    "success",
  );
  updateNprControls();
}

function exportActiveNprPreset(): void {
  const controller = getNprController();
  if (!controller) return;
  exportScenePreset(getSceneKey(activeNprModule), controller.getConfig());
  setStatus(`${getNprModuleLabel(activeNprModule)} preset exported as JSON`, "success");
}

function setStatus(message: string, tone: "normal" | "success" | "error" = "normal"): void {
  statusElement!.textContent = message;
  statusElement!.dataset.tone = tone;
  if (uiStatusElement) {
    if (tone === "error") uiStatusElement.textContent = "SCENE ATTENTION";
    else if (message.startsWith("Navigating")) uiStatusElement.textContent = "CAMERA MOVING";
    else if (message.includes("Project screen")) uiStatusElement.textContent = "SCREEN SYNCED";
    else if (message.includes("CloseUp")) uiStatusElement.textContent = "CLOSEUP READY";
    else uiStatusElement.textContent = "SCENE READY";
  }
}

function setLoadBadge(label: string, tone: "pending" | "success" | "error"): void {
  loadBadge!.textContent = label;
  loadBadge!.className = `badge ${tone}`;
  const sceneStatus = document.querySelector<HTMLElement>("#scene-status");
  if (sceneStatus) {
    sceneStatus.textContent = tone === "success" ? "SCENE / READY" : `SCENE / ${label.toUpperCase()}`;
    sceneStatus.dataset.tone = tone;
  }
}

function formatVector(value: THREE.Vector3 | THREE.Euler): string {
  return [value.x, value.y, value.z].map((number) => number.toFixed(3)).join(" / ");
}

function materialSideName(side: THREE.Side): string {
  if (side === THREE.FrontSide) return "FrontSide";
  if (side === THREE.BackSide) return "BackSide";
  return "DoubleSide";
}

function forEachMaterial(object: THREE.Mesh, callback: (material: THREE.Material) => void): void {
  const materials = Array.isArray(object.material) ? object.material : [object.material];
  materials.forEach(callback);
}

function getBoxGap(a: THREE.Box3, b: THREE.Box3): number {
  const dx = Math.max(a.min.x - b.max.x, b.min.x - a.max.x, 0);
  const dy = Math.max(a.min.y - b.max.y, b.min.y - a.max.y, 0);
  const dz = Math.max(a.min.z - b.max.z, b.min.z - a.max.z, 0);
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function collectContentPlaneDiagnostics(root: THREE.Object3D): Record<string, unknown> {
  root.updateMatrixWorld(true);
  const meshes: THREE.Mesh[] = [];
  root.traverse((object) => {
    if ((object as THREE.Mesh).isMesh) meshes.push(object as THREE.Mesh);
  });

  const diagnostics: Record<string, unknown> = {};
  for (const name of contentPlaneNames) {
    const object = root.getObjectByName(name);
    if (!object || !(object as THREE.Mesh).isMesh) {
      diagnostics[name] = { found: false };
      continue;
    }
    const mesh = object as THREE.Mesh;
    const geometry = mesh.geometry;
    const planeBox = new THREE.Box3().setFromObject(mesh);
    const nearbySurfaces = meshes
      .filter((candidate) => candidate !== mesh && !contentPlaneNames.has(candidate.name))
      .map((candidate) => ({
        name: candidate.name || candidate.type,
        gap: getBoxGap(planeBox, new THREE.Box3().setFromObject(candidate)),
      }))
      .sort((a, b) => a.gap - b.gap)
      .slice(0, 4)
      .map((candidate) => ({ name: candidate.name, gap: Number(candidate.gap.toFixed(6)) }));
    const materials: unknown[] = [];
    forEachMaterial(mesh, (material) => {
      materials.push({
        type: material.type,
        side: materialSideName(material.side),
        transparent: material.transparent,
        opacity: material.opacity,
        depthWrite: material.depthWrite,
        depthTest: material.depthTest,
        polygonOffset: material.polygonOffset,
        polygonOffsetFactor: material.polygonOffsetFactor,
        polygonOffsetUnits: material.polygonOffsetUnits,
      });
    });
    diagnostics[name] = {
      found: true,
      objectType: mesh.type,
      geometryType: geometry.type,
      vertexCount: geometry.attributes.position?.count ?? 0,
      position: mesh.position.toArray().map((value) => Number(value.toFixed(6))),
      worldPosition: mesh.getWorldPosition(new THREE.Vector3()).toArray().map((value) => Number(value.toFixed(6))),
      rotation: [mesh.rotation.x, mesh.rotation.y, mesh.rotation.z].map((value) => Number(value.toFixed(6))),
      scale: mesh.scale.toArray().map((value) => Number(value.toFixed(6))),
      renderOrder: mesh.renderOrder,
      worldBoundsSize: planeBox.getSize(new THREE.Vector3()).toArray().map((value) => Number(value.toFixed(6))),
      materials,
      nearbySurfaces,
      possibleZFight: nearbySurfaces.some((surface) => surface.gap <= 0.002),
      userData: mesh.userData,
    };
  }
  return diagnostics;
}

function applyContentPlaneSettings(root: THREE.Object3D): void {
  root.traverse((object) => {
    if (!(object as THREE.Mesh).isMesh || !contentPlaneNames.has(object.name)) return;
    const mesh = object as THREE.Mesh;
    mesh.userData.isContentPlane = true;
    mesh.userData.contentPlaneRole = object.name;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    forEachMaterial(mesh, (material) => {
      material.side = THREE.FrontSide;
      material.depthTest = true;
      material.depthWrite = true;
      material.polygonOffset = true;
      material.polygonOffsetFactor = -1;
      material.polygonOffsetUnits = -1;
      material.needsUpdate = true;
    });
  });
}

function applyShadowFlags(root: THREE.Object3D): void {
  root.traverse((object) => {
    if (!(object as THREE.Mesh).isMesh) return;
    const mesh = object as THREE.Mesh;
    const isGround = mesh.name === "Portfolio_Ground_Plane";
    const isContentPlane = contentPlaneNames.has(mesh.name);
    mesh.castShadow = !isGround && !isContentPlane;
    mesh.receiveShadow = !isContentPlane;
  });
}

function setContentPlaneHighlights(enabled: boolean): void {
  if (!loadedPortfolio) return;
  if (!enabled) {
    highlightedMaterialState.forEach((saved, material) => {
      const standardMaterial = material as THREE.MeshStandardMaterial;
      if (saved.color && "color" in standardMaterial) standardMaterial.color.copy(saved.color);
      if (saved.emissive && "emissive" in standardMaterial) standardMaterial.emissive.copy(saved.emissive);
      if (saved.emissiveIntensity !== undefined && "emissiveIntensity" in standardMaterial) {
        standardMaterial.emissiveIntensity = saved.emissiveIntensity;
      }
      material.needsUpdate = true;
    });
    highlightedMaterialState.clear();
  } else {
    loadedPortfolio.scene.traverse((object) => {
      if (!(object as THREE.Mesh).isMesh || !contentPlaneNames.has(object.name)) return;
      forEachMaterial(object as THREE.Mesh, (material) => {
        const standardMaterial = material as THREE.MeshStandardMaterial;
        if (!("color" in standardMaterial)) return;
        highlightedMaterialState.set(material, {
          color: standardMaterial.color.clone(),
          emissive: "emissive" in standardMaterial ? standardMaterial.emissive.clone() : undefined,
          emissiveIntensity: "emissiveIntensity" in standardMaterial ? standardMaterial.emissiveIntensity : undefined,
        });
        standardMaterial.color.set(0xff6a3d);
        if ("emissive" in standardMaterial) standardMaterial.emissive.set(0x4c1808);
        if ("emissiveIntensity" in standardMaterial) standardMaterial.emissiveIntensity = 0.7;
        material.needsUpdate = true;
      });
    });
  }
  contentPlanesHighlighted = enabled;
}

function adjustPersonalIntroState(state: CameraState): CameraState {
  if (!state.target) return { ...state };
  // Aim at the authored photo plane center rather than the broader intro
  // target. Values stay in the source Blender basis because the camera
  // controller applies the Blender -> Three conversion afterwards.
  const photoTarget = {
    x: -2.011593,
    y: -3.647516,
    z: 0.978914,
  };
  // Move closer while bringing the camera nearer to the photo's eye level.
  const approachFactor = 0.62;
  const verticalApproachFactor = 0.8;
  return {
    ...state,
    target: photoTarget,
    position: {
      x: state.position.x + (photoTarget.x - state.position.x) * approachFactor,
      y: state.position.y + (photoTarget.y - state.position.y) * approachFactor,
      z: state.position.z + (photoTarget.z - state.position.z) * verticalApproachFactor,
    },
  };
}

function prepareCameraData(statesFile: CameraStatesFile, transitionsFile: CameraTransitionsFile): {
  statesFile: CameraStatesFile;
  transitionsFile: CameraTransitionsFile;
} {
  const adjustedPersonalIntro = adjustPersonalIntroState(statesFile.states.personalIntro);
  const adjustedTransitions = transitionsFile.transitions.map((transition) => {
    if (transition.name !== "PersonalIntro_to_TechStack" || transition.keyframes.length === 0) return transition;
    return {
      ...transition,
      keyframes: [adjustedPersonalIntro, ...transition.keyframes.slice(1)],
    };
  });
  console.log("[Camera] personalIntro code-level approach", JSON.stringify({
    approachFactor: 0.62,
    verticalApproachFactor: 0.8,
    targetChanged: true,
    target: adjustedPersonalIntro.target,
    originalPosition: statesFile.states.personalIntro.position,
    adjustedPosition: adjustedPersonalIntro.position,
    transitionUpdated: adjustedTransitions.some((transition) => transition.name === "PersonalIntro_to_TechStack" && transition.keyframes[0].position.x !== statesFile.states.personalIntro.position.x),
  }));
  return {
    statesFile: { ...statesFile, states: { ...statesFile.states, personalIntro: adjustedPersonalIntro } },
    transitionsFile: { ...transitionsFile, transitions: adjustedTransitions },
  };
}

function updateDebugPanel(): void {
  if (!cameraController || !loadedPortfolio) return;
  const snapshot = cameraController.getDebugSnapshot();
  currentStateElement!.textContent = snapshot.currentMainState;
  detailStateElement!.textContent = snapshot.detailState + (snapshot.isTransitioning ? " · transitioning" : "");
  loadedRootsElement!.textContent = `${EXPECTED_ROOTS.length - loadedPortfolio.structure.missingRoots.length} / ${EXPECTED_ROOTS.length}`;
  cameraPositionElement!.textContent = formatVector(snapshot.position);
  cameraRotationElement!.textContent = formatVector(snapshot.rotation);
  cameraFovElement!.textContent = `${snapshot.fov.toFixed(3)}°`;
  if (nprMeshCountElement) nprMeshCountElement.textContent = String(nprManager?.getManagedMeshCount() ?? 0);
  if (nprPassCountElement) nprPassCountElement.textContent = String(nprManager?.getPassCount() ?? 0);
  if (drawCallsElement) drawCallsElement.textContent = String(renderer.info.render.calls);
  if (triangleCountElement) triangleCountElement.textContent = String(renderer.info.render.triangles);
  if (fpsElement) fpsElement.textContent = fps.toFixed(0);
  updateTerminalDebugPanel();
  portfolioUi?.sync({
    mainState: snapshot.currentMainState,
    detailState: snapshot.detailState,
    isTransitioning: snapshot.isTransitioning,
  });
}

function updateTerminalDebugPanel(): void {
  if (!terminalController) return;
  const state = terminalController.getState();
  const metrics = terminalController.getMetrics();
  if (terminalStateElement) {
    terminalStateElement.textContent = state.active
      ? state.isTyping ? "active / typing" : state.isLive ? "active / live" : "active / idle"
      : state.hasEnteredTech ? "paused / preserved" : "idle / waiting";
  }
  if (terminalUpdatesElement) terminalUpdatesElement.textContent = String(metrics.redrawCount);
  if (terminalUploadsElement) terminalUploadsElement.textContent = String(metrics.textureUploadCount);
  metrics.panels.forEach((panel, index) => {
    const element = terminalPanelMetricElements[index];
    if (!element) return;
    element.textContent = `E ${panel.metrics.eventsGenerated} · R ${panel.metrics.redrawCount} · U ${panel.metrics.textureUploadCount}`;
  });
}

function syncTerminalForState(stateName: StateName): void {
  if (!terminalController) return;
  if (stateName === "techStack") terminalController.activate();
  else terminalController.deactivate();
  updateTerminalDebugPanel();
}

function setInstantState(stateName: StateName): void {
  cameraController?.setCameraStateInstant(stateName);
  syncActiveNprModule(stateName);
  setLightingForState(stateName, true);
  setDofFocusForState(stateName, true);
  syncTerminalForState(stateName);
  updateDebugPanel();
  setStatus(`Instant state applied: ${stateName}`, "success");
}

async function navigateTo(stateName: MainState): Promise<boolean> {
  if (!cameraController) return false;
  // Start visual-state interpolation with the camera movement so lighting and
  // focus do not snap at the beginning or end of a module transition.
  syncActiveNprModule(stateName);
  setLightingForState(stateName);
  setDofFocusForState(stateName);
  syncTerminalForState(stateName);
  setStatus(`Navigating to ${stateName}…`);
  const success = await cameraController.navigateTo(stateName);
  if (!success) {
    const currentState = cameraController.getDebugSnapshot().currentMainState;
    syncActiveNprModule(currentState);
    setLightingForState(currentState);
    setDofFocusForState(currentState);
    syncTerminalForState(currentState);
  }
  setDofFocusForState(stateName);
  updateDebugPanel();
  setStatus(`Navigation complete: ${stateName}`, "success");
  return success;
}

async function enterCreativityCloseup(entrySlug?: string): Promise<boolean> {
  if (!cameraController) return false;
  const entry = entrySlug ? portfolioContent.conceptLab.find((item) => item.slug === entrySlug) : undefined;
  syncActiveNprModule("creativityCloseup");
  setDofFocusForState("creativityCloseup");
  setStatus(entry ? `Entering Creativity CloseUp · ${entry.title}…` : "Entering Creativity CloseUp…");
  const success = await cameraController.enterCreativityCloseup();
  updateDebugPanel();
  setStatus(success ? "Creativity CloseUp entered" : "Enter blocked: select Creativity Base first", success ? "success" : "error");
  return success;
}

async function exitCreativityCloseup(): Promise<boolean> {
  if (!cameraController) return false;
  syncActiveNprModule("creativityBase");
  setDofFocusForState("creativityBase");
  setStatus("Returning to Creativity Base…");
  const success = await cameraController.exitCreativityCloseup();
  updateDebugPanel();
  setStatus(success ? "Creativity CloseUp exited" : "Exit unavailable", success ? "success" : "error");
  return success;
}

function bindControls(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-instant-state]").forEach((button) => {
    button.addEventListener("click", () => setInstantState(button.dataset.instantState as StateName));
  });

  document.querySelectorAll<HTMLButtonElement>("[data-nav-state]").forEach((button) => {
    button.addEventListener("click", () => void navigateTo(button.dataset.navState as MainState));
  });

  document.addEventListener("visibilitychange", () => {
    if (!terminalController) return;
    if (document.hidden) {
      terminalController.pauseForVisibility();
    } else if (cameraController?.getDebugSnapshot().currentMainState === "techStack") {
      terminalController.resumeFromVisibility();
    }
    updateTerminalDebugPanel();
  });

  document.querySelector<HTMLButtonElement>('[data-terminal-action="replay"]')?.addEventListener("click", () => {
    terminalController?.replay();
    updateTerminalDebugPanel();
    setStatus("Terminal typing replayed", "success");
  });
  document.querySelector<HTMLButtonElement>('[data-terminal-action="pause"]')?.addEventListener("click", () => {
    terminalController?.pause();
    updateTerminalDebugPanel();
    setStatus("Terminal typing paused", "success");
  });
  document.querySelector<HTMLButtonElement>('[data-terminal-action="complete"]')?.addEventListener("click", () => {
    terminalController?.completeInstantly();
    updateTerminalDebugPanel();
    setStatus("Terminal live mode completed current events", "success");
  });
  document.querySelector<HTMLButtonElement>('[data-terminal-action="live-on"]')?.addEventListener("click", () => {
    terminalController?.setLiveEnabled(true);
    updateTerminalDebugPanel();
    setStatus("Terminal live mode enabled", "success");
  });
  document.querySelector<HTMLButtonElement>('[data-terminal-action="live-off"]')?.addEventListener("click", () => {
    terminalController?.setLiveEnabled(false);
    updateTerminalDebugPanel();
    setStatus("Terminal live mode paused", "success");
  });
  document.querySelector<HTMLButtonElement>('[data-terminal-action="resume"]')?.addEventListener("click", () => {
    terminalController?.resume();
    updateTerminalDebugPanel();
    setStatus("Terminal live mode resumed", "success");
  });
  ["a", "b", "c"].forEach((panel, index) => {
    document.querySelector<HTMLButtonElement>(`[data-terminal-action="generate-${panel}"]`)?.addEventListener("click", () => {
      terminalController?.generateEvent(index);
      updateTerminalDebugPanel();
      setStatus(`Terminal ${panel.toUpperCase()} event generated`, "success");
    });
  });
  document.querySelector<HTMLButtonElement>('[data-terminal-action="clear-history"]')?.addEventListener("click", () => {
    terminalController?.clearHistory();
    updateTerminalDebugPanel();
    setStatus("Terminal history cleared", "success");
  });

  document.querySelector<HTMLButtonElement>('[data-detail-action="enter"]')?.addEventListener("click", async () => {
    await enterCreativityCloseup();
  });

  document.querySelector<HTMLButtonElement>('[data-detail-action="exit"]')?.addEventListener("click", async () => {
    await exitCreativityCloseup();
  });

  document.querySelectorAll<HTMLButtonElement>("[data-npr-module]").forEach((button) => {
    button.addEventListener("click", () => {
      const module = button.dataset.nprModule;
      if (!isNprModule(module)) return;
      activeNprModule = module;
      updateNprControls();
      setStatus(`NPR module selected: ${getNprModuleLabel(activeNprModule)}`, "success");
    });
  });

  document.querySelector<HTMLButtonElement>('[data-npr-action="toggle"]')?.addEventListener("click", () => {
    const controller = getNprController();
    if (!controller) return;
    controller.setEnabled(!controller.isEnabled());
    updateNprControls();
    setStatus(`${getNprModuleLabel(activeNprModule)} NPR ${controller.isEnabled() ? "enabled" : "disabled"}`, "success");
  });

  document.querySelectorAll<HTMLButtonElement>('[data-npr-action="toggle-module"]').forEach((button) => {
    button.addEventListener("click", () => {
      const module = button.dataset.nprTarget;
      if (!isNprModule(module)) return;
      const controller = getNprController(module);
      if (!controller) return;
      controller.setEnabled(!controller.isEnabled());
      updateNprControls();
      setStatus(`${getNprModuleLabel(module)} NPR ${controller.isEnabled() ? "enabled" : "disabled"}`, "success");
    });
  });

  document.querySelector<HTMLButtonElement>('[data-npr-action="outline"]')?.addEventListener("click", () => {
    const controller = getNprController();
    if (!controller) return;
    const enabled = !controller.getConfig().outlineEnabled;
    controller.setFeature("outlineEnabled", enabled);
    updateNprControls();
    setStatus(`${getNprModuleLabel(activeNprModule)} outline ${enabled ? "enabled" : "disabled"}`, "success");
  });

  document.querySelector<HTMLButtonElement>('[data-npr-action="hatching"]')?.addEventListener("click", () => {
    const controller = getNprController();
    if (!controller) return;
    const enabled = !controller.getConfig().hatchingEnabled;
    controller.setFeature("hatchingEnabled", enabled);
    updateNprControls();
    setStatus(`${getNprModuleLabel(activeNprModule)} hatching ${enabled ? "enabled" : "disabled"}`, "success");
  });

  document.querySelector<HTMLButtonElement>('[data-npr-action="paper"]')?.addEventListener("click", () => {
    const controller = getNprController();
    if (!controller) return;
    const enabled = !controller.getConfig().paperNoiseEnabled;
    controller.setFeature("paperNoiseEnabled", enabled);
    updateNprControls();
    setStatus(`${getNprModuleLabel(activeNprModule)} paper noise ${enabled ? "enabled" : "disabled"}`, "success");
  });

  document.querySelector<HTMLButtonElement>('[data-npr-action="reset"]')?.addEventListener("click", () => {
    const controller = getNprController();
    if (!controller) return;
    controller.resetPreset();
    updateNprControls();
    setStatus(`${getNprModuleLabel(activeNprModule)} preset reset`, "success");
  });

  document.querySelector<HTMLButtonElement>('[data-npr-action="save"]')?.addEventListener("click", saveActiveNprPreset);
  document.querySelector<HTMLButtonElement>('[data-npr-action="load"]')?.addEventListener("click", loadActiveNprPreset);
  document.querySelector<HTMLButtonElement>('[data-npr-action="export"]')?.addEventListener("click", exportActiveNprPreset);

  document.querySelector<HTMLButtonElement>('[data-npr-action="copy"]')?.addEventListener("click", () => {
    const controller = getNprController();
    if (!controller) return;
    console.log(`[NPR] ${activeNprModule} preset copy`, JSON.stringify(controller.getConfig(), null, 2));
    setStatus(`${getNprModuleLabel(activeNprModule)} preset printed to Console`, "success");
  });

  document.querySelector<HTMLButtonElement>('[data-npr-action="capture"]')?.addEventListener("click", captureProjectsPreview);

  document.querySelectorAll<HTMLInputElement>("[data-npr-param]").forEach((input) => {
    input.addEventListener("input", () => {
      const controller = getNprController();
      if (!controller) return;
      const parameter = input.dataset.nprParam as keyof NPRConfig;
      controller.setParameter(parameter, Number(input.value));
      updateNprControls();
    });
  });

  document.querySelector<HTMLButtonElement>('[data-dof-action="toggle"]')?.addEventListener("click", () => {
    if (!depthOfField) return;
    depthOfField.setEnabled(!depthOfField.isEnabled());
    updateDepthOfFieldControls();
    setStatus(`Depth of field ${depthOfField.isEnabled() ? "enabled" : "disabled"}`, "success");
  });

  document.querySelectorAll<HTMLInputElement>("[data-dof-param]").forEach((input) => {
    input.addEventListener("input", () => {
      if (!depthOfField) return;
      const parameter = input.dataset.dofParam;
      if (parameter === "aperture") {
        depthOfField.setAperture(Number(input.value));
        dofStatePresets[dofStateName].aperture = Number(input.value);
      }
      if (parameter === "maxBlur") {
        depthOfField.setMaxBlur(Number(input.value));
        dofStatePresets[dofStateName].maxBlur = Number(input.value);
      }
      updateDepthOfFieldControls();
    });
  });

  document.querySelector<HTMLButtonElement>('[data-dof-action="focus-current"]')?.addEventListener("click", () => {
    const snapshot = cameraController?.getDebugSnapshot();
    const currentState: StateName | undefined = snapshot
      ? snapshot.detailState === "closeup" ? "creativityCloseup" : snapshot.currentMainState
      : undefined;
    if (!currentState) return;
    setDofFocusForState(currentState, true);
    setStatus(`Depth of field focused on ${getNprModuleLabel(getNprModuleForState(currentState))}`, "success");
  });

  document.querySelector<HTMLButtonElement>('[data-dof-action="capture"]')?.addEventListener("click", captureDofReference);

  document.querySelector<HTMLButtonElement>('[data-debug-action="shadows"]')?.addEventListener("click", () => {
    shadowsEnabled = !shadowsEnabled;
    renderer.shadowMap.enabled = shadowsEnabled;
    keyLight.castShadow = shadowsEnabled;
    const button = document.querySelector<HTMLButtonElement>('[data-debug-action="shadows"]');
    if (button) button.textContent = `Shadows: ${shadowsEnabled ? "On" : "Off"}`;
    setStatus(`Real-time shadows ${shadowsEnabled ? "enabled" : "disabled"}`, "success");
  });

  document.querySelector<HTMLButtonElement>('[data-debug-action="plane-info"]')?.addEventListener("click", () => {
    if (!planeDebugElement) return;
    planeDebugElement.hidden = !planeDebugElement.hidden;
    planeDebugElement.textContent = JSON.stringify(contentPlaneDiagnostics, null, 2);
    setStatus(planeDebugElement.hidden ? "Plane diagnostics hidden" : "Plane diagnostics shown; full data is also in Console", "success");
  });

  document.querySelector<HTMLButtonElement>('[data-debug-action="highlight-planes"]')?.addEventListener("click", () => {
    setContentPlaneHighlights(!contentPlanesHighlighted);
    const button = document.querySelector<HTMLButtonElement>('[data-debug-action="highlight-planes"]');
    if (button) button.textContent = `Highlight Planes: ${contentPlanesHighlighted ? "On" : "Off"}`;
    setStatus(`Content plane highlight ${contentPlanesHighlighted ? "enabled" : "disabled"}`, "success");
  });

  document.querySelectorAll<HTMLButtonElement>("[data-project-screen]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.projectScreen;
      if (key === "a" || key === "b") applyProjectScreenTexture(key);
    });
  });
}

async function loadJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json() as Promise<T>;
}

async function bootstrap(): Promise<void> {
  try {
    setStatus("Loading GLB and camera data…");
    const [statesFile, transitionsFile, rulesFile] = await Promise.all([
      loadJson<CameraStatesFile>("/data/camera_states.json"),
      loadJson<CameraTransitionsFile>("/data/camera_transitions.json"),
      loadJson<CameraNavigationRulesFile>("/data/camera_navigation_rules.json"),
    ]);

    const preparedCameraData = prepareCameraData(statesFile, transitionsFile);
    loadedPortfolio = await loadPortfolioScene("/models/portfolio_scene.glb");
    scene.add(loadedPortfolio.scene);
    floatingObjects = new FloatingObjectsController(loadedPortfolio.scene, [
      { name: "World_Globe", amplitude: 0.1, speed: 0.95, phase: 0.1 },
      { name: "Game_Controller", amplitude: 0.07, speed: 1.05, phase: 1.7 },
      { name: "Artist_Palette", amplitude: 0.08, speed: 0.9, phase: 3.1 },
      // Keep the CLI island visibly floating, but leave more clearance at the
      // low point so no panel dips into its support/plinth.
      { name: "Terminal_Panel_A", amplitude: 0.04, speed: 0.9, phase: 0.4, lift: 0.12 },
      { name: "Terminal_Panel_B", amplitude: 0.045, speed: 0.9, phase: 2.1, lift: 0.12 },
      { name: "Terminal_Panel_C", amplitude: 0.035, speed: 0.9, phase: 4.0, lift: 0.12 },
    ]);
    console.log("[Float] animated objects", JSON.stringify(floatingObjects.getAnimatedNames()));
    applyContentPlaneSettings(loadedPortfolio.scene);
    applyWarmGroundMaterial(loadedPortfolio.scene);
    terminalController = new TerminalController(loadedPortfolio.scene);
    await loadPortfolioProjectTextures();
    await loadPersonalIntroPhotoTexture();
    applyPortfolioProjectTexture(0);
    applyShadowFlags(loadedPortfolio.scene);
    nprManager = new NPRManager(scene, keyLight);
    const nprDefinitions: Array<{
      key: ActiveNprModule;
      rootName: string;
      preset: NPRConfig;
      minimumSegmentLength: number;
      edgeThreshold: number;
      outlineOpacity: number;
    }> = [
      { key: "personalIntro", rootName: "ROOT_PersonalIntro", preset: personalIntroPreset, minimumSegmentLength: 0.18, edgeThreshold: 44, outlineOpacity: 0.78 },
      { key: "techStack", rootName: "ROOT_TechStack", preset: techStackPreset, minimumSegmentLength: 0.18, edgeThreshold: 44, outlineOpacity: 0.8 },
      { key: "projects", rootName: "ROOT_Projects", preset: projectsPreset, minimumSegmentLength: 0.22, edgeThreshold: 42, outlineOpacity: 0.84 },
      { key: "creativity", rootName: "ROOT_Creativity", preset: creativityPreset, minimumSegmentLength: 0.2, edgeThreshold: 44, outlineOpacity: 0.82 },
      { key: "interests", rootName: "ROOT_MoreInterests", preset: interestsPreset, minimumSegmentLength: 0.2, edgeThreshold: 44, outlineOpacity: 0.76 },
    ];
    nprDefinitions.forEach((definition) => {
      const root = loadedPortfolio?.scene.getObjectByName(definition.rootName);
      if (!root) {
        console.warn(`[NPR] ${definition.rootName} was not found; ${getNprModuleLabel(definition.key)} NPR is unavailable.`);
        return;
      }
      const controller = nprManager!.applyNPRToRoot(root, definition.preset, {
        excludeContentPlanes: true,
        minimumSegmentLength: definition.minimumSegmentLength,
        edgeThreshold: definition.edgeThreshold,
        outlineOpacity: definition.outlineOpacity,
        label: getNprModuleLabel(definition.key),
      });
      controller.loadConfig(initialScenePresets[definition.key]);
      nprControllers[definition.key] = controller;
      console.log(`[NPR] ${getNprModuleLabel(definition.key)} meshes`, JSON.stringify(controller.getManagedObjectNames()));
    });
    nprManager.setResolution(window.innerWidth, window.innerHeight);
    contentPlaneDiagnostics = collectContentPlaneDiagnostics(loadedPortfolio.scene);
    console.log("[Content Planes] diagnostics", JSON.stringify(contentPlaneDiagnostics));
    const glbBounds = new THREE.Box3().setFromObject(loadedPortfolio.scene);
    const glbCenter = glbBounds.getCenter(new THREE.Vector3());
    console.log("[GLB] world bounds", JSON.stringify({
      min: glbBounds.min.toArray(),
      max: glbBounds.max.toArray(),
      center: glbCenter.toArray(),
    }));
    const positionSamples: Record<string, number[]> = {};
    for (const name of ["ROOT_PersonalIntro", "ROOT_TechStack", "ROOT_Projects", "ROOT_Creativity", "ROOT_MoreInterests", "Workstation_Desk", "Workstation_Monitor", "World_Globe"]) {
      const object = loadedPortfolio.scene.getObjectByName(name);
      if (object) positionSamples[name] = object.getWorldPosition(new THREE.Vector3()).toArray();
    }
    console.log("[GLB] world position samples", JSON.stringify(positionSamples));
    cameraController = new CameraController(camera, preparedCameraData.statesFile.states, preparedCameraData.transitionsFile, rulesFile);
    console.log("[Camera] coordinate conversion", "Blender Z-up -> Three.js Y-up: (x, y, z) -> (x, z, -y); quaternion basis conjugation");
    cameraController.setCameraStateInstant("personalIntro");
    syncActiveNprModule("personalIntro");
    setLightingForState("personalIntro", true);
    setDofFocusForState("personalIntro", true);
    const diagnosticTargets = ["Photo_Frame", "Terminal_Panel_A", "Workstation_Desk", "Workstation_Monitor", "ROOT_MoreInterests"];
    const projectedTargets: Record<string, number[]> = {};
    for (const name of diagnosticTargets) {
      const object = loadedPortfolio.scene.getObjectByName(name);
      if (object) projectedTargets[name] = object.getWorldPosition(new THREE.Vector3()).project(camera).toArray();
    }
    console.log("[Camera] initial diagnostic", JSON.stringify({
      direction: camera.getWorldDirection(new THREE.Vector3()).toArray(),
      projectedTargets,
      rendererCalls: renderer.info.render.calls,
    }));
    portfolioUi = new PortfolioUi({
      navigateTo,
      enterCreativityCloseup,
      exitCreativityCloseup,
      previewCreativityEntry: (entrySlug) => void previewCreativityEntry(entrySlug),
      setProjectIndex: applyPortfolioProjectTexture,
    });
    portfolioUi.bind();
    bindControls();
    if (captureStateParam && captureStateNames.includes(captureStateParam as StateName)) {
      setInstantState(captureStateParam as StateName);
    }
    if (captureDofParam === "off" && depthOfField?.isEnabled()) {
      depthOfField.setEnabled(false);
    }
    updateDebugPanel();
    updateDepthOfFieldControls();

    const rootsValid = loadedPortfolio.structure.missingRoots.length === 0;
    const objectValid = loadedPortfolio.structure.missingObjects.length === 0;
    setLoadBadge(rootsValid && objectValid ? "Loaded" : "Issues", rootsValid && objectValid ? "success" : "error");
    if (!rootsValid || !objectValid) {
      setStatus(`Validation issue. Missing roots: ${loadedPortfolio.structure.missingRoots.join(", ") || "none"}; objects: ${loadedPortfolio.structure.missingObjects.join(", ") || "none"}`, "error");
    } else {
      setStatus(`GLB loaded · ${loadedPortfolio.structure.meshCount} meshes · 5/5 ROOT nodes found`, "success");
    }
    updateNprControls();
  } catch (error) {
    console.error(error);
    setLoadBadge("Error", "error");
    setStatus(error instanceof Error ? error.message : "Unknown load error", "error");
  }
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  nprManager?.setResolution(window.innerWidth, window.innerHeight);
  depthOfField?.setSize(window.innerWidth, window.innerHeight);
});

function render(): void {
  requestAnimationFrame(render);
  fpsFrameCount += 1;
  const now = performance.now();
  const deltaSeconds = Math.min((now - lastRenderTime) / 1000, 0.1);
  lastRenderTime = now;
  if (now - fpsWindowStart >= 500) {
    fps = (fpsFrameCount * 1000) / (now - fpsWindowStart);
    fpsFrameCount = 0;
    fpsWindowStart = now;
  }
  floatingObjects?.update(deltaSeconds);
  nprManager?.update();
  renderer.info.reset();
  if (depthOfField) {
    depthOfField.render(deltaSeconds);
    updateDepthOfFieldControls();
  }
  else renderer.render(scene, camera);
  updateDebugPanel();
}

void bootstrap();
render();
