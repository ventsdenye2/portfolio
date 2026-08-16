export type StateName =
  | "personalIntro"
  | "techStack"
  | "projects"
  | "creativityBase"
  | "creativityCloseup"
  | "moreInterests";

export type MainState = Exclude<StateName, "creativityCloseup">;
export type DetailState = "base" | "closeup";

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface QuaternionJSON {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface CameraState {
  frame?: number;
  camera?: string;
  position: Vec3;
  rotationEuler?: Vec3;
  quaternion?: QuaternionJSON;
  target?: Vec3;
  targetName?: string;
  focalLength?: number;
  fov?: number;
  blenderEvaluatedRotationEuler?: Vec3;
}

export type CameraStates = Record<StateName, CameraState>;

export interface CameraStatesFile {
  version: string;
  sourceBlend?: string;
  orientationPolicy?: string;
  states: CameraStates;
}

export interface CameraTransition {
  name: string;
  from: StateName;
  to: StateName;
  camera?: string;
  action?: string;
  keyframes: CameraState[];
}

export interface CameraTransitionsFile {
  version: string;
  navigationAction?: { name?: string; allKeyframes?: number[] };
  closeupAction?: { name?: string; allKeyframes?: number[] };
  transitions: CameraTransition[];
}

export interface CameraNavigationRulesFile {
  version: string;
  states: StateName[];
  rules: {
    creativityCloseup: {
      allowedDirectReturn: "creativityBase";
      mustReturnToBaseBeforeOtherModule: boolean;
      forbiddenDirectTransitions: StateName[];
    };
    mainNavigationOrder: MainState[];
    closeupEntry: string;
    closeupExit: string;
  };
}
