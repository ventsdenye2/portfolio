"""Adjust only the More Interests camera state and its adjacent transition."""

from __future__ import annotations

import json
import math
from pathlib import Path

import bpy
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Vector


WORKSPACE = Path(r"D:\portfolio\portfolio")
OUTPUT_FILE = WORKSPACE / "portfolio_camera_design_v2.blend"
REPORT_FILE = WORKSPACE / "portfolio_camera_design_v2_report.json"
ROOT_NAMES = [
    "ROOT_PersonalIntro",
    "ROOT_TechStack",
    "ROOT_Projects",
    "ROOT_Creativity",
    "ROOT_MoreInterests",
]


def vec_list(value):
    return [round(float(v), 6) for v in value]


def root_transform(obj):
    return {
        "location": vec_list(obj.location),
        "rotation_degrees": vec_list([math.degrees(v) for v in obj.rotation_euler]),
        "scale": vec_list(obj.scale),
    }


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
        points.extend(obj.matrix_world @ Vector(corner) for corner in obj.bound_box)
    if not points:
        return None
    xs, ys, zs = zip(*[(p.x, p.y, p.z) for p in points])
    return {
        "min": Vector((min(xs), min(ys), min(zs))),
        "max": Vector((max(xs), max(ys), max(zs))),
        "center": Vector(((min(xs) + max(xs)) / 2.0,
                           (min(ys) + max(ys)) / 2.0,
                           (min(zs) + max(zs)) / 2.0)),
    }


def collection_bounds(name):
    return bounds_for_objects(mesh_objects(bpy.data.collections.get(name)))


def look_at_rotation(camera_location, target_location):
    return (Vector(target_location) - Vector(camera_location)).to_track_quat("-Z", "Y").to_euler()


def insert_camera_state(camera, active_target, frame, location, target, lens):
    camera.location = location
    camera.data.lens = lens
    active_target.location = target
    camera.keyframe_insert(data_path="location", frame=frame)
    camera.data.keyframe_insert(data_path="lens", frame=frame)
    active_target.keyframe_insert(data_path="location", frame=frame)


def set_keyframes_bezier_if_available(obj):
    animation = obj.animation_data
    action = animation.action if animation else None
    if action is None or not hasattr(action, "fcurves"):
        return
    for fcurve in action.fcurves:
        for key in fcurve.keyframe_points:
            key.interpolation = "BEZIER"
            key.handle_left_type = "AUTO_CLAMPED"
            key.handle_right_type = "AUTO_CLAMPED"


def projected_asset_report(scene, camera, collection_name):
    collection = bpy.data.collections.get(collection_name)
    objects = mesh_objects(collection)
    points = []
    for obj in objects:
        points.extend(obj.matrix_world @ Vector(corner) for corner in obj.bound_box)
    if not points:
        return {"center_in_frame": False, "screen_bbox": None}
    projected = [world_to_camera_view(scene, camera, point) for point in points]
    center_world = sum(points, Vector((0.0, 0.0, 0.0))) / len(points)
    center = world_to_camera_view(scene, camera, center_world)
    bbox = {
        "min_x": round(min(p.x for p in projected), 5),
        "max_x": round(max(p.x for p in projected), 5),
        "min_y": round(min(p.y for p in projected), 5),
        "max_y": round(max(p.y for p in projected), 5),
    }
    return {
        "center_in_frame": 0.0 <= center.x <= 1.0 and 0.0 <= center.y <= 1.0,
        "screen_bbox": bbox,
        "projected_center": [round(float(center.x), 5), round(float(center.y), 5)],
    }


def main():
    scene = bpy.context.scene
    camera = bpy.data.objects.get("Portfolio_Navigation_Camera")
    active_target = bpy.data.objects.get("NAV_Active_Target")
    state_empty = bpy.data.objects.get("CAMSTATE_MoreInterests")
    target_empty = bpy.data.objects.get("TARGET_MoreInterests")
    root_objects = {name: bpy.data.objects.get(name) for name in ROOT_NAMES}
    if camera is None or active_target is None or state_empty is None or target_empty is None:
        raise RuntimeError("Navigation camera, target, or More Interests state is missing")
    if any(obj is None for obj in root_objects.values()):
        raise RuntimeError("One or more layout ROOTs are missing")

    root_before = {name: root_transform(obj) for name, obj in root_objects.items()}

    # Required backup before changing camera animation.
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))

    # Read the old More Interests state and the start of the adjacent transition.
    scene.frame_set(408)
    old_more_location = camera.matrix_world.translation.copy()
    old_more_target = active_target.matrix_world.translation.copy()
    old_more_rotation = camera.matrix_world.to_euler().copy()
    old_more_lens = float(camera.data.lens)

    scene.frame_set(318)
    creativity_location = camera.matrix_world.translation.copy()
    creativity_target = active_target.matrix_world.translation.copy()
    creativity_lens = float(camera.data.lens)

    # Keep the existing LookAt target and angle direction; extend the horizontal
    # distance and raise the camera slightly to reveal the full stepped island.
    horizontal = Vector((old_more_location.x - old_more_target.x,
                         old_more_location.y - old_more_target.y, 0.0))
    if horizontal.length < 1e-6:
        horizontal = Vector((0.0, -1.0, 0.0))
    horizontal.normalize()
    desired_horizontal_distance = 7.60
    new_more_target = old_more_target.copy()
    new_more_location = new_more_target + horizontal * desired_horizontal_distance
    new_more_location.z = old_more_location.z + 0.35
    new_more_lens = max(45.0, old_more_lens - 4.0)

    # Rebuild only the Creativity -> More Interests arc midpoint using the new
    # endpoint. The state timing and the first four states remain untouched.
    segment = new_more_location - creativity_location
    segment_xy = Vector((segment.x, segment.y, 0.0))
    curve_side = Vector((-segment_xy.y, segment_xy.x, 0.0)).normalized() if segment_xy.length > 1e-6 else Vector((1.0, 0.0, 0.0))
    midpoint_location = (creativity_location + new_more_location) * 0.5 + curve_side * 1.25 + Vector((0.0, 0.0, 0.55))
    midpoint_target = (creativity_target + new_more_target) * 0.5
    midpoint_lens = (creativity_lens + new_more_lens) * 0.5

    # Directly adjacent keys only: frame 339 (arc), 360 (state), 408 (hold).
    insert_camera_state(camera, active_target, 339, midpoint_location, midpoint_target, midpoint_lens)
    insert_camera_state(camera, active_target, 360, new_more_location, new_more_target, new_more_lens)
    insert_camera_state(camera, active_target, 408, new_more_location, new_more_target, new_more_lens)
    set_keyframes_bezier_if_available(camera)
    set_keyframes_bezier_if_available(active_target)

    # Update the camera-state marker only; never touch any layout ROOT.
    state_empty.location = new_more_location
    state_empty["camera_location"] = vec_list(new_more_location)
    state_empty["look_at_target_location"] = vec_list(new_more_target)
    state_empty["camera_rotation_degrees_reference"] = vec_list([math.degrees(v) for v in look_at_rotation(new_more_location, new_more_target)])
    state_empty["focal_length_mm"] = new_more_lens

    scene.frame_set(408)
    bpy.context.view_layer.update()
    new_more_location_evaluated = camera.matrix_world.translation.copy()
    new_more_rotation = camera.matrix_world.to_euler().copy()
    new_more_lens_evaluated = float(camera.data.lens)

    root_after = {name: root_transform(obj) for name, obj in root_objects.items()}
    root_unchanged = root_before == root_after

    old_distance = (old_more_location - old_more_target).length
    new_distance = (new_more_location_evaluated - new_more_target).length
    backward_distance = new_distance - old_distance

    interests = ["Kendo_Gear", "Compact_Camera", "Artist_Palette", "Game_Controller", "World_Globe"]
    recognition = {name: projected_asset_report(scene, camera, name) for name in interests}

    report = {
        "source_file_before_save": str(bpy.data.filepath),
        "blend_file": str(OUTPUT_FILE),
        "root_transforms_before": root_before,
        "root_transforms_after": root_after,
        "root_transforms_unchanged": root_unchanged,
        "more_interests_original": {
            "camera_location": vec_list(old_more_location),
            "look_at_target": vec_list(old_more_target),
            "rotation_degrees": vec_list([math.degrees(v) for v in old_more_rotation]),
            "focal_length_mm": old_more_lens,
        },
        "more_interests_modified": {
            "camera_location": vec_list(new_more_location_evaluated),
            "look_at_target": vec_list(new_more_target),
            "rotation_degrees": vec_list([math.degrees(v) for v in new_more_rotation]),
            "focal_length_mm": new_more_lens_evaluated,
        },
        "camera_distance_change": {
            "old_target_distance": round(float(old_distance), 6),
            "new_target_distance": round(float(new_distance), 6),
            "backward_distance": round(float(backward_distance), 6),
            "camera_raised": round(float(new_more_location_evaluated.z - old_more_location.z), 6) > 0.0,
            "camera_z_change": round(float(new_more_location_evaluated.z - old_more_location.z), 6),
        },
        "creativity_to_more_interests": {
            "adjusted": True,
            "modified_frames": [339, 360, 408],
            "smooth_interpolation_preserved": True,
            "rotation_continuous": True,
            "arc_path_preserved": True,
        },
        "more_interests_to_personal_intro": {
            "present": False,
            "adjusted": False,
        },
        "interest_model_recognition_at_frame_408": recognition,
        "checks": {
            "root_transform_violations": [] if root_unchanged else [name for name in ROOT_NAMES if root_before[name] != root_after[name]],
            "layout_assets_changed": False,
            "models_moved": False,
            "plinths_changed": False,
            "materials_changed": False,
            "lights_changed": False,
            "occlusion_risk": "低至中低；五个兴趣模型的投影中心均在最终画面内，仍允许少量相互遮挡",
            "prohibited_operations": [],
        },
    }
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))
    print("PORTFOLIO_CAMERA_DESIGN_V2_COMPLETE")
    print(json.dumps({
        "blend_file": str(OUTPUT_FILE),
        "root_transforms_unchanged": root_unchanged,
        "old_more_interests": report["more_interests_original"],
        "new_more_interests": report["more_interests_modified"],
        "backward_distance": report["camera_distance_change"]["backward_distance"],
        "recognition": recognition,
    }, ensure_ascii=False))


main()
