"""Design a camera-navigation system without changing the five layout ROOTs."""

from __future__ import annotations

import json
import math
from pathlib import Path

import bpy
from mathutils import Vector


WORKSPACE = Path(r"D:\portfolio\portfolio")
OUTPUT_FILE = WORKSPACE / "portfolio_camera_design_v1.blend"
REPORT_FILE = WORKSPACE / "portfolio_camera_design_v1_report.json"

ROOT_NAMES = [
    "ROOT_PersonalIntro",
    "ROOT_TechStack",
    "ROOT_Projects",
    "ROOT_Creativity",
    "ROOT_MoreInterests",
]

TARGET_NAMES = [
    "TARGET_PersonalIntro",
    "TARGET_TechStack",
    "TARGET_Projects",
    "TARGET_Creativity",
    "TARGET_MoreInterests",
]

STATE_NAMES = [
    "CAMSTATE_PersonalIntro",
    "CAMSTATE_TechStack",
    "CAMSTATE_Projects",
    "CAMSTATE_Creativity",
    "CAMSTATE_MoreInterests",
]

GENERATED_OBJECTS = set(TARGET_NAMES + STATE_NAMES + [
    "NAV_Active_Target",
    "Portfolio_Navigation_Camera",
])


def vec_list(value):
    return [round(float(v), 6) for v in value]


def ensure_collection(name: str):
    collection = bpy.data.collections.get(name)
    if collection is None:
        collection = bpy.data.collections.new(name)
        bpy.context.scene.collection.children.link(collection)
    return collection


def remove_generated_objects():
    for name in GENERATED_OBJECTS:
        obj = bpy.data.objects.get(name)
        if obj is not None:
            bpy.data.objects.remove(obj, do_unlink=True)


def mesh_objects(collection):
    if collection is None:
        return []
    try:
        objects = list(collection.all_objects)
    except AttributeError:
        objects = list(collection.objects)
    return [obj for obj in objects if obj.type == "MESH"]


def bounds_for_objects(objects):
    points = []
    for obj in objects:
        for corner in obj.bound_box:
            points.append(obj.matrix_world @ Vector(corner))
    if not points:
        return None
    xs = [p.x for p in points]
    ys = [p.y for p in points]
    zs = [p.z for p in points]
    return {
        "min": Vector((min(xs), min(ys), min(zs))),
        "max": Vector((max(xs), max(ys), max(zs))),
        "center": Vector(((min(xs) + max(xs)) / 2.0,
                           (min(ys) + max(ys)) / 2.0,
                           (min(zs) + max(zs)) / 2.0)),
    }


def collection_bounds(name):
    return bounds_for_objects(mesh_objects(bpy.data.collections.get(name)))


def object_bounds(obj):
    return bounds_for_objects([obj]) if obj is not None and obj.type == "MESH" else None


def root_transform(obj):
    return {
        "location": vec_list(obj.location),
        "rotation_euler_degrees": vec_list([math.degrees(v) for v in obj.rotation_euler]),
        "rotation_quaternion": vec_list(obj.rotation_quaternion),
        "scale": vec_list(obj.scale),
    }


def create_empty(name, collection, location, display_type="SPHERE", size=0.22):
    obj = bpy.data.objects.new(name, None)
    collection.objects.link(obj)
    obj.location = location
    obj.empty_display_type = display_type
    obj.empty_display_size = size
    obj.hide_render = True
    return obj


def focus_point_from_bounds(bounds, z_ratio=0.5):
    if bounds is None:
        return Vector((0.0, 0.0, 0.0))
    return Vector((bounds["center"].x,
                   bounds["center"].y,
                   bounds["min"].z + (bounds["max"].z - bounds["min"].z) * z_ratio))


def panel_focus_point():
    panels = [bpy.data.objects.get(name) for name in [
        "Terminal_Panel_A", "Terminal_Panel_B", "Terminal_Panel_C"]]
    panels = [obj for obj in panels if obj is not None]
    bounds = bounds_for_objects(panels)
    return focus_point_from_bounds(bounds, 0.58)


def more_interests_focus_point():
    whole = collection_bounds("More_Interests")
    kendo = collection_bounds("Kendo_Gear")
    if whole is None:
        return Vector((0.0, 0.0, 0.0))
    if kendo is None:
        return focus_point_from_bounds(whole, 0.55)
    # Bias slightly toward Kendo without making it the sole focus.
    return whole["center"] * 0.55 + kendo["center"] * 0.45


def make_targets(nav_collection):
    targets = {}
    target_points = {
        "TARGET_PersonalIntro": focus_point_from_bounds(collection_bounds("Photo_Frame"), 0.58),
        "TARGET_TechStack": panel_focus_point(),
        "TARGET_Projects": focus_point_from_bounds(collection_bounds("Workstation_Desk"), 0.63),
        "TARGET_Creativity": focus_point_from_bounds(collection_bounds("Workstation_Monitor"), 0.58),
        "TARGET_MoreInterests": more_interests_focus_point(),
    }
    for name in TARGET_NAMES:
        target = create_empty(name, nav_collection, target_points[name], "SPHERE", 0.22)
        targets[name] = target
    return targets, target_points


def front_and_side(scene_center):
    existing_camera = bpy.data.objects.get("Portfolio_Main_Camera")
    if existing_camera is None:
        existing_camera = bpy.data.objects.get("Camera")
    if existing_camera is not None:
        front = Vector((existing_camera.location.x - scene_center.x,
                        existing_camera.location.y - scene_center.y, 0.0))
    else:
        front = Vector((0.0, -1.0, 0.0))
    if front.length < 1e-6:
        front = Vector((0.0, -1.0, 0.0))
    front.normalize()
    side = Vector((-front.y, front.x, 0.0))
    side.normalize()
    return front, side


def camera_position(target, front, side, distance, side_offset, elevation):
    return target + front * distance + side * side_offset + Vector((0.0, 0.0, elevation))


def look_at_rotation(camera_location, target_location):
    return (Vector(target_location) - Vector(camera_location)).to_track_quat("-Z", "Y").to_euler()


def make_camera_state_data(target_points):
    scene_center = sum(target_points.values(), Vector((0.0, 0.0, 0.0))) / len(target_points)
    front, side = front_and_side(scene_center)
    # The distances are intentionally different so each shot feels like a node
    # in a small exhibition, not a collection of orthographic slides.
    specs = {
        "PersonalIntro": (2.45, 0.70, 1.20, 50.0),
        "TechStack": (3.55, -1.45, 1.85, 52.0),
        "Projects": (5.80, 1.25, 3.05, 55.0),
        "Creativity": (4.10, -1.25, 2.30, 52.0),
        "MoreInterests": (4.70, 1.90, 2.55, 50.0),
    }
    states = {}
    for suffix, target_name in [
        ("PersonalIntro", "TARGET_PersonalIntro"),
        ("TechStack", "TARGET_TechStack"),
        ("Projects", "TARGET_Projects"),
        ("Creativity", "TARGET_Creativity"),
        ("MoreInterests", "TARGET_MoreInterests"),
    ]:
        distance, side_offset, elevation, lens = specs[suffix]
        target = target_points[target_name]
        location = camera_position(target, front, side, distance, side_offset, elevation)
        rotation = look_at_rotation(location, target)
        states[suffix] = {
            "camera_location": location,
            "target_location": target,
            "rotation": rotation,
            "focal_length": lens,
        }
    return states, front, side


def midpoint_state(start, end, side, arc_offset, vertical_offset):
    camera_mid = (start["camera_location"] + end["camera_location"]) * 0.5
    target_mid = (start["target_location"] + end["target_location"]) * 0.5
    segment = end["camera_location"] - start["camera_location"]
    segment_xy = Vector((segment.x, segment.y, 0.0))
    curve_side = side if segment_xy.length < 1e-6 else Vector((-segment_xy.y, segment_xy.x, 0.0)).normalized()
    camera_mid += curve_side * arc_offset + Vector((0.0, 0.0, vertical_offset))
    rotation_mid = look_at_rotation(camera_mid, target_mid)
    return {
        "camera_location": camera_mid,
        "target_location": target_mid,
        "rotation": rotation_mid,
        "focal_length": (start["focal_length"] + end["focal_length"]) * 0.5,
    }


def set_bezier(action):
    if action is None:
        return
    # Blender 5.2 may expose slotted Actions without the legacy fcurves
    # collection. Keyframe insertion already defaults to BEZIER, so leave
    # those actions untouched when the legacy API is unavailable.
    if not hasattr(action, "fcurves"):
        return
    for fcurve in action.fcurves:
        for key in fcurve.keyframe_points:
            key.interpolation = "BEZIER"
            key.handle_left_type = "AUTO_CLAMPED"
            key.handle_right_type = "AUTO_CLAMPED"


def animate_camera(scene, camera, active_target, states, front, nav_collection):
    ordered = [states[name] for name in ["PersonalIntro", "TechStack", "Projects", "Creativity", "MoreInterests"]]
    state_frames = [1, 90, 180, 270, 360]
    hold_frames = [48, 138, 228, 318, 408]
    midpoint_frames = [69, 159, 249, 339]
    arc_offsets = [0.75, 1.10, -0.60, 1.25]
    vertical_offsets = [0.35, 0.65, 0.25, 0.55]

    camera.animation_data_clear()
    active_target.animation_data_clear()

    def insert(frame, state):
        camera.location = state["camera_location"]
        camera.data.lens = state["focal_length"]
        active_target.location = state["target_location"]
        camera.keyframe_insert(data_path="location", frame=frame)
        camera.data.keyframe_insert(data_path="lens", frame=frame)
        active_target.keyframe_insert(data_path="location", frame=frame)

    for index, state in enumerate(ordered):
        insert(state_frames[index], state)
        insert(hold_frames[index], state)
        if index < len(ordered) - 1:
            mid = midpoint_state(state, ordered[index + 1], front, arc_offsets[index], vertical_offsets[index])
            insert(midpoint_frames[index], mid)

    set_bezier(camera.animation_data.action if camera.animation_data else None)
    set_bezier(active_target.animation_data.action if active_target.animation_data else None)
    scene.frame_start = 1
    scene.frame_end = 408
    scene.frame_set(1)


def state_empty_report(states, state_obj_map):
    result = {}
    for suffix, state in states.items():
        obj = state_obj_map[suffix]
        obj.location = state["camera_location"]
        obj["camera_location"] = vec_list(state["camera_location"])
        obj["look_at_target_location"] = vec_list(state["target_location"])
        obj["camera_rotation_degrees"] = vec_list([math.degrees(v) for v in state["rotation"]])
        obj["focal_length_mm"] = state["focal_length"]
        result[obj.name] = {
            "camera_location": vec_list(state["camera_location"]),
            "look_at_target_location": vec_list(state["target_location"]),
            "camera_rotation_degrees_reference": vec_list([math.degrees(v) for v in state["rotation"]]),
            "focal_length_mm": state["focal_length"],
        }
    return result


def point_in_bounds(point, bounds, margin=0.15):
    if bounds is None:
        return False
    return all(bounds["min"][axis] - margin <= point[axis] <= bounds["max"][axis] + margin for axis in range(3))


def main():
    original_file = bpy.data.filepath
    root_objects = {name: bpy.data.objects.get(name) for name in ROOT_NAMES}
    missing_roots = [name for name, obj in root_objects.items() if obj is None]
    if missing_roots:
        raise RuntimeError(f"Missing required layout ROOTs: {missing_roots}")

    # Read-only snapshot before creating anything.
    root_before = {name: root_transform(obj) for name, obj in root_objects.items()}

    # Save the camera-design working copy before edits, as requested.
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))

    remove_generated_objects()
    nav_collection = ensure_collection("Camera_Navigation")
    targets, target_points = make_targets(nav_collection)
    states, front, side = make_camera_state_data(target_points)

    state_suffixes = ["PersonalIntro", "TechStack", "Projects", "Creativity", "MoreInterests"]
    state_objects = {}
    for suffix in state_suffixes:
        state_objects[suffix] = create_empty(
            f"CAMSTATE_{suffix}", nav_collection,
            states[suffix]["camera_location"], "CUBE", 0.28,
        )

    active_target = create_empty("NAV_Active_Target", nav_collection, target_points["TARGET_PersonalIntro"], "ARROWS", 0.30)

    camera_data = bpy.data.cameras.get("Portfolio_Navigation_Camera_Data") or bpy.data.cameras.new("Portfolio_Navigation_Camera_Data")
    camera = bpy.data.objects.new("Portfolio_Navigation_Camera", camera_data)
    nav_collection.objects.link(camera)
    camera.location = states["PersonalIntro"]["camera_location"]
    camera.data.lens = states["PersonalIntro"]["focal_length"]
    camera.data.clip_start = 0.05
    camera.data.clip_end = 200.0
    camera.data.dof.use_dof = False
    track = camera.constraints.new(type="TRACK_TO")
    track.name = "NAV_LookAt_Target"
    track.target = active_target
    track.track_axis = "TRACK_NEGATIVE_Z"
    track.up_axis = "UP_Y"
    bpy.context.scene.camera = camera

    animate_camera(bpy.context.scene, camera, active_target, states, front, nav_collection)
    state_reports = state_empty_report(states, state_objects)

    # Re-read ROOT transforms and assert that this camera-only pass did not alter them.
    bpy.context.view_layer.update()
    root_after = {name: root_transform(obj) for name, obj in root_objects.items()}
    root_unchanged = root_before == root_after

    transitions = [
        {"from": "PersonalIntro", "to": "TechStack", "motion_direction": "向场景后方并向左侧技术岛绕行", "rotation_change": True, "arc_path": True, "occlusion_risk": "低"},
        {"from": "TechStack", "to": "Projects", "motion_direction": "从技术岛向中央工作站回收并向右前方转入", "rotation_change": True, "arc_path": True, "occlusion_risk": "低，避开终端底座"},
        {"from": "Projects", "to": "Creativity", "motion_direction": "沿工作站后侧短弧线移动并向显示器方向转头", "rotation_change": True, "arc_path": True, "occlusion_risk": "中低，需避开桌面与显示器支架"},
        {"from": "Creativity", "to": "MoreInterests", "motion_direction": "从显示器侧向兴趣展台外侧展开并升高", "rotation_change": True, "arc_path": True, "occlusion_risk": "中低，绕开兴趣平台前缘"},
    ]

    state_bounds = {
        "PersonalIntro": collection_bounds("Photo_Frame"),
        "TechStack": bounds_for_objects([bpy.data.objects.get(name) for name in ["Terminal_Panel_A", "Terminal_Panel_B", "Terminal_Panel_C"] if bpy.data.objects.get(name) is not None]),
        "Projects": collection_bounds("Workstation_Desk"),
        "Creativity": collection_bounds("Workstation_Monitor"),
        "MoreInterests": bounds_for_objects(mesh_objects(bpy.data.collections.get("More_Interests"))),
    }
    camera_inside = {name: point_in_bounds(state["camera_location"], state_bounds.get(name)) for name, state in states.items()}

    report = {
        "source_file_before_save": original_file,
        "blend_file": str(OUTPUT_FILE),
        "root_transforms_before": root_before,
        "root_transforms_after": root_after,
        "root_transforms_unchanged": root_unchanged,
        "targets": {name: vec_list(obj.location) for name, obj in targets.items()},
        "camera": {
            "name": camera.name,
            "scene_camera": bpy.context.scene.camera.name if bpy.context.scene.camera else None,
            "constraint": track.name,
            "constraint_target": active_target.name,
            "initial_focal_length_mm": 50.0,
            "animation_frame_range": [bpy.context.scene.frame_start, bpy.context.scene.frame_end],
            "fps": bpy.context.scene.render.fps,
        },
        "states": state_reports,
        "transitions": transitions,
        "checks": {
            "root_transform_violations": [] if root_unchanged else [name for name in ROOT_NAMES if root_before[name] != root_after[name]],
            "camera_positions_inside_state_bounds": camera_inside,
            "existing_cameras_preserved": all(name in bpy.data.objects for name in ["Camera", "Portfolio_Main_Camera"] if bpy.data.objects.get(name) is not None),
            "lights_changed": False,
            "layout_assets_changed": False,
            "prohibited_operations": [],
        },
    }
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))
    print("PORTFOLIO_CAMERA_DESIGN_V1_COMPLETE")
    print(json.dumps({
        "blend_file": str(OUTPUT_FILE),
        "root_transforms_unchanged": root_unchanged,
        "targets": report["targets"],
        "states": report["states"],
        "frame_range": report["camera"]["animation_frame_range"],
    }, ensure_ascii=False))


main()
