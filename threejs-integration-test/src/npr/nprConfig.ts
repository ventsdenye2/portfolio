export interface NPRConfig {
  enabled: boolean;
  outlineEnabled: boolean;
  hatchingEnabled: boolean;
  paperNoiseEnabled: boolean;
  baseLightBoost: number;
  midtoneStrength: number;
  hatchLineWidth: number;
  hatchSpacing: number;
  hatchAngle: number;
  hatchOpacity: number;
  shadowThreshold: number;
  deepShadowThreshold: number;
  shadowDarkenAmount: number;
  outlineWidth: number;
  outlineColor: string;
  hatchColor: string;
  paperNoiseOpacity: number;
}

export type NPRProjectsConfig = NPRConfig;

export interface NPRApplyOptions {
  excludeContentPlanes?: boolean;
  excludeNames?: string[];
  includeNames?: string[];
  minimumSegmentLength?: number;
  edgeThreshold?: number;
  outlineOpacity?: number;
  label?: string;
}
