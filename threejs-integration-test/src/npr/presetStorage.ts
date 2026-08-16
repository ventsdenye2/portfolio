import type { NPRConfig } from "./nprConfig";

export type NPRSceneKey = "personalIntro" | "techStack" | "projects" | "creativity" | "interests";
export type NPRScenePresetMap = Record<NPRSceneKey, NPRConfig>;

const STORAGE_KEY = "portfolio-npr-scene-presets-v1";

type StoredPreset = Partial<Omit<NPRConfig, "enabled">>;
type StoredPresetMap = Partial<Record<NPRSceneKey, StoredPreset>>;

function readStoredPresets(): StoredPresetMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as StoredPresetMap;
  } catch {
    return {};
  }
}

function writeStoredPresets(presets: StoredPresetMap): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
  } catch {
    // Private browsing or blocked storage should not prevent the scene from running.
  }
}

function mergePreset(defaultPreset: NPRConfig, stored?: StoredPreset): NPRConfig {
  if (!stored || typeof stored !== "object") return { ...defaultPreset };
  const merged: NPRConfig = { ...defaultPreset };
  (Object.keys(defaultPreset) as Array<keyof NPRConfig>).forEach((key) => {
    if (key === "enabled") return;
    const value = stored[key];
    if (typeof value === typeof defaultPreset[key]) {
      (merged[key] as NPRConfig[typeof key]) = value as NPRConfig[typeof key];
    }
  });
  return merged;
}

function serializablePreset(config: NPRConfig): StoredPreset {
  const { enabled: _enabled, ...persisted } = config;
  return persisted;
}

export function loadScenePresets(defaults: NPRScenePresetMap): NPRScenePresetMap {
  const stored = readStoredPresets();
  return {
    personalIntro: mergePreset(defaults.personalIntro, stored.personalIntro),
    techStack: mergePreset(defaults.techStack, stored.techStack),
    projects: mergePreset(defaults.projects, stored.projects),
    creativity: mergePreset(defaults.creativity, stored.creativity),
    interests: mergePreset(defaults.interests, stored.interests),
  };
}

export function getSavedScenePreset(scene: NPRSceneKey): StoredPreset | null {
  const saved = readStoredPresets()[scene];
  return saved && typeof saved === "object" ? { ...saved } : null;
}

export function hasSavedScenePreset(scene: NPRSceneKey): boolean {
  return getSavedScenePreset(scene) !== null;
}

export function saveScenePreset(scene: NPRSceneKey, config: NPRConfig): void {
  const stored = readStoredPresets();
  stored[scene] = serializablePreset(config);
  writeStoredPresets(stored);
}

export function clearScenePreset(scene: NPRSceneKey): void {
  const stored = readStoredPresets();
  delete stored[scene];
  writeStoredPresets(stored);
}

export function exportScenePreset(scene: NPRSceneKey, config: NPRConfig): void {
  if (typeof document === "undefined") return;
  const payload = {
    version: 1,
    scene,
    preset: serializablePreset(config),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `npr_${scene}_preset.json`;
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
