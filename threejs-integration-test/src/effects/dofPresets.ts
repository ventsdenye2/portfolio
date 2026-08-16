import type { StateName } from "../camera/cameraTypes";

export interface DofStatePreset {
  aperture: number;
  maxBlur: number;
}

export const dofStatePresets: Record<StateName, DofStatePreset> = {
  personalIntro: { aperture: 0.0025, maxBlur: 0.004 },
  techStack: { aperture: 0.0023, maxBlur: 0.004 },
  projects: { aperture: 0.0025, maxBlur: 0.0045 },
  creativityBase: { aperture: 0.0025, maxBlur: 0.0045 },
  creativityCloseup: { aperture: 0.0032, maxBlur: 0.0055 },
  moreInterests: { aperture: 0.0023, maxBlur: 0.004 },
};
