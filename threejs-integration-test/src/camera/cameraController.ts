import { gsap } from "gsap";
import * as THREE from "three";
import type {
  CameraNavigationRulesFile,
  CameraState,
  CameraTransition,
  CameraTransitionsFile,
  CameraStates,
  DetailState,
  MainState,
  StateName,
} from "./cameraTypes";

interface RuntimeKeyframe {
  frame?: number;
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  fov: number;
}

// Blender scenes are Z-up while glTF/Three.js scenes are Y-up. The GLB
// loader already presents the asset in Three.js coordinates, so the authored
// Blender camera data needs the same basis change before it is applied.
const BLENDER_TO_THREE = new THREE.Quaternion().setFromEuler(
  new THREE.Euler(-Math.PI / 2, 0, 0, "XYZ"),
);
const THREE_TO_BLENDER = BLENDER_TO_THREE.clone().invert();

function convertVectorFromBlender(value: { x: number; y: number; z: number }): THREE.Vector3 {
  return new THREE.Vector3(value.x, value.z, -value.y);
}

function convertQuaternionFromBlender(value: { x: number; y: number; z: number; w: number }): THREE.Quaternion {
  const blenderQuaternion = new THREE.Quaternion(value.x, value.y, value.z, value.w).normalize();
  return BLENDER_TO_THREE.clone().multiply(blenderQuaternion).multiply(THREE_TO_BLENDER).normalize();
}

export function convertBlenderCameraStateToThree(state: CameraState): CameraState {
  const convertedPosition = convertVectorFromBlender(state.position);
  const convertedTarget = state.target ? convertVectorFromBlender(state.target) : undefined;
  const sourceQuaternion = state.quaternion ?? new THREE.Quaternion()
    .setFromEuler(new THREE.Euler(
      state.rotationEuler?.x ?? 0,
      state.rotationEuler?.y ?? 0,
      state.rotationEuler?.z ?? 0,
      "XYZ",
    ));
  let convertedQuaternion = convertQuaternionFromBlender(sourceQuaternion);
  // The exported JSON explicitly records named visual targets and states that
  // its quaternion was derived from them. Rebuild the equivalent Three.js
  // orientation from the converted target when available. This preserves the
  // authored viewing direction and avoids mixing Blender's Z-up camera basis
  // with Three.js' Y-up camera basis.
  if (convertedTarget) {
    const orientationProbe = new THREE.PerspectiveCamera();
    orientationProbe.position.copy(convertedPosition);
    orientationProbe.lookAt(convertedTarget);
    convertedQuaternion = orientationProbe.quaternion.clone();
  }
  const convertedEuler = new THREE.Euler().setFromQuaternion(convertedQuaternion, "XYZ");

  return {
    ...state,
    position: convertedPosition.toArray().reduce((result, value, index) => {
      result[index === 0 ? "x" : index === 1 ? "y" : "z"] = value;
      return result;
    }, {} as { x: number; y: number; z: number }),
    target: convertedTarget ? convertedTarget.toArray().reduce((result, value, index) => {
      result[index === 0 ? "x" : index === 1 ? "y" : "z"] = value;
      return result;
    }, {} as { x: number; y: number; z: number }) : undefined,
    rotationEuler: { x: convertedEuler.x, y: convertedEuler.y, z: convertedEuler.z },
    quaternion: {
      x: convertedQuaternion.x,
      y: convertedQuaternion.y,
      z: convertedQuaternion.z,
      w: convertedQuaternion.w,
    },
  };
}

export interface CameraDebugSnapshot {
  currentMainState: MainState;
  detailState: DetailState;
  isTransitioning: boolean;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  fov: number;
}

export class CameraController {
  private readonly camera: THREE.PerspectiveCamera;
  private readonly states: CameraStates;
  private readonly transitions: CameraTransition[];
  private readonly rules: CameraNavigationRulesFile["rules"];
  private currentMainState: MainState = "personalIntro";
  private detailState: DetailState = "base";
  private isTransitioning = false;

  constructor(
    camera: THREE.PerspectiveCamera,
    states: CameraStates,
    transitionsFile: CameraTransitionsFile,
    rulesFile: CameraNavigationRulesFile,
  ) {
    this.camera = camera;
    this.states = states;
    this.transitions = transitionsFile.transitions;
    this.rules = rulesFile.rules;
  }

  public setCameraStateInstant(stateName: StateName): void {
    if (this.isTransitioning) return;
    this.applyState(this.states[stateName]);
    if (stateName === "creativityCloseup") {
      this.currentMainState = "creativityBase";
      this.detailState = "closeup";
    } else {
      this.currentMainState = stateName;
      this.detailState = "base";
    }
  }

  public async navigateTo(targetState: MainState): Promise<boolean> {
    if (this.isTransitioning) return false;

    // The navigation rule is deliberately enforced here, not only in the UI:
    // closeup has one legal direct return and must exit before another module.
    if (this.detailState === "closeup") {
      await this.exitCreativityCloseup();
    }

    if (targetState === this.currentMainState) return true;
    const fromState = this.currentMainState;
    const transition = this.findTransition(fromState, targetState);
    // Some Blender exports keep a named transition with no authored
    // keyframes. Treat that as missing path data and use the centralized
    // fallback instead of completing a state change without moving the camera.
    const path = transition && transition.keyframes.length >= 2
      ? transition.keyframes
      : this.buildFallbackPath(targetState);
    await this.animatePath(path);
    this.currentMainState = targetState;
    this.detailState = "base";
    return true;
  }

  public async enterCreativityCloseup(): Promise<boolean> {
    if (this.isTransitioning || this.currentMainState !== "creativityBase" || this.detailState !== "base") {
      return false;
    }
    const transition = this.findTransition("creativityBase", "creativityCloseup");
    if (!transition) return false;
    await this.animatePath(transition.keyframes);
    this.detailState = "closeup";
    return true;
  }

  public async exitCreativityCloseup(): Promise<boolean> {
    if (this.isTransitioning || this.detailState !== "closeup") return true;
    const transition = this.findTransition("creativityCloseup", "creativityBase");
    if (!transition) return false;
    await this.animatePath(transition.keyframes);
    this.detailState = "base";
    this.currentMainState = "creativityBase";
    return true;
  }

  public getDebugSnapshot(): CameraDebugSnapshot {
    return {
      currentMainState: this.currentMainState,
      detailState: this.detailState,
      isTransitioning: this.isTransitioning,
      position: this.camera.position.clone(),
      rotation: this.camera.rotation.clone(),
      fov: this.camera.fov,
    };
  }

  private applyState(state: CameraState): void {
    this.applyRuntimeKeyframe(this.toRuntimeKeyframe(state));
  }

  private toRuntimeKeyframe(state: CameraState): RuntimeKeyframe {
    const convertedState = convertBlenderCameraStateToThree(state);
    const resolvedQuaternion = new THREE.Quaternion(
      convertedState.quaternion?.x ?? 0,
      convertedState.quaternion?.y ?? 0,
      convertedState.quaternion?.z ?? 0,
      convertedState.quaternion?.w ?? 1,
    ).normalize();
    return {
      frame: convertedState.frame,
      position: new THREE.Vector3(
        convertedState.position.x,
        convertedState.position.y,
        convertedState.position.z,
      ),
      quaternion: resolvedQuaternion,
      fov: convertedState.fov ?? this.camera.fov,
    };
  }

  private async animatePath(keyframes: CameraState[]): Promise<void> {
    const path = keyframes.map((keyframe) => this.toRuntimeKeyframe(keyframe));
    if (path.length < 2) {
      if (path[0]) this.applyRuntimeKeyframe(path[0]);
      return;
    }

    this.isTransitioning = true;
    try {
      for (let index = 0; index < path.length - 1; index += 1) {
        await this.animateSegment(path[index], path[index + 1]);
      }
    } finally {
      this.isTransitioning = false;
    }
  }

  private animateSegment(from: RuntimeKeyframe, to: RuntimeKeyframe): Promise<void> {
    const frameDelta = Math.abs((to.frame ?? 0) - (from.frame ?? 0));
    const duration = frameDelta > 0 ? Math.max(0.45, Math.min(2.2, frameDelta / 24)) : 1.2;
    const proxy = { progress: 0 };

    return new Promise((resolve) => {
      gsap.to(proxy, {
        progress: 1,
        duration,
        ease: "power2.inOut",
        onUpdate: () => {
          const progress = proxy.progress;
          this.camera.position.lerpVectors(from.position, to.position, progress);
          this.camera.quaternion.slerpQuaternions(from.quaternion, to.quaternion, progress);
          this.camera.fov = THREE.MathUtils.lerp(from.fov, to.fov, progress);
          this.camera.updateProjectionMatrix();
        },
        onComplete: resolve,
      });
    });
  }

  private applyRuntimeKeyframe(keyframe: RuntimeKeyframe): void {
    this.camera.position.copy(keyframe.position);
    this.camera.quaternion.copy(keyframe.quaternion);
    this.camera.fov = keyframe.fov;
    this.camera.updateProjectionMatrix();
  }

  private findTransition(from: StateName, to: StateName): CameraTransition | undefined {
    return this.transitions.find((transition) => transition.from === from && transition.to === to);
  }

  private buildFallbackPath(targetState: MainState): CameraState[] {
    // The source data has authored waypoints for the primary forward route.
    // Reverse or skipped navigation uses a direct, centralized interpolation
    // fallback so we never mutate the Blender-authored JSON or invent a new path.
    const current = this.currentMainState === "creativityBase" && this.detailState === "closeup"
      ? this.states.creativityCloseup
      : this.states[this.currentMainState];
    const target = this.states[targetState];
    return [
      {
        ...current,
        position: { ...current.position },
        quaternion: current.quaternion ? { ...current.quaternion } : undefined,
        rotationEuler: current.rotationEuler ? { ...current.rotationEuler } : undefined,
      },
      {
        ...target,
        position: { ...target.position },
        quaternion: target.quaternion ? { ...target.quaternion } : undefined,
        rotationEuler: target.rotationEuler ? { ...target.rotationEuler } : undefined,
      },
    ];
  }

  public getNavigationRules(): CameraNavigationRulesFile["rules"] {
    return this.rules;
  }
}
