import type { NPRConfig } from "../nprConfig";
import { projectsPreset } from "./projectsPreset";

export const techStackPreset: NPRConfig = {
  ...projectsPreset,
  baseLightBoost: 1.18,
  midtoneStrength: 0.3,
  hatchLineWidth: 8,
  hatchSpacing: 32,
  hatchOpacity: 0.38,
  shadowThreshold: 0.3,
  deepShadowThreshold: 0.18,
  outlineWidth: 0.007,
  paperNoiseOpacity: 0.006,
};
