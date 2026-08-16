import * as THREE from "three";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

export interface DepthOfFieldOptions {
  enabled?: boolean;
  aperture?: number;
  maxBlur?: number;
}

type ScalarUniforms = Record<"aperture" | "maxblur" | "focus" | "aspect", { value: number }>;

export class DepthOfFieldController {
  private readonly composer: EffectComposer;
  private readonly bokehPass: BokehPass;
  private readonly outputPass: OutputPass;
  private readonly uniforms: ScalarUniforms;
  private readonly camera: THREE.PerspectiveCamera;
  private focusObject: THREE.Object3D | null = null;
  private readonly focusPoint = new THREE.Vector3();
  private focusDistance = 1;
  private targetFocusDistance = 1;
  private focusInitialized = false;
  private focusTargetLabel = "None";
  private enabled: boolean;

  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    private readonly scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    options: DepthOfFieldOptions = {},
  ) {
    this.camera = camera;
    this.enabled = options.enabled ?? true;
    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, camera));
    this.bokehPass = new BokehPass(scene, camera, {
      focus: 1,
      aperture: options.aperture ?? 0.0025,
      maxblur: options.maxBlur ?? 0.004,
    });
    this.composer.addPass(this.bokehPass);
    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);
    this.uniforms = this.bokehPass.uniforms as unknown as ScalarUniforms;
    this.setEnabled(this.enabled);
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  setFocusObject(object: THREE.Object3D | null, label = object?.name || "None", immediate = false): void {
    this.focusObject = object;
    this.focusTargetLabel = label;
    this.updateFocusDistance(1 / 60, immediate);
  }

  setFocusPoint(point: THREE.Vector3, label = "Custom Target", immediate = false): void {
    this.focusObject = null;
    this.focusPoint.copy(point);
    this.focusTargetLabel = label;
    this.updateFocusDistance(1 / 60, immediate);
  }

  setAperture(value: number): void {
    this.uniforms.aperture.value = THREE.MathUtils.clamp(value, 0.0001, 0.03);
  }

  setMaxBlur(value: number): void {
    this.uniforms.maxblur.value = THREE.MathUtils.clamp(value, 0.001, 0.03);
  }

  getParameters(): { aperture: number; maxBlur: number; focusDistance: number; targetLabel: string } {
    return {
      aperture: this.uniforms.aperture.value,
      maxBlur: this.uniforms.maxblur.value,
      focusDistance: this.focusDistance,
      targetLabel: this.focusTargetLabel,
    };
  }

  setSize(width: number, height: number): void {
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.composer.setSize(width, height);
    this.uniforms.aspect.value = width / Math.max(height, 1);
  }

  private updateFocusDistance(deltaSeconds: number, immediate = false): void {
    if (this.focusObject) {
      this.focusObject.updateWorldMatrix(true, true);
      new THREE.Box3().setFromObject(this.focusObject).getCenter(this.focusPoint);
    }
    this.camera.updateMatrixWorld();
    const cameraSpacePoint = this.camera.worldToLocal(this.focusPoint.clone());
    const distance = Math.max(this.camera.near + 0.01, -cameraSpacePoint.z);
    this.targetFocusDistance = distance;
    if (!this.focusInitialized || immediate) {
      this.focusDistance = distance;
      this.focusInitialized = true;
    } else {
      const smoothing = 1 - Math.exp(-10 * Math.max(deltaSeconds, 0.001));
      this.focusDistance = THREE.MathUtils.lerp(this.focusDistance, this.targetFocusDistance, smoothing);
    }
    this.uniforms.focus.value = this.focusDistance;
  }

  update(deltaSeconds = 1 / 60): void {
    if (!this.enabled) return;
    this.updateFocusDistance(deltaSeconds);
  }

  render(deltaSeconds = 1 / 60): void {
    this.update(deltaSeconds);
    if (this.enabled) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.composer.dispose();
    this.bokehPass.dispose();
  }
}
