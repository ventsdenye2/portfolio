"""Import and organize the portfolio asset library in the current Blender file.

This script intentionally avoids final composition, lighting, rendering, remeshing,
decimation, or material stylization. It is designed to run inside Blender's Python
console so it operates on the currently open .blend file.
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import struct
from pathlib import Path

import bpy
from mathutils import Matrix, Vector


ASSET_DIR_CANDIDATES = [
    Path(r"C:\下载"),
    Path(r"C:\Downloads"),
    Path(os.environ.get("USERPROFILE", "")) / "Downloads",
]
SUPPORTED_EXTENSIONS = {".glb", ".gltf", ".fbx", ".obj"}
OUTPUT_DIR = Path(r"D:\portfolio\portfolio")
REPORT_PATH = OUTPUT_DIR / "portfolio_assets_report.json"
BLEND_PATH = OUTPUT_DIR / "portfolio_assets_organized.blend"
MODEL_TOP_COLLECTION = "Portfolio_Assets"
GROUND_COLLECTION = "Portfolio_Ground"
GAP = 1.5
DEFAULT_TARGET_SIZE = 4.0


def choose_asset_dir() -> Path:
    for candidate in ASSET_DIR_CANDIDATES:
        if not candidate.is_dir():
            continue
        if any(
            p.is_file() and p.suffix.lower() in SUPPORTED_EXTENSIONS
            for p in candidate.rglob("*")
        ):
            return candidate
    searched = ", ".join(str(p) for p in ASSET_DIR_CANDIDATES)
    raise FileNotFoundError(f"No supported model files found. Searched: {searched}")


def supported_files(asset_dir: Path) -> list[Path]:
    return sorted(
        (
            p
            for p in asset_dir.rglob("*")
            if p.is_file() and p.suffix.lower() in SUPPORTED_EXTENSIONS
        ),
        key=lambda p: str(p).lower(),
    )


def slug(value: str) -> str:
    value = re.sub(r"[^0-9A-Za-z]+", "_", value)
    value = re.sub(r"_+", "_", value).strip("_")
    return value or "Asset"


def content_label(filepath: Path) -> str:
    text = str(filepath).lower()
    name = filepath.stem.lower()
    if "kendo" in text or "armor" in text:
        return "Kendo_Gear"
    if "artist" in text and "palette" in text:
        return "Artist_Palette"
    if "compact camera" in text:
        return "Compact_Camera"
    if "game controller" in text:
        return "Game_Controller"
    if "photo frame" in text:
        return "Photo_Frame"
    if "display monitor" in text or "monitor" in text:
        return "Workstation_Monitor"
    if "clay desk" in text or "desk" in text:
        return "Workstation_Desk"
    if "pedestal" in text:
        return "White_Pedestal"
    if "world globe" in text or "globe" in text:
        return "World_Globe"
    if "free-military-drone" in text:
        return "Drone_Military_Quad"
    if "free-sci-fi-drone" in text:
        return "Drone_SciFi_Quad"
    if "free-police-drone" in text or "patroldrone" in text:
        return "Drone_Police_Patrol"
    if "drone_animated" in text:
        return "Drone_Animated"
    if name == "drone":
        return "Drone_Standard"
    return slug(filepath.stem)


def unique_collection_name(base: str) -> str:
    if bpy.data.collections.get(base) is None:
        return base
    index = 2
    while bpy.data.collections.get(f"{base}_{index:02d}") is not None:
        index += 1
    return f"{base}_{index:02d}"


def remove_collection_tree(collection: bpy.types.Collection) -> None:
    for child in list(collection.children):
        remove_collection_tree(child)
    for obj in list(collection.objects):
        bpy.data.objects.remove(obj, do_unlink=True)
    bpy.data.collections.remove(collection)


def make_collection(name: str, parent: bpy.types.Collection | None = None) -> bpy.types.Collection:
    collection = bpy.data.collections.new(name)
    (parent or bpy.context.scene.collection).children.link(collection)
    return collection


def move_to_collection(obj: bpy.types.Object, collection: bpy.types.Collection) -> None:
    for old_collection in list(obj.users_collection):
        old_collection.objects.unlink(obj)
    collection.objects.link(obj)


def bounds(objects: list[bpy.types.Object]) -> tuple[Vector, Vector] | None:
    points: list[Vector] = []
    for obj in objects:
        if not hasattr(obj, "bound_box"):
            continue
        try:
            points.extend(obj.matrix_world @ Vector(corner) for corner in obj.bound_box)
        except Exception:
            continue
    if not points:
        return None
    minimum = Vector((
        min(point.x for point in points),
        min(point.y for point in points),
        min(point.z for point in points),
    ))
    maximum = Vector((
        max(point.x for point in points),
        max(point.y for point in points),
        max(point.z for point in points),
    ))
    return minimum, maximum


def apply_rotation_and_scale(objects: list[bpy.types.Object]) -> None:
    bpy.ops.object.select_all(action="DESELECT")
    for obj in objects:
        if obj.type in {"CAMERA", "LIGHT", "EMPTY"}:
            continue
        if obj.name not in bpy.data.objects:
            continue
        try:
            obj.select_set(True)
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
        except Exception:
            pass
        finally:
            obj.select_set(False)


def translate_group(objects: list[bpy.types.Object], delta: Vector) -> None:
    imported_set = set(objects)
    roots = [obj for obj in objects if obj.parent not in imported_set]
    if not roots:
        roots = objects
    for root in roots:
        matrix = root.matrix_world.copy()
        matrix.translation += delta
        root.matrix_world = matrix


def scale_group(objects: list[bpy.types.Object], factor: float, center: Vector) -> None:
    """Scale a whole imported hierarchy in world space about its bounds center."""
    imported_set = set(objects)
    roots = [obj for obj in objects if obj.parent not in imported_set]
    if not roots:
        roots = objects
    transform = Matrix.Translation(center) @ Matrix.Diagonal((factor, factor, factor, 1.0)) @ Matrix.Translation(-center)
    for root in roots:
        root.matrix_world = transform @ root.matrix_world


def generic_name(name: str) -> bool:
    return bool(
        re.match(
            r"^(object|mesh|model|node|root|empty|armature|cube|plane|sphere|cylinder|camera|light)(\.\d+)?$",
            name.strip().lower(),
        )
    )


def rename_objects(objects: list[bpy.types.Object], collection_name: str) -> None:
    mesh_index = 1
    other_index = 1
    for obj in objects:
        old_name = obj.name
        if generic_name(old_name) or "." in old_name:
            if obj.type == "MESH":
                obj.name = f"{collection_name}_Mesh_{mesh_index:02d}"
                mesh_index += 1
            elif obj.type == "ARMATURE":
                obj.name = f"{collection_name}_Rig_{other_index:02d}"
                other_index += 1
            else:
                obj.name = f"{collection_name}_{obj.type.title()}_{other_index:02d}"
                other_index += 1
        if obj.type == "MESH" and obj.data:
            if generic_name(obj.data.name) or "." in obj.data.name:
                obj.data.name = f"{obj.name}_Mesh"


def neutral_material(name: str) -> bpy.types.Material:
    material = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    material.use_nodes = True
    nodes = material.node_tree.nodes
    principled = nodes.get("Principled BSDF")
    if principled is not None:
        base_color = principled.inputs.get("Base Color")
        roughness = principled.inputs.get("Roughness")
        metallic = principled.inputs.get("Metallic")
        if base_color:
            base_color.default_value = (0.48, 0.48, 0.48, 1.0)
        if roughness:
            roughness.default_value = 0.62
        if metallic:
            metallic.default_value = 0.0
    return material


def material_texture_info(material: bpy.types.Material) -> tuple[bool, list[str], list[bpy.types.Image]]:
    has_texture = False
    missing: list[str] = []
    images: list[bpy.types.Image] = []
    if not material or not material.use_nodes or not material.node_tree:
        return False, missing, images
    for node in material.node_tree.nodes:
        if node.type != "TEX_IMAGE" or not node.image:
            continue
        has_texture = True
        image = node.image
        images.append(image)
        if image.packed_file:
            continue
        filepath = bpy.path.abspath(image.filepath)
        if filepath and not Path(filepath).exists():
            missing.append(filepath)
    return has_texture, missing, images


def organize_materials(objects: list[bpy.types.Object], collection_name: str) -> dict:
    mesh_objects = [obj for obj in objects if obj.type == "MESH" and obj.data]
    all_has_texture = False
    missing_textures: list[str] = []
    renamed_images: set[str] = set()
    material_count = 0
    for obj in mesh_objects:
        materials = [material for material in obj.data.materials if material]
        object_has_texture = False
        for material in materials:
            has_texture, missing, images = material_texture_info(material)
            object_has_texture |= has_texture
            all_has_texture |= has_texture
            missing_textures.extend(missing)
            for image in images:
                if generic_name(image.name) or "." in image.name:
                    new_name = f"{collection_name}_Texture_{len(renamed_images) + 1:02d}"
                    image.name = new_name
                    renamed_images.add(new_name)
        if not object_has_texture:
            gray = neutral_material(f"{collection_name}_NeutralGray_Material")
            obj.data.materials.clear()
            obj.data.materials.append(gray)
            material_count += 1
        else:
            for index, material in enumerate(materials, start=1):
                if generic_name(material.name) or "." in material.name:
                    material.name = f"{obj.name}_Material_{index:02d}"
                material_count += 1
    return {
        "has_textures": all_has_texture,
        "missing_textures": sorted(set(missing_textures)),
        "renamed_texture_count": len(renamed_images),
        "material_count": material_count,
    }


def mesh_signature(mesh: bpy.types.Mesh) -> str:
    digest = hashlib.sha1()
    digest.update(struct.pack("<II", len(mesh.vertices), len(mesh.polygons)))
    for vertex in mesh.vertices:
        digest.update(
            struct.pack(
                "<3d",
                round(float(vertex.co.x), 5),
                round(float(vertex.co.y), 5),
                round(float(vertex.co.z), 5),
            )
        )
    for polygon in mesh.polygons:
        digest.update(struct.pack("<I", len(polygon.vertices)))
        for index in polygon.vertices:
            digest.update(struct.pack("<I", int(index)))
    return digest.hexdigest()


def create_ground(size: float, center_x: float) -> bpy.types.Object:
    old = bpy.data.collections.get(GROUND_COLLECTION)
    if old:
        remove_collection_tree(old)
    collection = make_collection(GROUND_COLLECTION)
    half = size / 2.0
    mesh = bpy.data.meshes.new("Portfolio_Ground_Mesh")
    mesh.from_pydata(
        [(-half, -half, 0.0), (half, -half, 0.0), (half, half, 0.0), (-half, half, 0.0)],
        [],
        [(0, 1, 2, 3)],
    )
    mesh.update()
    plane = bpy.data.objects.new("Portfolio_Ground_Plane", mesh)
    collection.objects.link(plane)
    plane.location = (center_x, 0.0, 0.0)
    material = neutral_material("Portfolio_Ground_NeutralGray_Material")
    mesh.materials.append(material)
    return plane


def import_file(filepath: Path, collection: bpy.types.Collection) -> tuple[list[bpy.types.Object], str | None]:
    before = set(bpy.data.objects)
    try:
        ext = filepath.suffix.lower()
        if ext in {".glb", ".gltf"}:
            bpy.ops.import_scene.gltf(filepath=str(filepath))
        elif ext == ".fbx":
            bpy.ops.import_scene.fbx(filepath=str(filepath), automatic_bone_orientation=False)
        elif ext == ".obj":
            if hasattr(bpy.ops.wm, "obj_import"):
                bpy.ops.wm.obj_import(filepath=str(filepath), forward_axis="NEGATIVE_Z", up_axis="Y")
            else:
                bpy.ops.import_scene.obj(filepath=str(filepath), axis_forward="-Z", axis_up="Y")
        else:
            return [], f"Unsupported extension: {ext}"
    except Exception as exc:
        return [], repr(exc)
    imported = [obj for obj in bpy.data.objects if obj not in before]
    for obj in imported:
        move_to_collection(obj, collection)
    return imported, None


def remove_imported_non_assets(objects: list[bpy.types.Object]) -> dict[str, int]:
    deleted = {"cameras": 0, "lights": 0, "empties": 0}
    for obj in list(objects):
        if obj.name not in bpy.data.objects:
            continue
        if obj.type == "CAMERA":
            deleted["cameras"] += 1
            bpy.data.objects.remove(obj, do_unlink=True)
        elif obj.type == "LIGHT":
            deleted["lights"] += 1
            bpy.data.objects.remove(obj, do_unlink=True)
        elif obj.type == "EMPTY":
            deleted["empties"] += 1
            bpy.data.objects.remove(obj, do_unlink=True)
    return deleted


def next_available(path: Path) -> Path:
    if not path.exists():
        return path
    for index in range(2, 1000):
        candidate = path.with_name(f"{path.stem}_{index:02d}{path.suffix}")
        if not candidate.exists():
            return candidate
    raise RuntimeError(f"Could not find available output path for {path}")


def main() -> dict:
    asset_dir = choose_asset_dir()
    files = supported_files(asset_dir)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    old_assets = bpy.data.collections.get(MODEL_TOP_COLLECTION)
    if old_assets:
        remove_collection_tree(old_assets)
    model_root = make_collection(MODEL_TOP_COLLECTION)

    # The open file is the default Blender scene. Remove its default cube and
    # light while preserving the default camera for later composition work.
    for obj in list(bpy.data.objects):
        if obj.type == "LIGHT" or obj.name == "Cube":
            bpy.data.objects.remove(obj, do_unlink=True)

    report = {
        "asset_directory_requested": r"C:\下载",
        "asset_directory_used": str(asset_dir),
        "supported_file_count": len(files),
        "files": [],
        "duplicate_meshes": [],
        "outlier_models": [],
        "scene_cleanup": {"default_lights_removed": True, "default_camera_preserved": True},
    }
    mesh_signatures: dict[str, list[str]] = {}
    cursor_x = 0.0
    max_model_width = 0.0

    for filepath in files:
        label = content_label(filepath)
        collection_name = unique_collection_name(label)
        collection = make_collection(collection_name, model_root)
        entry = {
            "source_file": str(filepath),
            "collection": collection_name,
            "format": filepath.suffix.lower()[1:],
            "status": "failed",
            "objects": [],
            "source_dimensions": None,
            "dimensions": None,
            "has_textures": False,
            "missing_textures": [],
            "deleted_imported_objects": {"cameras": 0, "lights": 0, "empties": 0},
            "outlier": None,
            "error": None,
        }
        imported, error = import_file(filepath, collection)
        if error:
            entry["error"] = error
            report["files"].append(entry)
            continue
        deleted = remove_imported_non_assets(imported)
        alive_imported = []
        for obj in imported:
            try:
                if obj.name in bpy.data.objects:
                    alive_imported.append(obj)
            except ReferenceError:
                # The importer may have returned a camera/light/empty that was
                # just removed by the cleanup pass.
                continue
        imported = alive_imported
        entry["deleted_imported_objects"] = deleted
        entry["objects"] = [obj.name for obj in imported]
        if not imported:
            entry["error"] = "Importer produced no objects"
            report["files"].append(entry)
            continue

        rename_objects(imported, collection_name)
        source_bounds = bounds([obj for obj in imported if obj.type in {"MESH", "CURVE", "SURFACE", "FONT", "ARMATURE"}])
        if source_bounds:
            source_min, source_max = source_bounds
            source_dimensions = source_max - source_min
            entry["source_dimensions"] = [round(float(v), 5) for v in source_dimensions]
            source_max_dim = max(source_dimensions)
            if source_max_dim > 1000.0 or (0.0 < source_max_dim < 0.001):
                entry["outlier"] = f"Source max dimension {source_max_dim:.6g} Blender units"
                report["outlier_models"].append({"collection": collection_name, "reason": entry["outlier"]})

        apply_rotation_and_scale(imported)
        after_apply_bounds = bounds([obj for obj in imported if obj.type in {"MESH", "CURVE", "SURFACE", "FONT", "ARMATURE"}])
        if after_apply_bounds:
            minimum, maximum = after_apply_bounds
            dimensions = maximum - minimum
            max_dim = max(dimensions)
            target = 6.0 if "Desk" in collection_name else DEFAULT_TARGET_SIZE
            if max_dim > 0.0:
                uniform_scale = target / max_dim
                scale_group(imported, uniform_scale, (minimum + maximum) / 2.0)
                apply_rotation_and_scale(imported)

        final_bounds = bounds([obj for obj in imported if obj.type in {"MESH", "CURVE", "SURFACE", "FONT", "ARMATURE"}])
        if final_bounds:
            minimum, maximum = final_bounds
            dimensions = maximum - minimum
            width = max(float(dimensions.x), 0.5)
            center_x = (minimum.x + maximum.x) / 2.0
            center_y = (minimum.y + maximum.y) / 2.0
            delta = Vector((cursor_x + width / 2.0 - center_x, -center_y, -minimum.z))
            translate_group(imported, delta)
            final_bounds = bounds([obj for obj in imported if obj.type in {"MESH", "CURVE", "SURFACE", "FONT", "ARMATURE"}])
            if final_bounds:
                minimum, maximum = final_bounds
                dimensions = maximum - minimum
                entry["dimensions"] = [round(float(v), 5) for v in dimensions]
                max_model_width = max(max_model_width, float(dimensions.x))
                cursor_x += width + GAP

        material_info = organize_materials(imported, collection_name)
        entry.update({key: value for key, value in material_info.items() if key in {"has_textures", "missing_textures"}})
        entry["status"] = "imported"

        for obj in imported:
            if obj.type != "MESH" or not obj.data:
                continue
            signature = mesh_signature(obj.data)
            mesh_signatures.setdefault(signature, []).append(f"{collection_name}:{obj.name}")

        report["files"].append(entry)

    for signature, names in mesh_signatures.items():
        if len(names) > 1:
            report["duplicate_meshes"].append({"signature": signature, "objects": names})

    ground_size = max(20.0, cursor_x + 8.0)
    create_ground(ground_size, max(cursor_x / 2.0, 0.0))
    report["ground"] = {
        "collection": GROUND_COLLECTION,
        "object": "Portfolio_Ground_Plane",
        "size": round(ground_size, 4),
        "z": 0.0,
    }
    report["collections"] = [
        MODEL_TOP_COLLECTION,
        *sorted(child.name for child in model_root.children),
        GROUND_COLLECTION,
    ]
    report["successful_imports"] = sum(1 for item in report["files"] if item["status"] == "imported")
    report["failed_imports"] = sum(1 for item in report["files"] if item["status"] != "imported")
    report["notes"] = [
        "Importer axis conversion used for FBX/OBJ; no additional rotation correction was needed by the conservative pass.",
        "Rotation and Scale were applied; Location was intentionally left unapplied.",
        "Existing model textures and UVs were preserved. Textureless meshes received a neutral gray Principled BSDF material.",
        "Imported cameras, lights, and empties were deleted. The default camera was preserved.",
    ]

    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    blend_path = next_available(BLEND_PATH)
    bpy.ops.wm.save_as_mainfile(filepath=str(blend_path))
    report["blend_file"] = str(blend_path)
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("BLENDER_ASSET_ORGANIZATION_COMPLETE")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return report


if __name__ == "__main__":
    main()
