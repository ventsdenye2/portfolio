import * as THREE from "three";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import type { NPRApplyOptions, NPRConfig } from "./nprConfig";
import {
  HATCH_FRAGMENT_SHADER,
  HATCH_VERTEX_SHADER,
  PAPER_FRAGMENT_SHADER,
  PAPER_VERTEX_SHADER,
} from "./shaders";

type MaterialWithTexture = THREE.Material & {
  map?: THREE.Texture | null;
  alphaTest?: number;
};

interface NPRMeshState {
  mesh: THREE.Mesh;
  originalMaterial: THREE.Material | THREE.Material[];
  hatchOverlays: THREE.Mesh[];
  paperOverlays: THREE.Mesh[];
  outlineOverlays: LineSegments2[];
}

export const CONTENT_PLANE_NAMES = new Set([
  "PersonalIntro_Photo",
  "Projects_Screen",
  "Creativity_Screen",
  "Terminal_Panel_A",
  "Terminal_Panel_B",
  "Terminal_Panel_C",
]);

const NPR_BASE_COLOR = new THREE.Color("#f3f3ef");

function asMaterialArray(material: THREE.Material | THREE.Material[]): THREE.Material[] {
  return Array.isArray(material) ? material : [material];
}

function asColor(value: string): THREE.Color {
  return new THREE.Color(value);
}

function textureFromMaterial(material: THREE.Material): THREE.Texture | null {
  return (material as MaterialWithTexture).map ?? null;
}

function cloneConfig(config: NPRConfig): NPRConfig {
  return { ...config };
}

export class NPRRootController {
  private readonly scene: THREE.Scene;
  private readonly root: THREE.Object3D;
  private readonly keyLight: THREE.DirectionalLight;
  private readonly options: NPRApplyOptions;
  private readonly label: string;
  private readonly preset: NPRConfig;
  private config: NPRConfig;
  private readonly states: NPRMeshState[] = [];
  private enabled = false;

  constructor(
    scene: THREE.Scene,
    root: THREE.Object3D,
    keyLight: THREE.DirectionalLight,
    preset: NPRConfig,
    options: NPRApplyOptions = {},
  ) {
    this.scene = scene;
    this.root = root;
    this.keyLight = keyLight;
    this.options = options;
    this.label = options.label ?? (root.name || "NPR");
    this.preset = cloneConfig(preset);
    this.config = cloneConfig(preset);
  }

  private makeBaseMaterial(source: THREE.Material): THREE.MeshStandardMaterial {
    const sourceWithTexture = source as MaterialWithTexture;
    const material = new THREE.MeshStandardMaterial({
      color: NPR_BASE_COLOR.clone().multiplyScalar(this.config.baseLightBoost),
      map: textureFromMaterial(source),
      transparent: source.transparent,
      opacity: source.opacity,
      alphaTest: sourceWithTexture.alphaTest ?? 0,
      side: source.side,
      metalness: 0,
      roughness: 0.9,
      depthTest: true,
      depthWrite: true,
    });
    material.name = `NPR_${this.label}_Base_${source.name || "Material"}`;
    return material;
  }

  private makeHatchMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      name: `NPR_${this.label}_Hatching`,
      vertexShader: HATCH_VERTEX_SHADER,
      fragmentShader: HATCH_FRAGMENT_SHADER,
      uniforms: {
        uLightDirection: { value: new THREE.Vector3() },
        uHatchColor: { value: asColor(this.config.hatchColor) },
        uHatchLineWidth: { value: this.config.hatchLineWidth },
        uHatchSpacing: { value: this.config.hatchSpacing },
        uHatchAngle: { value: THREE.MathUtils.degToRad(this.config.hatchAngle) },
        uHatchOpacity: { value: this.config.hatchOpacity },
        uMidtoneStrength: { value: this.config.midtoneStrength },
        uShadowThreshold: { value: this.config.shadowThreshold },
        uDeepShadowThreshold: { value: this.config.deepShadowThreshold },
        uShadowDarkenAmount: { value: this.config.shadowDarkenAmount },
      },
      transparent: true,
      depthTest: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.NormalBlending,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
  }

  private makePaperMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      name: `NPR_${this.label}_PaperNoise`,
      vertexShader: PAPER_VERTEX_SHADER,
      fragmentShader: PAPER_FRAGMENT_SHADER,
      uniforms: {
        uPaperColor: { value: new THREE.Color("#4e4a43") },
        uPaperOpacity: { value: this.config.paperNoiseOpacity },
      },
      transparent: true,
      depthTest: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: THREE.NormalBlending,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
  }

  private makeOutlineLine(mesh: THREE.Mesh): LineSegments2 | null {
    const edges = new THREE.EdgesGeometry(mesh.geometry, this.options.edgeThreshold ?? 42);
    const edgePositions = edges.getAttribute("position");
    const positions: number[] = [];
    const start = new THREE.Vector3();
    const end = new THREE.Vector3();
    const minimumSegmentLength = this.options.minimumSegmentLength ?? 0.22;
    for (let index = 0; index + 1 < edgePositions.count; index += 2) {
      start.fromBufferAttribute(edgePositions, index);
      end.fromBufferAttribute(edgePositions, index + 1);
      if (start.distanceTo(end) < minimumSegmentLength) continue;
      positions.push(start.x, start.y, start.z, end.x, end.y, end.z);
    }
    edges.dispose();
    if (positions.length === 0) return null;

    const geometry = new LineSegmentsGeometry();
    geometry.setPositions(positions);
    const material = new LineMaterial({
      color: this.config.outlineColor,
      linewidth: this.config.outlineWidth * 140,
      transparent: true,
      opacity: this.options.outlineOpacity ?? 0.84,
      depthTest: true,
      depthWrite: false,
      worldUnits: false,
    });
    const line = new LineSegments2(geometry, material);
    line.name = `${mesh.name}_NPR_MajorEdges`;
    line.matrixAutoUpdate = false;
    line.frustumCulled = false;
    line.renderOrder = 4;
    line.userData.isNprOverlay = true;
    this.scene.add(line);
    return line;
  }

  private createOverlay(mesh: THREE.Mesh, material: THREE.Material, renderOrder: number): THREE.Mesh {
    const overlay = new THREE.Mesh(mesh.geometry, material);
    overlay.name = `${mesh.name}_NPR_Overlay`;
    overlay.matrixAutoUpdate = false;
    overlay.frustumCulled = false;
    overlay.renderOrder = renderOrder;
    overlay.userData.isNprOverlay = true;
    this.scene.add(overlay);
    return overlay;
  }

  private collectMeshes(): THREE.Mesh[] {
    const includeNames = this.options.includeNames ?? [];
    const excludeNames = new Set(this.options.excludeNames ?? []);
    const meshes: THREE.Mesh[] = [];
    this.root.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh) return;
      if (this.options.excludeContentPlanes && (mesh.userData.isContentPlane || CONTENT_PLANE_NAMES.has(mesh.name))) return;
      if (excludeNames.has(mesh.name)) return;
      if (includeNames.length > 0 && !includeNames.includes(mesh.name) && this.root.name !== mesh.name) return;
      meshes.push(mesh);
    });
    return meshes;
  }

  private buildStates(): void {
    this.disposeOverlays();
    this.states.length = 0;
    for (const mesh of this.collectMeshes()) {
      const originalMaterial = mesh.material;
      const originalMaterials = asMaterialArray(originalMaterial);
      const hatchOverlays = [this.createOverlay(mesh, this.makeHatchMaterial(), 5)];
      const paperOverlays = [this.createOverlay(mesh, this.makePaperMaterial(), 6)];
      const outline = this.makeOutlineLine(mesh);
      const outlineOverlays = outline ? [outline] : [];
      mesh.userData.originalMaterial = originalMaterial;
      mesh.userData.nprManaged = true;
      mesh.material = originalMaterials.length === 1
        ? this.makeBaseMaterial(originalMaterials[0])
        : originalMaterials.map((material) => this.makeBaseMaterial(material));
      this.states.push({ mesh, originalMaterial, hatchOverlays, paperOverlays, outlineOverlays });
    }
  }

  private disposeOverlays(): void {
    for (const state of this.states) {
      [...state.hatchOverlays, ...state.paperOverlays, ...state.outlineOverlays].forEach((overlay) => {
        this.scene.remove(overlay);
        const material = (overlay as THREE.Mesh & { material?: THREE.Material | THREE.Material[] }).material;
        if (material) asMaterialArray(material).forEach((item) => item.dispose());
        if (overlay instanceof LineSegments2) overlay.geometry.dispose();
      });
    }
  }

  private setOverlayVisibility(): void {
    for (const state of this.states) {
      state.hatchOverlays.forEach((overlay) => { overlay.visible = this.enabled && this.config.hatchingEnabled; });
      state.paperOverlays.forEach((overlay) => { overlay.visible = this.enabled && this.config.paperNoiseEnabled; });
      state.outlineOverlays.forEach((overlay) => { overlay.visible = this.enabled && this.config.outlineEnabled; });
    }
  }

  private updateUniforms(): void {
    const lightPosition = this.keyLight.getWorldPosition(new THREE.Vector3());
    const targetPosition = this.keyLight.target.getWorldPosition(new THREE.Vector3());
    const lightDirection = lightPosition.sub(targetPosition).normalize();
    for (const state of this.states) {
      const overlays = [...state.hatchOverlays, ...state.paperOverlays, ...state.outlineOverlays];
      overlays.forEach((overlay) => {
        overlay.matrix.copy(state.mesh.matrixWorld);
        overlay.matrixWorld.copy(state.mesh.matrixWorld);
        overlay.matrixWorldNeedsUpdate = true;
      });

      state.hatchOverlays.forEach((overlay) => {
        asMaterialArray(overlay.material).forEach((material) => {
          const shader = material as THREE.ShaderMaterial;
          shader.uniforms.uLightDirection.value.copy(lightDirection);
          shader.uniforms.uHatchColor.value.set(this.config.hatchColor);
          shader.uniforms.uHatchLineWidth.value = this.config.hatchLineWidth;
          shader.uniforms.uHatchSpacing.value = this.config.hatchSpacing;
          shader.uniforms.uHatchAngle.value = THREE.MathUtils.degToRad(this.config.hatchAngle);
          shader.uniforms.uHatchOpacity.value = this.config.hatchOpacity;
          shader.uniforms.uMidtoneStrength.value = this.config.midtoneStrength;
          shader.uniforms.uShadowThreshold.value = this.config.shadowThreshold;
          shader.uniforms.uDeepShadowThreshold.value = this.config.deepShadowThreshold;
          shader.uniforms.uShadowDarkenAmount.value = this.config.shadowDarkenAmount;
        });
      });
      state.paperOverlays.forEach((overlay) => {
        asMaterialArray(overlay.material).forEach((material) => {
          (material as THREE.ShaderMaterial).uniforms.uPaperOpacity.value = this.config.paperNoiseOpacity;
        });
      });
      state.outlineOverlays.forEach((overlay) => {
        overlay.material.linewidth = this.config.outlineWidth * 140;
        overlay.material.color.set(this.config.outlineColor);
      });
      asMaterialArray(state.mesh.material).forEach((material) => {
        const baseMaterial = material as THREE.MeshStandardMaterial;
        if ("color" in baseMaterial) {
          baseMaterial.color.copy(NPR_BASE_COLOR).multiplyScalar(this.config.baseLightBoost);
          baseMaterial.needsUpdate = true;
        }
      });
    }
  }

  enable(): void {
    if (this.enabled) return;
    this.buildStates();
    this.enabled = true;
    this.config.enabled = true;
    this.setOverlayVisibility();
    this.updateUniforms();
  }

  disable(): void {
    if (!this.enabled) return;
    for (const state of this.states) {
      state.mesh.material = state.originalMaterial;
      state.mesh.userData.nprManaged = false;
    }
    this.disposeOverlays();
    this.states.length = 0;
    this.enabled = false;
    this.config.enabled = false;
  }

  dispose(): void {
    this.disable();
  }

  resetPreset(): void {
    this.config = { ...cloneConfig(this.preset), enabled: this.enabled };
    this.setOverlayVisibility();
    this.updateUniforms();
  }

  loadConfig(config: Partial<NPRConfig>): void {
    this.config = { ...this.config, ...config, enabled: this.enabled };
    this.setOverlayVisibility();
    this.updateUniforms();
  }

  setEnabled(enabled: boolean): void {
    if (enabled) this.enable();
    else this.disable();
  }

  setFeature(feature: "outlineEnabled" | "hatchingEnabled" | "paperNoiseEnabled", enabled: boolean): void {
    this.config[feature] = enabled;
    this.setOverlayVisibility();
  }

  setParameter(parameter: keyof NPRConfig, value: number): void {
    if (typeof this.config[parameter] !== "number") return;
    (this.config[parameter] as number) = value;
    this.updateUniforms();
  }

  setResolution(width: number, height: number): void {
    for (const state of this.states) {
      state.outlineOverlays.forEach((overlay) => overlay.material.resolution.set(width, height));
    }
  }

  getConfig(): NPRConfig {
    return { ...this.config };
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  getManagedMeshCount(): number {
    return this.states.length;
  }

  getManagedObjectNames(): string[] {
    return this.states.map((state) => state.mesh.name || state.mesh.type);
  }

  getPassCount(): number {
    if (!this.enabled) return 0;
    return 1 + Number(this.config.outlineEnabled) + Number(this.config.hatchingEnabled) + Number(this.config.paperNoiseEnabled);
  }

  update(): void {
    if (!this.enabled) return;
    this.root.updateMatrixWorld(true);
    this.updateUniforms();
  }
}

export class NPRManager {
  private readonly controllers = new Map<string, NPRRootController>();

  constructor(
    private readonly scene: THREE.Scene,
    private readonly keyLight: THREE.DirectionalLight,
  ) {}

  applyNPRToRoot(root: THREE.Object3D, preset: NPRConfig, options: NPRApplyOptions = {}): NPRRootController {
    this.controllers.get(root.uuid)?.dispose();
    const controller = new NPRRootController(this.scene, root, this.keyLight, preset, options);
    controller.enable();
    this.controllers.set(root.uuid, controller);
    return controller;
  }

  enableNPR(root: THREE.Object3D): void {
    this.controllers.get(root.uuid)?.setEnabled(true);
  }

  disableNPR(root: THREE.Object3D): void {
    this.controllers.get(root.uuid)?.setEnabled(false);
  }

  getController(root: THREE.Object3D): NPRRootController | undefined {
    return this.controllers.get(root.uuid);
  }

  setResolution(width: number, height: number): void {
    this.controllers.forEach((controller) => controller.setResolution(width, height));
  }

  update(): void {
    this.controllers.forEach((controller) => controller.update());
  }

  getManagedMeshCount(): number {
    return [...this.controllers.values()].reduce((total, controller) => total + controller.getManagedMeshCount(), 0);
  }

  getPassCount(): number {
    return [...this.controllers.values()].reduce((total, controller) => total + controller.getPassCount(), 0);
  }
}
