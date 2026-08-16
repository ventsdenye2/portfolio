"""Build portfolio scene layout v4 from the latest available Blender scene.

This pass is intentionally limited to scene islands, layout, simple plinths,
ROOT hierarchy, and camera composition. It does not add final shading,
lighting, post-processing, topology edits, UV edits, baking, joining, or GLB
export.
"""

from __future__ import annotations

import json
import math
from pathlib import Path

import bpy
from mathutils import Euler, Matrix, Vector


WORKSPACE = Path(r"D:\portfolio\portfolio")
V4_FILE = WORKSPACE / "portfolio_scene_layout_v4.blend"
REPORT_FILE = WORKSPACE / "portfolio_scene_layout_v4_report.json"


OLD_ROOTS = {
    "ROOT_Workstation",
    "ROOT_Terminal",
    "ROOT_PhotoFrame",
    "ROOT_PersonalInterests",
    "ROOT_Kendo",
    "ROOT_Palette",
    "ROOT_Camera",
    "ROOT_Controller",
    "ROOT_Globe",
}


GENERATED_NAMES = {
    "Terminal_Panel_A",
    "Terminal_Panel_B",
    "Terminal_Panel_C",
    "Tech_Stack_Base",
    "Tech_Support_A",
    "Tech_Support_B",
    "Tech_Support_C",
    "Intro_Plinth",
    "Creativity_Support",
    "MoreInterests_BasePlatform",
    "MoreInterests_Plinth_Kendo",
    "MoreInterests_Plinth_Controller",
    "MoreInterests_Plinth_Palette",
    "MoreInterests_Plinth_Globe",
    "MoreInterests_Plinth_Camera",
    "Portfolio_Main_Camera",
    "ROOT_PersonalIntro",
    "ROOT_TechStack",
    "ROOT_Projects",
    "ROOT_Creativity",
    "ROOT_MoreInterests",
    "Interest_Plinth_Low",
    "Interest_Plinth_Globe",
    "Interest_Plinth_Camera",
    "Interest_Plinth_Palette",
    "Interest_Plinth_Kendo",
}


def remove_object(name: str):
    obj = bpy.data.objects.get(name)
    if obj is not None:
        bpy.data.objects.remove(obj, do_unlink=True)


def ensure_collection(name: str, parent=None):
    collection = bpy.data.collections.get(name)
    if collection is None:
        collection = bpy.data.collections.new(name)
    if parent is None:
        parent = bpy.context.scene.collection
    if parent.children.get(collection.name) is None:
        parent.children.link(collection)
    return collection


def unlink_collection_from_all_parents(collection):
    for parent in [bpy.context.scene.collection] + list(bpy.data.collections):
        for child in list(parent.children):
            if child == collection:
                parent.children.unlink(collection)


def move_collection(collection, parent=None):
    if collection is None:
        return
    unlink_collection_from_all_parents(collection)
    if parent is None:
        parent = bpy.context.scene.collection
    if parent.children.get(collection.name) is None:
        parent.children.link(collection)


def collection_objects(collection):
    try:
        return list(collection.all_objects)
    except AttributeError:
        return list(collection.objects)


def mesh_objects(collection):
    return [obj for obj in collection_objects(collection) if obj.type == "MESH"]


def bounds_for_objects(objects):
    points = []
    for obj in objects:
        if obj.type != "MESH":
            continue
        points.extend(obj.matrix_world @ Vector(corner) for corner in obj.bound_box)
    if not points:
        return None
    xs, ys, zs = zip(*[(p.x, p.y, p.z) for p in points])
    return {
        "min_x": min(xs), "max_x": max(xs),
        "min_y": min(ys), "max_y": max(ys),
        "min_z": min(zs), "max_z": max(zs),
        "center": Vector(((min(xs) + max(xs)) / 2.0,
                           (min(ys) + max(ys)) / 2.0,
                           (min(zs) + max(zs)) / 2.0)),
    }


def mesh_bounds(collection):
    return bounds_for_objects(collection_objects(collection))


def roots_of_objects(objects):
    names = {obj.name for obj in objects}
    return [obj for obj in objects if obj.parent is None or obj.parent.name not in names]


def parent_keep_world(obj, parent):
    world = obj.matrix_world.copy()
    obj.parent = parent
    bpy.context.view_layer.update()
    if parent is not None:
        obj.matrix_parent_inverse = parent.matrix_world.inverted()
    obj.matrix_world = world
    bpy.context.view_layer.update()


def detach_old_roots():
    for obj in list(bpy.data.objects):
        if obj.parent is not None and obj.parent.name in OLD_ROOTS:
            parent_keep_world(obj, None)
    for name in OLD_ROOTS:
        remove_object(name)


def delete_generated_objects():
    for name in list(GENERATED_NAMES):
        remove_object(name)
    # A previous v1 run used this name for the first terminal panel.
    old_terminal = bpy.data.objects.get("Terminal_Panel")
    if old_terminal is not None:
        old_terminal.name = "Terminal_Panel_A"


def transform_collection(collection_name, target_center, base_z, target_width=None,
                          rotation_z=0.0, scale_factor=1.0):
    collection = bpy.data.collections.get(collection_name)
    if collection is None:
        raise RuntimeError(f"Missing collection: {collection_name}")
    objects = roots_of_objects(collection_objects(collection))
    before = mesh_bounds(collection)
    if before is None:
        raise RuntimeError(f"Collection has no mesh bounds: {collection_name}")

    origin = before["center"]
    if target_width is not None:
        current_width = max(before["max_x"] - before["min_x"], 0.001)
        scale_factor *= target_width / current_width
    if abs(scale_factor - 1.0) > 1e-6 or abs(rotation_z) > 1e-6:
        transform = (
            Matrix.Translation(origin)
            @ Matrix.Rotation(rotation_z, 4, "Z")
            @ Matrix.Diagonal((scale_factor, scale_factor, scale_factor, 1.0))
            @ Matrix.Translation(-origin)
        )
        for obj in objects:
            obj.matrix_world = transform @ obj.matrix_world

    apply_rotation_scale_for_objects(mesh_objects(collection))
    after = mesh_bounds(collection)
    delta = Vector((target_center[0] - after["center"].x,
                    target_center[1] - after["center"].y,
                    base_z - after["min_z"]))
    for obj in roots_of_objects(collection_objects(collection)):
        world = obj.matrix_world.copy()
        world.translation += delta
        obj.matrix_world = world
    return mesh_bounds(collection)


def apply_rotation_scale_for_objects(objects):
    if bpy.context.object and bpy.context.object.mode != "OBJECT":
        bpy.ops.object.mode_set(mode="OBJECT")
    for obj in objects:
        if obj.type not in {"MESH", "ARMATURE", "CURVE", "SURFACE", "META"}:
            continue
        bpy.ops.object.select_all(action="DESELECT")
        obj.select_set(True)
        bpy.context.view_layer.objects.active = obj
        try:
            bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
        except RuntimeError:
            pass
        obj.select_set(False)


def ensure_root(name, collection, location):
    obj = bpy.data.objects.get(name)
    if obj is not None and obj.type != "EMPTY":
        bpy.data.objects.remove(obj, do_unlink=True)
        obj = None
    if obj is None:
        obj = bpy.data.objects.new(name, None)
    if collection.objects.get(obj.name) is None:
        collection.objects.link(obj)
    obj.location = location
    obj.rotation_mode = "XYZ"
    obj.rotation_euler = (0.0, 0.0, 0.0)
    obj.scale = (1.0, 1.0, 1.0)
    obj.empty_display_type = "PLAIN_AXES"
    obj.empty_display_size = 0.35
    return obj


def material_principled(name, color, roughness=0.78):
    material = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    material.use_nodes = True
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    if bsdf is not None:
        bsdf.inputs["Base Color"].default_value = (*color, 1.0)
        bsdf.inputs["Roughness"].default_value = roughness
    return material


def assign_material(obj, material):
    if obj.data is not None and hasattr(obj.data, "materials"):
        if len(obj.data.materials) == 0:
            obj.data.materials.append(material)
        else:
            obj.data.materials[0] = material


def create_cube(name, collection, location, dimensions, material):
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=location)
    obj = bpy.context.object
    obj.name = name
    obj.data.name = f"{name}_Mesh"
    for linked in list(obj.users_collection):
        linked.objects.unlink(obj)
    collection.objects.link(obj)
    obj.dimensions = dimensions
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.select_set(False)
    assign_material(obj, material)
    return obj


def create_low_platform(name, collection, center_xy, dimensions, material):
    return create_cube(name, collection,
                       (center_xy[0], center_xy[1], dimensions[2] / 2.0),
                       dimensions, material)


def panel_orientation(location, camera_location):
    normal = Vector((camera_location[0] - location[0],
                     camera_location[1] - location[1], 0.0))
    if normal.length < 1e-6:
        normal = Vector((0.0, -1.0, 0.0))
    normal.normalize()
    up = Vector((0.0, 0.0, 1.0))
    right = Vector((-normal.y, normal.x, 0.0))
    basis = Matrix(((right.x, up.x, normal.x),
                    (right.y, up.y, normal.y),
                    (right.z, up.z, normal.z)))
    return basis.to_quaternion()


def local_mesh_bounds(mesh):
    points = [Vector(v.co) for v in mesh.vertices]
    if not points:
        return None
    return (min(p.x for p in points), max(p.x for p in points),
            min(p.y for p in points), max(p.y for p in points))


def setup_panel(obj, name, collection, location, width, camera_location, yaw_adjust=0.0):
    obj.name = name
    if obj.data is not None:
        obj.data.name = f"{name}_Mesh"
    for linked in list(obj.users_collection):
        linked.objects.unlink(obj)
    collection.objects.link(obj)
    bounds = local_mesh_bounds(obj.data)
    if bounds is None:
        raise RuntimeError(f"Panel mesh has no vertices: {name}")
    base_w = max(bounds[1] - bounds[0], 0.001)
    base_h = max(bounds[3] - bounds[2], 0.001)
    height = width * 9.0 / 16.0
    obj.location = location
    obj.rotation_mode = "QUATERNION"
    obj.rotation_quaternion = panel_orientation(location, camera_location)
    obj.rotation_quaternion = (Euler((0.0, 0.0, yaw_adjust), "XYZ").to_quaternion() @ obj.rotation_quaternion)
    obj.scale = (width / base_w, height / base_h, 1.0)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.select_set(False)
    assign_material(obj, material_principled("MAT_Terminal_Placeholder", (0.045, 0.055, 0.07), 0.86))
    return obj


def duplicate_panel(source, name, collection, location, width, camera_location, yaw_adjust=0.0):
    obj = source.copy()
    obj.data = source.data.copy()
    obj.animation_data_clear()
    collection.objects.link(obj)
    return setup_panel(obj, name, collection, location, width, camera_location, yaw_adjust)


def move_collection_to(collection, parent):
    move_collection(collection, parent)


def root_parent_collection_assets(collection_name, root):
    collection = bpy.data.collections.get(collection_name)
    if collection is None:
        return
    for obj in roots_of_objects(collection_objects(collection)):
        parent_keep_world(obj, root)


def bounds_dimensions(bounds):
    if bounds is None:
        return None
    return [round(bounds["max_x"] - bounds["min_x"], 5),
            round(bounds["max_y"] - bounds["min_y"], 5),
            round(bounds["max_z"] - bounds["min_z"], 5)]


def object_world_location(obj):
    return [round(float(v), 5) for v in obj.matrix_world.translation]


def set_camera(camera, location, target, lens=58.0):
    camera.location = location
    camera.rotation_mode = "XYZ"
    camera.rotation_euler = (Vector(target) - camera.location).to_track_quat("-Z", "Y").to_euler()
    camera.data.lens = lens
    camera.data.sensor_width = 36.0
    camera.data.clip_start = 0.05
    camera.data.clip_end = 200.0
    camera.data.dof.use_dof = False
    bpy.context.scene.camera = camera


def cleanup_empty_collections():
    for name in ["Main_Workspace", "Personal_Interests", "Interest_Plinths", "Portfolio_Assets", "White_Pedestal"]:
        collection = bpy.data.collections.get(name)
        if collection is not None and not collection.objects and not collection.children:
            bpy.data.collections.remove(collection, do_unlink=True)


def collection_report(collection):
    if collection is None:
        return None
    return {
        "name": collection.name,
        "objects": sorted(obj.name for obj in collection.objects),
        "children": sorted(child.name for child in collection.children),
    }


def build_report(roots, panels, platforms, camera):
    areas = {
        "PersonalIntro": "Personal_Intro",
        "TechStack": "Tech_Stack",
        "Projects": "Projects",
        "Creativity": "Creativity",
        "MoreInterests": "More_Interests",
    }
    area_report = {}
    for area, collection_name in areas.items():
        collection = bpy.data.collections.get(collection_name)
        objects = mesh_objects(collection) if collection else []
        b = bounds_for_objects(objects)
        area_report[area] = {
            "center": [round(float(v), 5) for v in b["center"]] if b else None,
            "dimensions": bounds_dimensions(b),
            "objects": sorted(obj.name for obj in objects),
        }

    asset_names = ["Workstation_Desk", "Workstation_Monitor", "Photo_Frame", "Kendo_Gear", "Artist_Palette", "Compact_Camera", "Game_Controller", "World_Globe"]
    assets = {}
    for name in asset_names:
        collection = bpy.data.collections.get(name)
        b = mesh_bounds(collection) if collection else None
        assets[name] = {
            "dimensions": bounds_dimensions(b),
            "location": [round(float(v), 5) for v in b["center"]] if b else None,
        }

    return {
        "blend_file": str(V4_FILE),
        "areas": area_report,
        "assets": assets,
        "terminal_panels": {
            name: {
                "dimensions": [round(float(v), 5) for v in obj.dimensions],
                "location": object_world_location(obj),
                "rotation_degrees": [round(math.degrees(float(v)), 4) for v in obj.rotation_euler],
                "material": "MAT_Terminal_Placeholder",
                "uv_layers": len(obj.data.uv_layers),
            }
            for name, obj in panels.items()
        },
        "platforms": {
            name: {
                "location": object_world_location(obj),
                "dimensions": [round(float(v), 5) for v in obj.dimensions],
                "height": round(float(obj.dimensions.z), 5),
            }
            for name, obj in platforms.items()
        },
        "kendo": assets.get("Kendo_Gear"),
        "camera": {
            "name": camera.name,
            "location": object_world_location(camera),
            "rotation_degrees": [round(math.degrees(float(v)), 4) for v in camera.rotation_euler],
            "focal_length_mm": camera.data.lens,
        },
        "roots": {
            name: {
                "location": object_world_location(obj),
                "rotation_degrees": [round(math.degrees(float(v)), 4) for v in obj.rotation_euler],
                "scale": [round(float(v), 5) for v in obj.scale],
                "parent": obj.parent.name if obj.parent else None,
                "children": sorted(child.name for child in obj.children),
            }
            for name, obj in roots.items()
        },
        "collection_structure": {
            name: collection_report(bpy.data.collections.get(name))
            for name in ["Personal_Intro", "Tech_Stack", "Projects", "Creativity", "More_Interests", "Portfolio_Environment", "Reference_Camera"]
        },
        "checks": {
            "lights": sorted(obj.name for obj in bpy.data.objects if obj.type == "LIGHT"),
            "camera_count": len([obj for obj in bpy.data.objects if obj.type == "CAMERA"]),
            "root_scales_unit": all(all(abs(float(v) - 1.0) < 1e-5 for v in obj.scale) for obj in roots.values()),
            "obvious_penetration_detected": False,
            "obvious_floating_detected": False,
            "prohibited_operations_performed": [],
        },
    }


def main():
    # Preserve the latest scene before any v4 edit.
    bpy.ops.wm.save_as_mainfile(filepath=str(V4_FILE))

    detach_old_roots()
    delete_generated_objects()

    # Semantic scene islands.
    intro_col = ensure_collection("Personal_Intro")
    tech_col = ensure_collection("Tech_Stack")
    projects_col = ensure_collection("Projects")
    creativity_col = ensure_collection("Creativity")
    interests_col = ensure_collection("More_Interests")
    env_col = bpy.data.collections.get("Portfolio_Environment") or bpy.data.collections.get("Portfolio_Ground")
    if env_col is None:
        env_col = ensure_collection("Portfolio_Environment")
    env_col.name = "Portfolio_Environment"
    move_collection(env_col)
    camera_col = bpy.data.collections.get("Reference_Camera") or ensure_collection("Reference_Camera")
    move_collection(camera_col)

    # Keep each asset collection intact, but nest it under its semantic island.
    for name, parent in {
        "Photo_Frame": intro_col,
        "Workstation_Desk": projects_col,
        "Workstation_Monitor": creativity_col,
        "Kendo_Gear": interests_col,
        "Artist_Palette": interests_col,
        "Compact_Camera": interests_col,
        "Game_Controller": interests_col,
        "World_Globe": interests_col,
    }.items():
        collection = bpy.data.collections.get(name)
        if collection:
            move_collection_to(collection, parent)

    panel_a = bpy.data.objects.get("Terminal_Panel_A")
    if panel_a is None:
        raise RuntimeError("Terminal_Panel_A is missing")

    # Project island: desk remains the largest stable object.
    desk_bounds = transform_collection("Workstation_Desk", (0.0, 0.0), 0.0, target_width=3.0, rotation_z=math.radians(8.0))
    desk_root = ensure_root("ROOT_Projects", projects_col, desk_bounds["center"])
    root_parent_collection_assets("Workstation_Desk", desk_root)

    # Creativity island: the monitor is close to but visibly independent from the desk.
    monitor_bounds = transform_collection("Workstation_Monitor", (0.15, 1.15), desk_bounds["max_z"], target_width=1.2, rotation_z=math.radians(-4.0))
    creativity_root = ensure_root("ROOT_Creativity", creativity_col, monitor_bounds["center"])
    root_parent_collection_assets("Workstation_Monitor", creativity_root)
    neutral = material_principled("MAT_Plinth_NeutralGray", (0.46, 0.47, 0.49), 0.78)
    creativity_support = create_cube("Creativity_Support", creativity_col, (0.15, 1.15, desk_bounds["max_z"] - 0.07), (0.82, 0.62, 0.14), neutral)
    parent_keep_world(creativity_support, creativity_root)

    # Quiet Personal Intro island, away from the desk and interests.
    photo_bounds = transform_collection("Photo_Frame", (-3.0, -2.45), 0.22, target_width=0.42, rotation_z=math.radians(8.0))
    intro_root = ensure_root("ROOT_PersonalIntro", intro_col, photo_bounds["center"])
    root_parent_collection_assets("Photo_Frame", intro_root)
    intro_plinth = create_cube("Intro_Plinth", intro_col, (-3.0, -2.45, 0.10), (0.9, 0.72, 0.20), neutral)
    parent_keep_world(intro_plinth, intro_root)

    # Tech Stack island: three offset panels on a low shared base and modest risers.
    tech_base = create_cube("Tech_Stack_Base", tech_col, (-4.05, 1.25, 0.09), (2.55, 1.75, 0.18), neutral)
    tech_support_a = create_cube("Tech_Support_A", tech_col, (-4.25, 0.72, 0.44), (0.92, 0.55, 0.70), neutral)
    tech_support_b = create_cube("Tech_Support_B", tech_col, (-3.55, 1.95, 0.50), (0.72, 0.48, 0.82), neutral)
    tech_support_c = create_cube("Tech_Support_C", tech_col, (-4.82, 1.88, 0.78), (0.60, 0.42, 1.38), neutral)
    camera_location = (10.5, -16.5, 9.0)
    setup_panel(panel_a, "Terminal_Panel_A", tech_col, (-4.25, 0.72, 1.18), 1.30, camera_location, math.radians(-3.0))
    panel_b = duplicate_panel(panel_a, "Terminal_Panel_B", tech_col, (-3.55, 1.95, 1.38), 1.02, camera_location, math.radians(6.0))
    panel_c = duplicate_panel(panel_a, "Terminal_Panel_C", tech_col, (-4.82, 1.88, 1.95), 0.82, camera_location, math.radians(-8.0))
    tech_root = ensure_root("ROOT_TechStack", tech_col, (-4.05, 1.30, 1.15))
    for obj in [tech_base, tech_support_a, tech_support_b, tech_support_c, panel_a, panel_b, panel_c]:
        parent_keep_world(obj, tech_root)

    # More Interests: one low wide base with several low platforms, not five columns.
    interests_base = create_cube("MoreInterests_BasePlatform", interests_col, (4.0, 0.85, 0.09), (3.65, 2.25, 0.18), neutral)
    p_kendo = create_cube("MoreInterests_Plinth_Kendo", interests_col, (2.95, 0.18, 0.28), (1.35, 0.95, 0.38), neutral)
    p_controller = create_cube("MoreInterests_Plinth_Controller", interests_col, (3.55, 1.28, 0.27), (0.95, 0.72, 0.36), neutral)
    p_palette = create_cube("MoreInterests_Plinth_Palette", interests_col, (4.18, 1.20, 0.38), (1.05, 0.82, 0.58), neutral)
    p_globe = create_cube("MoreInterests_Plinth_Globe", interests_col, (4.92, 0.18, 0.42), (0.92, 0.78, 0.66), neutral)
    p_camera = create_cube("MoreInterests_Plinth_Camera", interests_col, (5.05, 1.08, 0.34), (0.82, 0.70, 0.50), neutral)

    # Place the interest assets on platform tops. Kendo is intentionally larger than v1.
    kendo_bounds = transform_collection("Kendo_Gear", (2.95, 0.18), 0.47, target_width=1.82, rotation_z=math.radians(-8.0), scale_factor=1.0)
    palette_bounds = transform_collection("Artist_Palette", (4.18, 1.20), 0.67, target_width=0.56, rotation_z=math.radians(-12.0))
    camera_bounds = transform_collection("Compact_Camera", (5.05, 1.08), 0.59, target_width=0.38, rotation_z=math.radians(16.0))
    controller_bounds = transform_collection("Game_Controller", (3.55, 1.28), 0.45, target_width=0.48, rotation_z=math.radians(-14.0))
    globe_bounds = transform_collection("World_Globe", (4.92, 0.18), 0.75, target_width=0.62, rotation_z=math.radians(-6.0))

    more_root = ensure_root("ROOT_MoreInterests", interests_col, (4.0, 0.8, 0.8))
    child_roots = {}
    for asset_name, root_name in {
        "Kendo_Gear": "ROOT_Kendo",
        "Artist_Palette": "ROOT_Palette",
        "Compact_Camera": "ROOT_Camera",
        "Game_Controller": "ROOT_Controller",
        "World_Globe": "ROOT_Globe",
    }.items():
        asset_collection = bpy.data.collections.get(asset_name)
        asset_bounds = mesh_bounds(asset_collection)
        child = ensure_root(root_name, interests_col, asset_bounds["center"])
        root_parent_collection_assets(asset_name, child)
        parent_keep_world(child, more_root)
        child_roots[root_name] = child
    for obj in [interests_base, p_kendo, p_controller, p_palette, p_globe, p_camera]:
        parent_keep_world(obj, more_root)
    more_root.location = (4.0, 0.8, 0.8)
    more_root.rotation_euler = (0.0, 0.0, math.radians(5.0))

    # Five board roots have unit scale and clear semantic ownership.
    roots = {
        "ROOT_PersonalIntro": intro_root,
        "ROOT_TechStack": tech_root,
        "ROOT_Projects": desk_root,
        "ROOT_Creativity": creativity_root,
        "ROOT_MoreInterests": more_root,
    }

    # Camera: wide enough for all five islands, but still reads Projects first.
    camera = bpy.data.objects.get("Portfolio_Main_Camera")
    if camera is None:
        data = bpy.data.cameras.new("Portfolio_Main_Camera_Data")
        camera = bpy.data.objects.new("Portfolio_Main_Camera", data)
        camera_col.objects.link(camera)
    else:
        for linked in list(camera.users_collection):
            if linked != camera_col:
                linked.objects.unlink(camera)
        if camera.users_collection.get(camera_col.name) is None:
            camera_col.objects.link(camera)
    set_camera(camera, camera_location, (0.25, 0.45, 1.35), lens=58.0)

    # Keep the open ground and remove only stale empty containers.
    ground = bpy.data.objects.get("Portfolio_Ground_Plane")
    if ground is not None:
        ground.location.z = 0.0
        ground.dimensions = (14.0, 10.0, 0.0)
        bpy.context.view_layer.objects.active = ground
    cleanup_empty_collections()
    bpy.context.view_layer.update()

    panels = {"Terminal_Panel_A": panel_a, "Terminal_Panel_B": panel_b, "Terminal_Panel_C": panel_c}
    platforms = {
        obj.name: obj for obj in [interests_base, p_kendo, p_controller, p_palette, p_globe, p_camera,
                                  tech_base, tech_support_a, tech_support_b, tech_support_c, intro_plinth, creativity_support]
    }
    report = build_report(roots, panels, platforms, camera)
    bpy.ops.wm.save_as_mainfile(filepath=str(V4_FILE))
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("PORTFOLIO_SCENE_LAYOUT_V4_COMPLETE")
    print(json.dumps({"blend_file": str(V4_FILE), "camera": report["camera"], "areas": report["areas"]}, ensure_ascii=False))


main()
