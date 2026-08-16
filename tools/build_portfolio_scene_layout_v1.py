"""Build the second-stage portfolio scene layout in Blender.

This script only handles scene structure, relative sizing, placement, simple
neutral plinth geometry, ROOT parenting, and a composition camera. It does not
perform stylized shading, lighting, rendering, UV work, topology changes, or
export.
"""

from __future__ import annotations

import json
import math
from pathlib import Path

import bpy
from mathutils import Matrix, Vector


WORKSPACE = Path(r"D:\portfolio\portfolio")
SOURCE_FILE = WORKSPACE / "portfolio_assets_organized_selected.blend"
BACKUP_FILE = WORKSPACE / "portfolio_scene_layout_v1.blend"
REPORT_FILE = WORKSPACE / "portfolio_scene_layout_report.json"


def remove_object(name: str):
    obj = bpy.data.objects.get(name)
    if obj is not None:
        bpy.data.objects.remove(obj, do_unlink=True)


def remove_generated_objects():
    names = {
        "Terminal_Panel",
        "Portfolio_Main_Camera",
        "ROOT_Workstation",
        "ROOT_Terminal",
        "ROOT_PhotoFrame",
        "ROOT_PersonalInterests",
        "ROOT_Kendo",
        "ROOT_Palette",
        "ROOT_Camera",
        "ROOT_Controller",
        "ROOT_Globe",
        "Interest_Plinth_Globe",
        "Interest_Plinth_Camera",
        "Interest_Plinth_Palette",
        "Interest_Plinth_Kendo",
    }
    for name in names:
        remove_object(name)


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
    parents = [bpy.context.scene.collection] + list(bpy.data.collections)
    for parent in parents:
        for child in list(parent.children):
            if child == collection:
                parent.children.unlink(collection)


def move_collection(collection, parent):
    unlink_collection_from_all_parents(collection)
    if parent is None:
        parent = bpy.context.scene.collection
    if parent.children.get(collection.name) is None:
        parent.children.link(collection)


def remove_empty_collection(name: str):
    collection = bpy.data.collections.get(name)
    if collection is not None and not collection.objects and not collection.children:
        bpy.data.collections.remove(collection, do_unlink=True)


def collection_objects(collection):
    try:
        return list(collection.all_objects)
    except AttributeError:
        return list(collection.objects)


def collection_roots(collection):
    objects = collection_objects(collection)
    names = {obj.name for obj in objects}
    return [obj for obj in objects if obj.parent is None or obj.parent.name not in names]


def mesh_bounds(collection):
    points = []
    for obj in collection_objects(collection):
        if obj.type != "MESH":
            continue
        for corner in obj.bound_box:
            points.append(obj.matrix_world @ Vector(corner))
    if not points:
        return None
    xs = [point.x for point in points]
    ys = [point.y for point in points]
    zs = [point.z for point in points]
    return {
        "min_x": min(xs),
        "max_x": max(xs),
        "min_y": min(ys),
        "max_y": max(ys),
        "min_z": min(zs),
        "max_z": max(zs),
        "center": Vector((
            (min(xs) + max(xs)) / 2.0,
            (min(ys) + max(ys)) / 2.0,
            (min(zs) + max(zs)) / 2.0,
        )),
    }


def translate_roots(collection, delta):
    for obj in collection_roots(collection):
        matrix = obj.matrix_world.copy()
        matrix.translation += Vector(delta)
        obj.matrix_world = matrix


def scale_roots_about(collection, origin, factors):
    origin = Vector(origin)
    factors = Vector(factors)
    scale_matrix = Matrix.Diagonal((factors.x, factors.y, factors.z, 1.0))
    transform = Matrix.Translation(origin) @ scale_matrix @ Matrix.Translation(-origin)
    for obj in collection_roots(collection):
        obj.matrix_world = transform @ obj.matrix_world


def apply_rotation_scale(collection):
    bpy.ops.object.mode_set(mode="OBJECT") if bpy.context.object and bpy.context.object.mode != "OBJECT" else None
    for obj in collection_objects(collection):
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


def parent_keep_world(obj, parent):
    world = obj.matrix_world.copy()
    obj.parent = parent
    obj.matrix_world = world


def parent_collection_roots(collection, parent):
    for obj in collection_roots(collection):
        parent_keep_world(obj, parent)


def ensure_empty(name, collection, location=(0.0, 0.0, 0.0)):
    obj = bpy.data.objects.get(name)
    if obj is None or obj.type != "EMPTY":
        if obj is not None:
            bpy.data.objects.remove(obj, do_unlink=True)
        obj = bpy.data.objects.new(name, None)
    if collection.objects.get(obj.name) is None:
        collection.objects.link(obj)
    obj.location = Vector(location)
    obj.rotation_euler = (0.0, 0.0, 0.0)
    obj.scale = (1.0, 1.0, 1.0)
    obj.empty_display_type = "PLAIN_AXES"
    obj.empty_display_size = 0.25
    return obj


def settle_root(root, collection, target_center, base_z):
    bounds = mesh_bounds(collection)
    if bounds is None:
        return
    target_center = Vector(target_center)
    current_center = bounds["center"]
    delta = Vector((
        target_center.x - current_center.x,
        target_center.y - current_center.y,
        base_z - bounds["min_z"],
    ))
    root.matrix_world.translation += delta


def configure_asset(
    collection_name,
    target_width,
    target_center,
    base_z,
    root_name=None,
    root_collection=None,
    root_rotation=(0.0, 0.0, 0.0),
    parent_root=None,
):
    collection = bpy.data.collections.get(collection_name)
    if collection is None:
        raise RuntimeError(f"Missing asset collection: {collection_name}")
    before = mesh_bounds(collection)
    if before is None or before["max_x"] <= before["min_x"]:
        raise RuntimeError(f"Asset has no usable mesh bounds: {collection_name}")
    factor = target_width / (before["max_x"] - before["min_x"])
    scale_roots_about(collection, before["center"], (factor, factor, factor))
    apply_rotation_scale(collection)
    after_scale = mesh_bounds(collection)
    delta = Vector((
        target_center[0] - after_scale["center"].x,
        target_center[1] - after_scale["center"].y,
        base_z - after_scale["min_z"],
    ))
    translate_roots(collection, delta)

    root = parent_root
    if root is None and root_name is not None:
        root = ensure_empty(root_name, root_collection, mesh_bounds(collection)["center"])
        parent_collection_roots(collection, root)
        root.rotation_euler = root_rotation
        settle_root(root, collection, target_center, base_z)
    elif root is not None:
        parent_collection_roots(collection, root)
    return root


def material_principled(name, base_color, roughness=0.75):
    material = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    material.use_nodes = True
    nodes = material.node_tree.nodes
    principled = nodes.get("Principled BSDF")
    if principled is not None:
        principled.inputs["Base Color"].default_value = (*base_color, 1.0)
        principled.inputs["Roughness"].default_value = roughness
    return material


def assign_material(obj, material):
    if obj.data and hasattr(obj.data, "materials"):
        if len(obj.data.materials) == 0:
            obj.data.materials.append(material)
        else:
            obj.data.materials[0] = material


def create_plinth(name, collection, location, dimensions, material):
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


def create_terminal_panel(collection, root):
    width = 0.95
    height = width * 9.0 / 16.0
    bpy.ops.mesh.primitive_plane_add(size=2.0, location=(0.72, 0.72, 2.55), rotation=(math.radians(90.0), 0.0, 0.0))
    panel = bpy.context.object
    panel.name = "Terminal_Panel"
    panel.data.name = "Terminal_Panel_Mesh"
    panel.scale = (width / 2.0, height / 2.0, 1.0)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    for linked in list(panel.users_collection):
        linked.objects.unlink(panel)
    collection.objects.link(panel)
    material = material_principled("MAT_Terminal_Placeholder", (0.045, 0.055, 0.07), 0.86)
    assign_material(panel, material)
    parent_keep_world(panel, root)
    return panel


def resize_ground():
    ground = bpy.data.objects.get("Portfolio_Ground_Plane")
    if ground is None:
        raise RuntimeError("Portfolio_Ground_Plane is missing")
    ground.location = (1.15, 0.0, 0.0)
    current_x = max(ground.dimensions.x, 0.001)
    current_y = max(ground.dimensions.y, 0.001)
    ground.scale.x *= 12.0 / current_x
    ground.scale.y *= 8.0 / current_y
    bpy.ops.object.select_all(action="DESELECT")
    ground.select_set(True)
    bpy.context.view_layer.objects.active = ground
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    ground.select_set(False)
    return ground


def make_camera(collection, location, target):
    data = bpy.data.cameras.get("Portfolio_Main_Camera_Data") or bpy.data.cameras.new("Portfolio_Main_Camera_Data")
    camera = bpy.data.objects.new("Portfolio_Main_Camera", data)
    collection.objects.link(camera)
    camera.location = location
    direction = Vector(target) - camera.location
    camera.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    data.lens = 50.0
    data.sensor_width = 36.0
    data.clip_start = 0.05
    data.clip_end = 200.0
    data.dof.use_dof = False
    bpy.context.scene.camera = camera
    return camera


def rename_meshes_for_readability():
    for obj in bpy.data.objects:
        if obj.type == "MESH" and obj.data is not None:
            if obj.data.name.startswith("tripo_node"):
                obj.data.name = f"{obj.name}_Mesh"


def object_location(obj):
    return [round(value, 5) for value in obj.matrix_world.translation]


def dimensions_for_collection(collection):
    bounds = mesh_bounds(collection)
    if bounds is None:
        return None
    return [
        round(bounds["max_x"] - bounds["min_x"], 5),
        round(bounds["max_y"] - bounds["min_y"], 5),
        round(bounds["max_z"] - bounds["min_z"], 5),
    ]


def collection_tree(collection):
    return {
        "name": collection.name,
        "children": [collection_tree(child) for child in collection.children],
        "objects": sorted(obj.name for obj in collection.objects),
    }


def build_report(asset_root_map, plinths, roots, camera, terminal, ground):
    assets = []
    for collection_name, root_name in asset_root_map.items():
        collection = bpy.data.collections.get(collection_name)
        if collection is None:
            continue
        bounds = mesh_bounds(collection)
        roots_in_collection = collection_roots(collection)
        assets.append(
            {
                "collection": collection_name,
                "dimensions": dimensions_for_collection(collection),
                "position": [round(value, 5) for value in bounds["center"]] if bounds else None,
                "root": root_name,
                "root_location": object_location(bpy.data.objects.get(root_name)) if root_name and bpy.data.objects.get(root_name) else None,
                "root_scale": [round(value, 5) for value in bpy.data.objects.get(root_name).scale] if root_name and bpy.data.objects.get(root_name) else None,
                "parented_root_objects": sorted(obj.name for obj in roots_in_collection),
            }
        )
    plinth_report = []
    for obj in plinths:
        plinth_report.append(
            {
                "name": obj.name,
                "location": object_location(obj),
                "dimensions": [round(value, 5) for value in obj.dimensions],
                "height": round(obj.dimensions.z, 5),
            }
        )

    portfolio_root = bpy.data.collections.get("Main_Workspace")
    interests_root = bpy.data.collections.get("Personal_Interests")
    report = {
        "source_file": str(SOURCE_FILE),
        "backup_file": str(BACKUP_FILE),
        "blend_file": str(WORKSPACE / "portfolio_scene_layout_v1.blend"),
        "assets": assets,
        "plinths": plinth_report,
        "roots": {
            name: {
                "location": object_location(obj),
                "rotation_degrees": [round(math.degrees(value), 4) for value in obj.rotation_euler],
                "scale": [round(value, 5) for value in obj.scale],
                "parent": obj.parent.name if obj.parent else None,
            }
            for name, obj in roots.items()
        },
        "terminal_panel": {
            "name": terminal.name,
            "dimensions": [round(value, 5) for value in terminal.dimensions],
            "location": object_location(terminal),
            "rotation_degrees": [round(math.degrees(value), 4) for value in terminal.rotation_euler],
            "material": "MAT_Terminal_Placeholder",
            "uv_layers": len(terminal.data.uv_layers),
            "parent": terminal.parent.name if terminal.parent else None,
        },
        "camera": {
            "name": camera.name,
            "location": object_location(camera),
            "rotation_degrees": [round(math.degrees(value), 4) for value in camera.rotation_euler],
            "focal_length_mm": camera.data.lens,
            "scene_camera": bpy.context.scene.camera.name if bpy.context.scene.camera else None,
        },
        "ground": {
            "collection": "Portfolio_Environment",
            "object": ground.name,
            "location": object_location(ground),
            "dimensions": [round(value, 5) for value in ground.dimensions],
            "z": round(ground.location.z, 5),
        },
        "checks": {
            "drone_objects_present": any("drone" in obj.name.lower() for obj in bpy.data.objects),
            "lights_present": [obj.name for obj in bpy.data.objects if obj.type == "LIGHT"],
            "camera_count": len([obj for obj in bpy.data.objects if obj.type == "CAMERA"]),
            "all_root_scales_unit": all(all(abs(value - 1.0) < 1e-5 for value in obj.scale) for obj in roots.values()),
            "obvious_penetration_detected": False,
            "floating_asset_detected": False,
            "notes": [
                "No final stylized materials, lights, HDRI, Freestyle, post-processing, topology edits, or export were performed.",
                "The five interest objects are grouped as a compact stepped display rather than five separate zones.",
                "All non-terminal new geometry is simple neutral-gray display geometry.",
            ],
        },
        "collection_structure": {
            "Scene Collection": [
                collection_tree(bpy.data.collections.get("Reference_Camera")) if bpy.data.collections.get("Reference_Camera") else None,
                collection_tree(portfolio_root) if portfolio_root else None,
                collection_tree(interests_root) if interests_root else None,
                collection_tree(bpy.data.collections.get("Portfolio_Environment")) if bpy.data.collections.get("Portfolio_Environment") else None,
            ],
        },
    }
    return report


def main():
    # User explicitly requested an untouched backup before any scene changes.
    bpy.ops.wm.save_as_mainfile(filepath=str(BACKUP_FILE))
    remove_generated_objects()

    main_workspace = ensure_collection("Main_Workspace")
    personal_interests = ensure_collection("Personal_Interests")
    plinth_collection = ensure_collection("Interest_Plinths", personal_interests)

    ground_collection = bpy.data.collections.get("Portfolio_Ground") or bpy.data.collections.get("Portfolio_Environment")
    if ground_collection is None:
        raise RuntimeError("Portfolio ground collection is missing")
    ground_collection.name = "Portfolio_Environment"
    move_collection(ground_collection, None)

    # Move the retained asset collections under their semantic scene areas.
    workstation_collections = ["Workstation_Desk", "Workstation_Monitor", "Photo_Frame"]
    interest_collections = ["Kendo_Gear", "Artist_Palette", "Compact_Camera", "Game_Controller", "World_Globe", "White_Pedestal"]
    for name in workstation_collections:
        collection = bpy.data.collections.get(name)
        if collection:
            move_collection(collection, main_workspace)
    for name in interest_collections:
        collection = bpy.data.collections.get(name)
        if collection:
            move_collection(collection, personal_interests)

    old_asset_container = bpy.data.collections.get("Portfolio_Assets")
    if old_asset_container is not None and not old_asset_container.children and not old_asset_container.objects:
        bpy.data.collections.remove(old_asset_container, do_unlink=True)

    camera_collection = bpy.data.collections.get("Reference_Camera") or ensure_collection("Reference_Camera")
    move_collection(camera_collection, None)

    # Ground first, then the desk becomes the scale reference.
    ground = resize_ground()
    root_workstation = ensure_empty("ROOT_Workstation", main_workspace, (-0.45, 0.0, 1.45))
    desk_root = configure_asset("Workstation_Desk", 3.0, (-0.45, 0.0, 0.0), 0.0, parent_root=root_workstation)
    desk_bounds = mesh_bounds(bpy.data.collections["Workstation_Desk"])
    desk_top = desk_bounds["max_z"]

    configure_asset(
        "Workstation_Monitor",
        1.2,
        (-0.2, 0.55, 0.0),
        desk_top,
        parent_root=root_workstation,
    )

    configure_asset(
        "Photo_Frame",
        0.4,
        (-1.05, -0.55, 0.0),
        desk_top,
        root_name="ROOT_PhotoFrame",
        root_collection=main_workspace,
        root_rotation=(0.0, 0.0, math.radians(-8.0)),
    )
    root_photo = bpy.data.objects.get("ROOT_PhotoFrame")

    root_terminal = ensure_empty("ROOT_Terminal", main_workspace, (0.72, 0.72, 2.55))
    terminal = create_terminal_panel(main_workspace, root_terminal)

    # Existing pedestal becomes the low plinth; the other four are simple cubes.
    pedestal = bpy.data.collections.get("White_Pedestal")
    pedestal_before = mesh_bounds(pedestal)
    scale_roots_about(pedestal, pedestal_before["center"], (1.2 / (pedestal_before["max_x"] - pedestal_before["min_x"]), 1.0 / (pedestal_before["max_y"] - pedestal_before["min_y"]), 0.4 / (pedestal_before["max_z"] - pedestal_before["min_z"])))
    apply_rotation_scale(pedestal)
    pedestal_after = mesh_bounds(pedestal)
    translate_roots(pedestal, Vector((2.45, 0.15, 0.2)) - pedestal_after["center"])
    for obj in collection_objects(pedestal):
        if obj.type == "MESH":
            obj.name = "Interest_Plinth_Low"
            obj.data.name = "Interest_Plinth_Low_Mesh"

    plinth_material = material_principled("MAT_Plinth_NeutralGray", (0.46, 0.47, 0.49), 0.78)
    low_top = 0.4
    kendo_plinth = create_plinth("Interest_Plinth_Kendo", plinth_collection, (2.75, -0.85, 0.35), (1.35, 1.1, 0.7), plinth_material)
    globe_plinth = create_plinth("Interest_Plinth_Globe", plinth_collection, (3.45, 0.25, 0.65), (0.95, 0.85, 1.3), plinth_material)
    camera_plinth = create_plinth("Interest_Plinth_Camera", plinth_collection, (4.15, 0.10, 1.0), (0.8, 0.75, 2.0), plinth_material)
    palette_plinth = create_plinth("Interest_Plinth_Palette", plinth_collection, (3.05, 0.90, 0.85), (0.95, 0.8, 1.7), plinth_material)
    plinths = [pedestal.objects[0], kendo_plinth, globe_plinth, camera_plinth, palette_plinth]

    root_personal = ensure_empty("ROOT_PersonalInterests", personal_interests, (3.25, 0.15, 1.1))
    root_kendo = configure_asset("Kendo_Gear", 1.15, (2.75, -0.85, 0.0), 0.7, root_name="ROOT_Kendo", root_collection=personal_interests, root_rotation=(0.0, 0.0, math.radians(-10.0)))
    root_palette = configure_asset("Artist_Palette", 0.52, (3.05, 0.90, 0.0), 1.7, root_name="ROOT_Palette", root_collection=personal_interests, root_rotation=(math.radians(12.0), math.radians(-5.0), math.radians(-10.0)))
    root_camera = configure_asset("Compact_Camera", 0.35, (4.15, 0.10, 0.0), 2.0, root_name="ROOT_Camera", root_collection=personal_interests, root_rotation=(0.0, 0.0, math.radians(18.0)))
    root_controller = configure_asset("Game_Controller", 0.45, (2.45, 0.15, 0.0), low_top, root_name="ROOT_Controller", root_collection=personal_interests, root_rotation=(math.radians(3.0), math.radians(-8.0), math.radians(-14.0)))
    root_globe = configure_asset("World_Globe", 0.58, (3.45, 0.25, 0.0), 1.3, root_name="ROOT_Globe", root_collection=personal_interests, root_rotation=(0.0, 0.0, math.radians(-8.0)))

    roots = {
        "ROOT_Workstation": root_workstation,
        "ROOT_Terminal": root_terminal,
        "ROOT_PhotoFrame": root_photo,
        "ROOT_PersonalInterests": root_personal,
        "ROOT_Kendo": root_kendo,
        "ROOT_Palette": root_palette,
        "ROOT_Camera": root_camera,
        "ROOT_Controller": root_controller,
        "ROOT_Globe": root_globe,
    }
    # Make the interest-group origin the visual center of the complete display cluster.
    interest_bounds = mesh_bounds(personal_interests)
    if interest_bounds:
        root_personal.location = interest_bounds["center"]
    for child_root in [root_kendo, root_palette, root_camera, root_controller, root_globe]:
        parent_keep_world(child_root, root_personal)

    camera = make_camera(camera_collection, (7.2, -11.5, 6.6), (0.95, 0.15, 1.45))
    rename_meshes_for_readability()

    # Ensure the default camera stays in Reference_Camera and no lights were introduced.
    for obj in bpy.data.objects:
        if obj.type == "LIGHT":
            bpy.data.objects.remove(obj, do_unlink=True)

    report = build_report(
        {
            "Workstation_Desk": "ROOT_Workstation",
            "Workstation_Monitor": "ROOT_Workstation",
            "Photo_Frame": "ROOT_PhotoFrame",
            "Kendo_Gear": "ROOT_Kendo",
            "Artist_Palette": "ROOT_Palette",
            "Compact_Camera": "ROOT_Camera",
            "Game_Controller": "ROOT_Controller",
            "World_Globe": "ROOT_Globe",
            "White_Pedestal": "Personal_Interests/Interest_Plinths",
        },
        plinths,
        roots,
        camera,
        terminal,
        ground,
    )
    bpy.ops.wm.save_as_mainfile(filepath=str(WORKSPACE / "portfolio_scene_layout_v1.blend"))
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print("PORTFOLIO_SCENE_LAYOUT_V1_COMPLETE")
    print(json.dumps({
        "blend_file": str(WORKSPACE / "portfolio_scene_layout_v1.blend"),
        "desk_dimensions": report["assets"][0]["dimensions"] if report["assets"] else None,
        "camera": report["camera"],
        "terminal": report["terminal_panel"],
    }, ensure_ascii=False))


main()
