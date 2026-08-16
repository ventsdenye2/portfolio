import * as THREE from "three";

function forEachMaterial(object: THREE.Mesh, callback: (material: THREE.Material) => void): void {
  const materials = Array.isArray(object.material) ? object.material : [object.material];
  materials.forEach(callback);
}

function makeScreenContentMaterial(
  source: THREE.Material,
  texture: THREE.Texture,
  name: string,
): THREE.MeshBasicMaterial {
  const sourceWithAlpha = source as THREE.MeshStandardMaterial;
  const material = new THREE.MeshBasicMaterial({
    name,
    map: texture,
    color: 0xffffff,
    transparent: source.transparent,
    opacity: source.opacity,
    alphaTest: sourceWithAlpha.alphaTest ?? 0,
    side: source.side,
    depthTest: true,
    depthWrite: true,
    toneMapped: false,
  });
  material.userData.isContentMaterial = true;
  return material;
}

/** Replace only the Projects screen map; no object transform or camera state is touched. */
export function setProjectsScreenTexture(root: THREE.Object3D, texture: THREE.Texture): boolean {
  const object = root.getObjectByName("Projects_Screen");
  if (!object || !(object as THREE.Mesh).isMesh) return false;

  const mesh = object as THREE.Mesh;
  mesh.userData.isContentPlane = true;
  mesh.userData.contentPlaneRole = "Projects_Screen";
  const sourceMaterials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  const contentMaterials = sourceMaterials.map((material) => {
    if (material.userData.isContentMaterial && material instanceof THREE.MeshBasicMaterial) {
      material.map = texture;
      material.color.set(0xffffff);
      material.needsUpdate = true;
      return material;
    }
    return makeScreenContentMaterial(material, texture, "MAT_Projects_Screen_Content");
  });
  mesh.material = contentMaterials.length === 1 ? contentMaterials[0] : contentMaterials;
  return true;
}

/** Replace only the Personal Intro photo map; the authored plane transform and UVs stay unchanged. */
export function setPersonalIntroPhotoTexture(root: THREE.Object3D, texture: THREE.Texture): boolean {
  const object = root.getObjectByName("PersonalIntro_Photo");
  if (!object || !(object as THREE.Mesh).isMesh) return false;

  const mesh = object as THREE.Mesh;
  mesh.userData.isContentPlane = true;
  mesh.userData.contentPlaneRole = "PersonalIntro_Photo";
  mesh.castShadow = false;
  mesh.receiveShadow = false;

  const sourceMaterials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  const contentMaterials = sourceMaterials.map((material) => {
    if (material.userData.isContentMaterial && material instanceof THREE.MeshBasicMaterial) {
      material.map = texture;
      material.color.set(0xffffff);
      material.toneMapped = false;
      material.needsUpdate = true;
      return material;
    }
    return makeScreenContentMaterial(material, texture, "MAT_PersonalIntro_Photo");
  });
  mesh.material = contentMaterials.length === 1 ? contentMaterials[0] : contentMaterials;
  return true;
}
