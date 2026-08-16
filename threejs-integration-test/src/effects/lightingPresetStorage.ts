import type { LightingPreset, LightingPresetName } from "./lightingPresets";

const STORAGE_KEY = "portfolio-lighting-scene-presets-v1";
type StoredLightingPreset = Partial<LightingPreset>;
type StoredLightingPresetMap = Partial<Record<LightingPresetName, StoredLightingPreset>>;

function readStoredLightingPresets(): StoredLightingPresetMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === "object" ? parsed as StoredLightingPresetMap : {};
  } catch {
    return {};
  }
}

function writeStoredLightingPresets(presets: StoredLightingPresetMap): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
  } catch {
    // Storage failure must not prevent the scene from loading.
  }
}

function isVec3(value: unknown): value is [number, number, number] {
  return Array.isArray(value) && value.length === 3 && value.every((item) => typeof item === "number");
}

function mergeLightingPreset(defaultPreset: LightingPreset, stored?: StoredLightingPreset): LightingPreset {
  if (!stored || typeof stored !== "object") return { ...defaultPreset };
  const merged: LightingPreset = { ...defaultPreset };
  const scalarKeys: Array<keyof Omit<LightingPreset, "keyPosition" | "keyTarget">> = [
    "keyIntensity",
    "shadowIntensity",
    "fillIntensity",
    "ambientIntensity",
    "hemisphereIntensity",
  ];
  scalarKeys.forEach((key) => {
    if (typeof stored[key] === "number") merged[key] = stored[key] as never;
  });
  if (isVec3(stored.keyPosition)) merged.keyPosition = [...stored.keyPosition];
  if (isVec3(stored.keyTarget)) merged.keyTarget = [...stored.keyTarget];
  return merged;
}

export function loadLightingPresets(
  defaults: Record<LightingPresetName, LightingPreset>,
): Record<LightingPresetName, LightingPreset> {
  const stored = readStoredLightingPresets();
  return {
    personalIntro: mergeLightingPreset(defaults.personalIntro, stored.personalIntro),
    techStack: mergeLightingPreset(defaults.techStack, stored.techStack),
    projects: mergeLightingPreset(defaults.projects, stored.projects),
    creativity: mergeLightingPreset(defaults.creativity, stored.creativity),
    interests: mergeLightingPreset(defaults.interests, stored.interests),
  };
}

export function hasSavedLightingPreset(scene: LightingPresetName): boolean {
  const saved = readStoredLightingPresets()[scene];
  return Boolean(saved && typeof saved === "object");
}

export function saveLightingPreset(scene: LightingPresetName, preset: LightingPreset): void {
  const stored = readStoredLightingPresets();
  stored[scene] = {
    ...preset,
    keyPosition: [...preset.keyPosition],
    keyTarget: [...preset.keyTarget],
  };
  writeStoredLightingPresets(stored);
}

export function getSavedLightingPreset(scene: LightingPresetName): StoredLightingPreset | null {
  const saved = readStoredLightingPresets()[scene];
  return saved && typeof saved === "object" ? { ...saved } : null;
}
