"""Correct ROOT origins/poses after Blender dependency-graph evaluation."""

import json
import math
from pathlib import Path

import bpy
from mathutils import Matrix, Vector, Euler


WORKSPACE = Path(r"D:\portfolio\portfolio")
REPORT_FILE = WORKSPACE / "portfolio_scene_layout_report.json"
FINAL_FILE = WORKSPACE / "portfolio_scene_layout_v1.blend"


def objects_in_collection(collection):
    return list(collection.all_objects)


def mesh_bounds(collection):
    points = []
    for obj in objects_in_collection(collection):
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
        "min_z": min(zs),
        "max_z": max(zs),
        "center": Vector(((min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2, (min(zs) + max(zs)) / 2)),
        "dimensions": [max(xs) - min(xs), max(ys) - min(ys), max(zs) - min(zs)],
    }


def matrix_from_pose(location, rotation):
    return Matrix.Translation(Vector(location)) @ Euler(rotation, "XYZ").to_matrix().to_4x4()


def direct_children(root):
    return [obj for obj in bpy.data.objects if obj.parent == root]


def set_root_pose(root_name, collection_name, target_center, rotation=(0.0, 0.0, 0.0)):
    root = bpy.data.objects[root_name]
    collection = bpy.data.collections[collection_name]
    bounds = mesh_bounds(collection)
    if bounds is None:
        return
    current_center = bounds["center"]
    target_center = Vector(target_center)
    children = direct_children(root)
    old_world = {obj.name: obj.matrix_world.copy() for obj in children}
    move_to_target = Matrix.Translation(target_center - current_center)
    root.matrix_world = matrix_from_pose(target_center, rotation)
    bpy.context.view_layer.update()
    # Keep the already-corrected asset pose, moving only its visual center.
    for obj in children:
        obj.matrix_world = move_to_target @ old_world[obj.name]
    bpy.context.view_layer.update()


def set_group_origin(root_name, collection_name):
    root = bpy.data.objects[root_name]
    collection = bpy.data.collections[collection_name]
    bounds = mesh_bounds(collection)
    if bounds is None:
        return
    children = direct_children(root)
    old_world = {obj.name: obj.matrix_world.copy() for obj in children}
    root.matrix_world = matrix_from_pose(bounds["center"], (0.0, 0.0, 0.0))
    bpy.context.view_layer.update()
    for obj in children:
        obj.matrix_world = old_world[obj.name]
    bpy.context.view_layer.update()


def update_report():
    bpy.context.view_layer.update()
    report = json.loads(REPORT_FILE.read_text(encoding="utf-8"))
    root_names = [
        "ROOT_Workstation", "ROOT_Terminal", "ROOT_PhotoFrame", "ROOT_PersonalInterests",
        "ROOT_Kendo", "ROOT_Palette", "ROOT_Camera", "ROOT_Controller", "ROOT_Globe",
    ]
    report["roots"] = {}
    for name in root_names:
        obj = bpy.data.objects.get(name)
        if obj is None:
            continue
        report["roots"][name] = {
            "location": [round(value, 5) for value in obj.matrix_world.translation],
            "rotation_degrees": [round(math.degrees(value), 4) for value in obj.matrix_world.to_euler("XYZ")],
            "scale": [round(value, 5) for value in obj.scale],
            "parent": obj.parent.name if obj.parent else None,
        }
    for asset in report.get("assets", []):
        collection = bpy.data.collections.get(asset.get("collection"))
        if collection is None:
            continue
        bounds = mesh_bounds(collection)
        if bounds is None:
            continue
        asset["dimensions"] = [round(value, 5) for value in bounds["dimensions"]]
        asset["position"] = [round(value, 5) for value in bounds["center"]]
        root_name = asset.get("root")
        if root_name and "/" not in root_name and bpy.data.objects.get(root_name):
            root = bpy.data.objects[root_name]
            asset["root_location"] = [round(value, 5) for value in root.matrix_world.translation]
            asset["root_scale"] = [round(value, 5) for value in root.scale]
    camera = bpy.data.objects.get("Portfolio_Main_Camera")
    if camera:
        report["camera"].update({
            "location": [round(value, 5) for value in camera.matrix_world.translation],
            "rotation_degrees": [round(math.degrees(value), 4) for value in camera.matrix_world.to_euler("XYZ")],
            "focal_length_mm": camera.data.lens,
        })
    terminal = bpy.data.objects.get("Terminal_Panel")
    if terminal:
        report["terminal_panel"].update({
            "location": [round(value, 5) for value in terminal.matrix_world.translation],
            "rotation_degrees": [round(math.degrees(value), 4) for value in terminal.matrix_world.to_euler("XYZ")],
            "dimensions": [round(value, 5) for value in terminal.dimensions],
        })
    for plinth in report.get("plinths", []):
        obj = bpy.data.objects.get(plinth.get("name"))
        if obj is None:
            continue
        points = [obj.matrix_world @ Vector(corner) for corner in obj.bound_box]
        if points:
            center = sum(points, Vector()) / len(points)
            plinth["location"] = [round(value, 5) for value in center]
            plinth["dimensions"] = [round(value, 5) for value in obj.dimensions]
            plinth["height"] = round(obj.dimensions.z, 5)
    report["checks"]["all_root_scales_unit"] = all(
        all(abs(value - 1.0) < 1e-5 for value in bpy.data.objects[name].scale)
        for name in root_names if bpy.data.objects.get(name)
    )
    report["notes"] = list(report.get("notes", [])) + [
        "ROOT origins were refreshed after dependency-graph evaluation and placed at the visual centers of their controlled assets."
    ]
    report["blend_file"] = str(FINAL_FILE)
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")


def main():
    set_root_pose("ROOT_Workstation", "Workstation_Desk", (-0.45, 0.0, 1.5), (0.0, 0.0, 0.0))
    # Workstation root is a group controller; keep its origin near the desk/monitor cluster.
    workstation_root = bpy.data.objects["ROOT_Workstation"]
    workstation_children = direct_children(workstation_root)
    all_points = []
    for collection_name in ("Workstation_Desk", "Workstation_Monitor"):
        bounds = mesh_bounds(bpy.data.collections[collection_name])
        if bounds:
            all_points.append(bounds["center"])
    if all_points:
        workstation_center = sum(all_points, Vector()) / len(all_points)
        old_world = {obj.name: obj.matrix_world.copy() for obj in workstation_children}
        workstation_root.matrix_world = matrix_from_pose(workstation_center, (0.0, 0.0, 0.0))
        bpy.context.view_layer.update()
        for obj in workstation_children:
            obj.matrix_world = old_world[obj.name]

    set_root_pose("ROOT_PhotoFrame", "Photo_Frame", (-1.05, -0.55, 3.182), (0.0, 0.0, math.radians(-8.0)))
    set_root_pose("ROOT_Kendo", "Kendo_Gear", (2.75, -0.85, 1.24125), (0.0, 0.0, math.radians(-10.0)))
    set_root_pose("ROOT_Palette", "Artist_Palette", (3.05, 0.90, 1.82747), (math.radians(12.0), math.radians(-5.0), math.radians(-10.0)))
    set_root_pose("ROOT_Camera", "Compact_Camera", (4.15, 0.10, 2.22452), (0.0, 0.0, math.radians(18.0)))
    set_root_pose("ROOT_Controller", "Game_Controller", (2.45, 0.15, 0.54134), (math.radians(3.0), math.radians(-8.0), math.radians(-14.0)))
    set_root_pose("ROOT_Globe", "World_Globe", (3.45, 0.25, 1.59), (0.0, 0.0, math.radians(-8.0)))
    set_group_origin("ROOT_PersonalInterests", "Personal_Interests")
    bpy.context.view_layer.update()
    update_report()
    bpy.ops.wm.save_as_mainfile(filepath=str(FINAL_FILE))
    print("PORTFOLIO_ROOT_ORIGINS_FIXED")
    print(json.dumps({
        "camera": [round(value, 4) for value in bpy.data.objects["Portfolio_Main_Camera"].matrix_world.translation],
        "roots": {name: [round(value, 4) for value in bpy.data.objects[name].matrix_world.translation] for name in ["ROOT_PersonalInterests", "ROOT_Kendo", "ROOT_Palette", "ROOT_Camera", "ROOT_Controller", "ROOT_Globe"]},
    }, ensure_ascii=False))


main()
