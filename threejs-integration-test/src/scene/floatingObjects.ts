import * as THREE from "three";

export interface FloatingObjectConfig {
  name: string;
  amplitude: number;
  speed: number;
  phase: number;
  lift?: number;
}

interface FloatingObjectEntry extends FloatingObjectConfig {
  object: THREE.Object3D;
  baseY: number;
}

/** Runtime-only idle motion. It preserves each object's authored X/Z position. */
export class FloatingObjectsController {
  private readonly entries: FloatingObjectEntry[];
  private elapsed = 0;

  constructor(root: THREE.Object3D, configs: readonly FloatingObjectConfig[]) {
    this.entries = configs.flatMap((config) => {
      const object = root.getObjectByName(config.name);
      if (!object) {
        console.warn(`[Float] ${config.name} was not found; idle motion skipped.`);
        return [];
      }
      return [{ ...config, object, baseY: object.position.y + (config.lift ?? 0) }];
    });
  }

  update(deltaSeconds: number): void {
    this.elapsed += Math.min(deltaSeconds, 0.1);
    this.entries.forEach((entry) => {
      entry.object.position.y = entry.baseY
        + Math.sin(this.elapsed * entry.speed + entry.phase) * entry.amplitude;
    });
  }

  getAnimatedNames(): string[] {
    return this.entries.map((entry) => entry.name);
  }
}
