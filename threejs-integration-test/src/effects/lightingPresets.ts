import type { StateName } from "../camera/cameraTypes";

export type LightingPresetName =
  | "personalIntro"
  | "techStack"
  | "projects"
  | "creativity"
  | "interests";

export interface LightingPreset {
  keyIntensity: number;
  shadowIntensity: number;
  fillIntensity: number;
  ambientIntensity: number;
  hemisphereIntensity: number;
  keyPosition: [number, number, number];
  keyTarget: [number, number, number];
}

/**
 * Module-specific lighting keeps the established neutral palette while giving
 * each camera state its own readable contrast and contact-shadow balance.
 * Values are intentionally close together so navigation feels like one space,
 * not five unrelated lighting rigs.
 */
export const lightingPresets: Record<LightingPresetName, LightingPreset> = {
  personalIntro: {
    keyIntensity: 2.55,
    shadowIntensity: 0.58,
    fillIntensity: 0.22,
    ambientIntensity: 0.52,
    hemisphereIntensity: 0.3,
    keyPosition: [5, 9, 7],
    keyTarget: [0, 0, 0],
  },
  techStack: {
    keyIntensity: 2.55,
    shadowIntensity: 1,
    fillIntensity: 0,
    ambientIntensity: 0.52,
    hemisphereIntensity: 0.3,
    keyPosition: [5, 9, 7],
    keyTarget: [0, 0, 0],
  },
  projects: {
    keyIntensity: 2.55,
    shadowIntensity: 1,
    fillIntensity: 0,
    ambientIntensity: 0.52,
    hemisphereIntensity: 0.3,
    keyPosition: [5, 9, 7],
    keyTarget: [0, 0, 0],
  },
  creativity: {
    keyIntensity: 2.55,
    shadowIntensity: 1,
    fillIntensity: 0,
    ambientIntensity: 0.52,
    hemisphereIntensity: 0.3,
    keyPosition: [5, 9, 7],
    keyTarget: [0, 0, 0],
  },
  interests: {
    keyIntensity: 2.55,
    shadowIntensity: 1,
    fillIntensity: 0,
    ambientIntensity: 0.52,
    hemisphereIntensity: 0.3,
    keyPosition: [5, 9, 7],
    keyTarget: [0, 0, 0],
  },
};

export function lightingPresetForState(
  stateName: StateName,
  presets: Record<LightingPresetName, LightingPreset> = lightingPresets,
): LightingPreset {
  if (stateName === "moreInterests") return presets.interests;
  if (stateName === "creativityBase" || stateName === "creativityCloseup") return presets.creativity;
  return presets[stateName];
}
