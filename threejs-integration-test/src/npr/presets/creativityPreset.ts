import type { NPRConfig } from "../nprConfig";
import { projectsPreset } from "./projectsPreset";

export const creativityPreset: NPRConfig = {
  ...projectsPreset,
  baseLightBoost: 1.17,
  midtoneStrength: 0.3,
  hatchLineWidth: 9,
  hatchSpacing: 28,
  hatchOpacity: 0.42,
  shadowThreshold: 0.32,
  deepShadowThreshold: 0.22,
  outlineWidth: 0.008,
  paperNoiseOpacity: 0.008,
};
