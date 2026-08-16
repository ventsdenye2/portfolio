"""Correct obvious collection-level scale anomalies after import.

This is a conservative post-pass for the two drone FBX assets whose imported
hierarchy retained an unusually elongated world-space bound in Blender 5.2.
It scales the complete hierarchy uniformly, reapplies rotation/scale, relays
all model collections on X, and updates the inspection report. No mesh topology,
UVs, textures, materials, lighting, or camera composition are changed.
"""

from __future__ import annotations

import json
from pathlib import Path

import bpy
from mathutils import Matrix, Vector


TARGET_COLLECTIONS = {"Drone_Standard", "Drone_Animated"}
MODEL_ROOT = "Portfolio_Assets"
GROUND_COLLECTION = "Portfolio_Ground"
REPORT_PATH = Path(r"D:\portfolio\portfolio\portfolio_assets_report.json")
GAP = 1.5


def object_bounds(objects):
    points = []
    for obj in objects:
        if obj.type != "MESH":
            continue
        try:
            points.extend(obj.matrix_world @ Vector(corner) for corner in obj.bound_box)
        except Exception:
            continue
    if not points:
        return None
    return (
        Vector((min(p.x for p in points), min(p.y for p in points), min(p.z for p in points))),
        Vector((max(p.x for p in points), max(p.y for p in points), max(p.z for p in points))),
    )


def collection_objects(collection):
    return [obj for obj in collection.objects if obj.name in bpy.data.objects]


def apply_rotation_scale(objects):
    bpy.ops.object.select_all(action="DESELECT")
    for obj in objects:
        if obj.type in {"CAMERA", "LIGHT", "EMPTY"}:
            continue
        try:
            obj.select_set(True)
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
        except Exception:
            pass
        finally:
            obj.select_set(False)


def normalize_hierarchy(collection, target=4.0):
    objects = collection_objects(collection)
    mesh_objects = [obj for obj in objects if obj.type == "MESH"]
    before = object_bounds(mesh_objects)
    if not before:
        return None
    minimum, maximum = before
    dimensions = maximum - minimum
    max_dim = max(dimensions)
    if max_dim <= 0:
        return None
    factor = target / max_dim
    center = (minimum + maximum) / 2.0

    parents = {obj: obj.parent for obj in objects}
    world_matrices = {obj: obj.matrix_world.copy() for obj in objects}
    # Detach temporarily so parent and child transforms cannot multiply the
    # collection-level correction twice.
    for obj in objects:
        obj.parent = None
        obj.matrix_world = world_matrices[obj]

    scale_transform = Matrix.Translation(center) @ Matrix.Diagonal((factor, factor, factor, 1.0)) @ Matrix.Translation(-center)
    for obj in objects:
        obj.matrix_world = scale_transform @ obj.matrix_world
    corrected_world = {obj: obj.matrix_world.copy() for obj in objects}

    for obj, parent in parents.items():
        if parent and bpy.data.objects.get(parent.name):
            obj.parent = parent
    for obj, matrix in corrected_world.items():
        obj.matrix_world = matrix
    apply_rotation_scale(objects)

    after = object_bounds(mesh_objects)
    return {
        "collection": collection.name,
        "factor": round(factor, 8),
        "before": [round(float(v), 5) for v in dimensions],
        "after": [round(float(v), 5) for v in ((after[1] - after[0]) if after else dimensions)],
    }


def translate_collection(collection, delta):
    objects = collection_objects(collection)
    object_set = set(objects)
    roots = [obj for obj in objects if obj.parent not in object_set]
    if not roots:
        roots = objects
    for root in roots:
        matrix = root.matrix_world.copy()
        matrix.translation += delta
        root.matrix_world = matrix


def relayout_models():
    root = bpy.data.collections.get(MODEL_ROOT)
    if not root:
        return 0.0
    cursor_x = 0.0
    for collection in list(root.children):
        if collection.name == GROUND_COLLECTION:
            continue
        mesh_objects = [obj for obj in collection_objects(collection) if obj.type == "MESH"]
        current = object_bounds(mesh_objects)
        if not current:
            continue
        minimum, maximum = current
        dimensions = maximum - minimum
        width = max(float(dimensions.x), 0.5)
        center_x = (minimum.x + maximum.x) / 2.0
        center_y = (minimum.y + maximum.y) / 2.0
        translate_collection(collection, Vector((cursor_x + width / 2.0 - center_x, -center_y, -minimum.z)))
        cursor_x += width + GAP
    return cursor_x


def resize_ground(cursor_x):
    ground = bpy.data.objects.get("Portfolio_Ground_Plane")
    if not ground or not ground.data:
        return None
    size = max(20.0, cursor_x + 8.0)
    half = size / 2.0
    coordinates = [(-half, -half, 0.0), (half, -half, 0.0), (half, half, 0.0), (-half, half, 0.0)]
    for vertex, coordinate in zip(ground.data.vertices, coordinates):
        vertex.co = coordinate
    ground.location = (max(cursor_x / 2.0, 0.0), 0.0, 0.0)
    return size


def main():
    corrections = []
    for name in sorted(TARGET_COLLECTIONS):
        collection = bpy.data.collections.get(name)
        if collection:
            result = normalize_hierarchy(collection)
            if result:
                corrections.append(result)
    cursor_x = relayout_models()
    ground_size = resize_ground(cursor_x)

    if REPORT_PATH.exists():
        report = json.loads(REPORT_PATH.read_text(encoding="utf-8"))
        by_collection = {item["collection"]: item for item in report.get("files", [])}
        for correction in corrections:
            item = by_collection.get(correction["collection"])
            if item:
                item["dimensions"] = correction["after"]
                item["outlier"] = "Corrected: imported hierarchy had an unusually elongated world-space bound; uniformly normalized."
        report["outlier_models"] = [
            {"collection": c["collection"], "reason": c["outlier"]}
            for c in report.get("files", [])
            if c.get("outlier")
        ]
        report["scale_corrections"] = corrections
        if ground_size is not None:
            report.setdefault("ground", {})["size"] = round(float(ground_size), 4)
        report.setdefault("notes", []).append(
            "Drone_Standard and Drone_Animated were uniformly normalized in a collection-level post-pass because their imported world-space bounds were obviously elongated."
        )
        REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    bpy.ops.wm.save_as_mainfile(filepath=bpy.data.filepath)
    print("BLENDER_ASSET_NORMALIZATION_COMPLETE")
    print(json.dumps({"corrections": corrections, "cursor_x": cursor_x, "ground_size": ground_size}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
