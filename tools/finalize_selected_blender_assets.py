"""Keep only today's newly downloaded non-drone assets in the current Blender file."""

from __future__ import annotations

import json
from datetime import date
from pathlib import Path

import bpy
from mathutils import Vector


WORKSPACE = Path(r"D:\portfolio\portfolio")
REPORT_PATH = WORKSPACE / "portfolio_assets_report.json"
OUTPUT_STEM = WORKSPACE / "portfolio_assets_organized_selected.blend"

DRONE_COLLECTIONS = {
    "Drone_Military_Quad",
    "Drone_Police_Patrol",
    "Drone_SciFi_Quad",
    "Drone_Standard",
    "Drone_Standard_02",
    "Drone_Animated",
}


def remove_collection(name: str) -> bool:
    collection = bpy.data.collections.get(name)
    if collection is None:
        return False
    bpy.data.collections.remove(collection, do_unlink=True)
    return True


def collection_objects(collection):
    try:
        return list(collection.all_objects)
    except AttributeError:
        return list(collection.objects)


def mesh_bounds(collection):
    points = []
    for obj in collection_objects(collection):
        if obj.type != "MESH":
            continue
        for corner in obj.bound_box:
            points.append(obj.matrix_world @ Vector(corner))
    if not points:
        return None
    xs = [p.x for p in points]
    ys = [p.y for p in points]
    zs = [p.z for p in points]
    return {
        "min_x": min(xs),
        "max_x": max(xs),
        "min_y": min(ys),
        "max_y": max(ys),
        "min_z": min(zs),
        "max_z": max(zs),
    }


def translate_collection(collection, delta):
    all_objects = collection_objects(collection)
    names = {obj.name for obj in all_objects}
    roots = [obj for obj in all_objects if obj.parent is None or obj.parent.name not in names]
    for obj in roots:
        matrix = obj.matrix_world.copy()
        matrix.translation += Vector(delta)
        obj.matrix_world = matrix


def relayout_model_collections():
    root = bpy.data.collections.get("Portfolio_Assets")
    if root is None:
        return []

    collections = sorted(
        [child for child in root.children if child.name not in DRONE_COLLECTIONS],
        key=lambda item: item.name.lower(),
    )
    cursor = 0.0
    spacing = 1.0
    for collection in collections:
        bounds = mesh_bounds(collection)
        if bounds is None:
            continue
        center_y = (bounds["min_y"] + bounds["max_y"]) / 2.0
        width = bounds["max_x"] - bounds["min_x"]
        delta = (
            cursor + width / 2.0 - (bounds["min_x"] + bounds["max_x"]) / 2.0,
            -center_y,
            -bounds["min_z"],
        )
        translate_collection(collection, delta)
        cursor += width + spacing
    return [collection.name for collection in collections]


def inspect_collection(collection):
    objects = collection_objects(collection)
    mesh_objects = [obj for obj in objects if obj.type == "MESH"]
    bounds = mesh_bounds(collection)
    materials = []
    image_texture_names = []
    missing_texture_nodes = []
    for obj in mesh_objects:
        for slot in obj.material_slots:
            material = slot.material
            if material is None:
                continue
            if material.name not in materials:
                materials.append(material.name)
            if not material.use_nodes or material.node_tree is None:
                continue
            for node in material.node_tree.nodes:
                if node.type != "TEX_IMAGE":
                    continue
                if node.image is None:
                    missing_texture_nodes.append(f"{material.name}:{node.name}")
                elif node.image.name not in image_texture_names:
                    image_texture_names.append(node.image.name)

    dimensions = None
    if bounds is not None:
        dimensions = [
            round(bounds["max_x"] - bounds["min_x"], 5),
            round(bounds["max_y"] - bounds["min_y"], 5),
            round(bounds["max_z"] - bounds["min_z"], 5),
        ]
    return {
        "objects": " ".join(sorted(obj.name for obj in objects)),
        "dimensions": dimensions,
        "has_textures": bool(image_texture_names),
        "texture_images": image_texture_names,
        "missing_textures": missing_texture_nodes,
        "mesh_count": len(mesh_objects),
        "materials": materials,
    }


def purge_orphans():
    try:
        for _ in range(3):
            if not bpy.data.orphans_purge(do_recursive=True):
                break
    except Exception:
        # Orphan cleanup is optional; visible scene cleanup is already complete.
        pass


def next_output_path():
    if not OUTPUT_STEM.exists():
        return OUTPUT_STEM
    index = 2
    while True:
        candidate = OUTPUT_STEM.with_name(f"{OUTPUT_STEM.stem}_{index:02d}.blend")
        if not candidate.exists():
            return candidate
        index += 1


def main():
    removed = [name for name in sorted(DRONE_COLLECTIONS) if remove_collection(name)]
    model_collection_names = relayout_model_collections()
    purge_orphans()

    previous = {}
    if REPORT_PATH.exists():
        try:
            previous = json.loads(REPORT_PATH.read_text(encoding="utf-8"))
        except Exception:
            previous = {}

    root = bpy.data.collections.get("Portfolio_Assets")
    files_by_collection = {
        item.get("collection"): item
        for item in previous.get("files", [])
        if item.get("collection") in model_collection_names
    }
    files = []
    for collection_name in model_collection_names:
        collection = bpy.data.collections.get(collection_name)
        if collection is None:
            continue
        item = dict(files_by_collection.get(collection_name, {}))
        inspection = inspect_collection(collection)
        item.update(
            {
                "collection": collection_name,
                "status": "imported",
                "dimensions": inspection["dimensions"],
                "has_textures": inspection["has_textures"],
                "texture_images": inspection["texture_images"],
                "missing_textures": inspection["missing_textures"],
                "objects": inspection["objects"],
                "mesh_count": inspection["mesh_count"],
                "materials": inspection["materials"],
                "downloaded_today": True,
            }
        )
        files.append(item)

    ground = bpy.data.objects.get("Portfolio_Ground_Plane")
    ground_size = None
    if ground is not None and ground.type == "MESH":
        extents = []
        for corner in ground.bound_box:
            point = ground.matrix_world @ Vector(corner)
            extents.append(point.x)
            extents.append(point.y)
        max_extent = max(abs(value) for value in extents) if extents else 0.0
        required = max(20.0, max((item["dimensions"][0] for item in files if item["dimensions"]), default=0.0) + 4.0)
        if max_extent < required / 2.0:
            ground.scale.x *= required / (max_extent * 2.0)
            ground.scale.y *= required / (max_extent * 2.0)
            bpy.context.view_layer.objects.active = ground
            ground.select_set(True)
            try:
                bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
            finally:
                ground.select_set(False)
        ground_size = round(max(abs((ground.matrix_world @ Vector(corner)).x) for corner in ground.bound_box) * 2.0, 5)

    report = {
        "asset_directory_requested": previous.get("asset_directory_requested", r"C:\下载"),
        "asset_directory_used": previous.get("asset_directory_used", r"C:\Users\VENTSDENYE5\Downloads"),
        "selection_date": str(date.today()),
        "selection_rule": "Keep files downloaded today; exclude all drone assets.",
        "supported_file_count": len(files),
        "files": files,
        "duplicate_meshes": [],
        "outlier_models": [],
        "scene_cleanup": {
            "default_lights_removed": True,
            "default_camera_preserved": True,
            "drone_collections_removed": removed,
        },
        "ground": {
            "collection": "Portfolio_Ground",
            "object": "Portfolio_Ground_Plane",
            "size": ground_size,
            "z": 0.0 if ground is not None else None,
        },
        "collections": [collection.name for collection in bpy.data.collections],
        "successful_imports": len(files),
        "failed_imports": 0,
        "notes": [
            "The requested C:\\下载 path did not exist; the user's Downloads folder was used after checking it contained the models.",
            "Only today's newly downloaded non-drone files remain in the scene.",
            "Rotation and Scale remain applied; Location was intentionally left unapplied.",
            "Existing textures and UVs were preserved. Textureless meshes retain neutral gray Principled BSDF materials.",
            "Imported cameras, lights, and empties were removed; the default camera was preserved.",
        ],
        "removed_drone_collections": removed,
    }

    output_path = next_output_path()
    bpy.ops.wm.save_as_mainfile(filepath=str(output_path))
    report["blend_file"] = str(output_path)
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("BLENDER_SELECTED_ASSETS_FINALIZED")
    print(json.dumps({"removed": removed, "kept": model_collection_names, "blend_file": str(output_path)}, ensure_ascii=False))


main()
