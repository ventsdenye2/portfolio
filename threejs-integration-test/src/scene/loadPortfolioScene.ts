import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

export const EXPECTED_ROOTS = [
  "ROOT_PersonalIntro",
  "ROOT_TechStack",
  "ROOT_Projects",
  "ROOT_Creativity",
  "ROOT_MoreInterests",
] as const;

export const EXPECTED_OBJECTS = [
  "Terminal_Panel_A",
  "Terminal_Panel_B",
  "Terminal_Panel_C",
  "Workstation_Desk",
  "Workstation_Monitor",
  "Creativity_Screen",
  "Projects_Screen",
  "Photo_Frame",
  "PersonalIntro_Photo",
  "Kendo_Gear",
  "Compact_Camera",
  "Artist_Palette",
  "Game_Controller",
  "World_Globe",
] as const;

export interface StructureValidation {
  rootChecks: Record<string, {
    found: boolean;
    position?: THREE.Vector3;
    rotation?: THREE.Euler;
    scale?: THREE.Vector3;
    children: number;
  }>;
  objectChecks: Record<string, { found: boolean; parent?: string; children: number }>;
  kendoAggregate: { found: boolean; partCount: number; parent?: string };
  objectCount: number;
  meshCount: number;
  emptyCount: number;
  missingRoots: string[];
  missingObjects: string[];
}

export interface LoadedPortfolioScene {
  scene: THREE.Group;
  structure: StructureValidation;
}

function cloneVector3(value: THREE.Vector3): THREE.Vector3 {
  return value.clone();
}

function cloneEuler(value: THREE.Euler): THREE.Euler {
  return value.clone();
}

export function validatePortfolioStructure(root: THREE.Object3D): StructureValidation {
  const objectByName = new Map<string, THREE.Object3D>();
  const allObjects: THREE.Object3D[] = [];
  let meshCount = 0;
  let emptyCount = 0;

  root.traverse((object) => {
    allObjects.push(object);
    if (object.name && !objectByName.has(object.name)) objectByName.set(object.name, object);
    if ((object as THREE.Mesh).isMesh) meshCount += 1;
    if (object.type === "Object3D" || object.type === "Empty") emptyCount += 1;
  });

  const rootChecks: StructureValidation["rootChecks"] = {};
  for (const name of EXPECTED_ROOTS) {
    const object = objectByName.get(name);
    rootChecks[name] = {
      found: Boolean(object),
      position: object ? cloneVector3(object.position) : undefined,
      rotation: object ? cloneEuler(object.rotation) : undefined,
      scale: object ? cloneVector3(object.scale) : undefined,
      children: object?.children.length ?? 0,
    };
  }

  const objectChecks: StructureValidation["objectChecks"] = {};
  for (const name of EXPECTED_OBJECTS) {
    const object = objectByName.get(name);
    objectChecks[name] = {
      found: Boolean(object),
      parent: object?.parent?.name,
      children: object?.children.length ?? 0,
    };
  }

  const kendoParts = allObjects.filter((object) => object.name.startsWith("Kendo_Gear_Part_"));
  const kendoRoot = objectByName.get("ROOT_Kendo");
  const missingRoots = EXPECTED_ROOTS.filter((name) => !rootChecks[name].found);
  const missingObjects = EXPECTED_OBJECTS.filter((name) => {
    if (name === "Kendo_Gear") return !kendoRoot && kendoParts.length === 0;
    return !objectChecks[name].found;
  });

  return {
    rootChecks,
    objectChecks,
    kendoAggregate: {
      found: Boolean(kendoRoot || kendoParts.length),
      partCount: kendoParts.length,
      parent: kendoRoot?.parent?.name,
    },
    objectCount: allObjects.length,
    meshCount,
    emptyCount,
    missingRoots,
    missingObjects,
  };
}

export async function loadPortfolioScene(url: string): Promise<LoadedPortfolioScene> {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(url);
  const scene = gltf.scene;
  const structure = validatePortfolioStructure(scene);

  console.log("[GLB] gltf.scene", scene);
  console.group("[GLB] Object names");
  scene.traverse((object) => {
    if (object.name) console.log(object.name, object.type, "parent:", object.parent?.name || "—");
  });
  console.groupEnd();

  console.group("[GLB] Structure validation");
  console.table(Object.entries(structure.rootChecks).map(([name, check]) => ({
    name,
    found: check.found,
    children: check.children,
    position: check.position ? check.position.toArray().map((value) => value.toFixed(3)).join(", ") : "—",
  })));
  console.table(Object.entries(structure.objectChecks).map(([name, check]) => ({
    name,
    found: check.found,
    parent: check.parent || "—",
    children: check.children,
  })));
  console.log("Kendo aggregate:", structure.kendoAggregate);
  console.log("Counts:", {
    objects: structure.objectCount,
    meshes: structure.meshCount,
    empties: structure.emptyCount,
  });
  console.groupEnd();

  return { scene, structure };
}
