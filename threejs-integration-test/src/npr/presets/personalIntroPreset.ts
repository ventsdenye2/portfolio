import type { NPRConfig } from "../nprConfig";
import { projectsPreset } from "./projectsPreset";

export const personalIntroPreset: NPRConfig = {
  ...projectsPreset,
  baseLightBoost: 1.18,
  midtoneStrength: 0.24,
  hatchLineWidth: 7,
  hatchSpacing: 35,
  hatchOpacity: 0.28,
  shadowThreshold: 0.28,
  deepShadowThreshold: 0.16,
  outlineWidth: 0.006,
  paperNoiseOpacity: 0.005,
};
