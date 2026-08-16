import type { NPRConfig } from "../nprConfig";
import { projectsPreset } from "./projectsPreset";

/** Shared visual language, with slightly calmer settings for small curved assets. */
export const interestsPreset: NPRConfig = {
  ...projectsPreset,
  baseLightBoost: 1.15,
  midtoneStrength: 0.28,
  hatchLineWidth: 7,
  hatchSpacing: 38,
  hatchOpacity: 0.34,
  shadowThreshold: 0.28,
  deepShadowThreshold: 0.18,
  outlineWidth: 0.007,
  paperNoiseOpacity: 0.006,
};
