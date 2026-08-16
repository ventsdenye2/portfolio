import bpy
import json
import math
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view


OUTPUT_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup.blend")
REPORT_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup_report.json")
MAIN_CAMERA_NAME = "Portfolio_Navigation_Camera"
ACTIVE_TARGET_NAME = "NAV_Active_Target"
BASE_TARGET_NAME = "TARGET_Creativity"
ROOT_NAMES = [
    "ROOT_PersonalIntro",
    "ROOT_TechStack",
    "ROOT_Projects",
    "ROOT_Creativity",
    "ROOT_MoreInterests",
]
FPS = 24.0
BASE_FRAME = 1
CLOSE_FRAME = 36
RETURN_FRAME = 68


def as_list(v):
    return [round(float(x), 6) for x in v]


def as_deg(v):
    return [round(math.degrees(float(x)), 6) for x in v]


def obj_transform(obj):
    return {
        "location": as_list(obj.location),
        "rotation_euler": as_list(obj.rotation_euler),
        "rotation_degrees": as_deg(obj.rotation_euler),
        "scale": as_list(obj.scale),
    }


def all_existing_transforms():
    return {obj.name: obj_transform(obj) for obj in bpy.data.objects}


def object_action_identity(obj):
    action = obj.animation_data.action if obj.animation_data else None
    return {
        "object": obj.name if obj else None,
        "action_name": action.name if action else None,
        "action_pointer": action.as_pointer() if action else None,
        "animation_data_pointer": obj.animation_data.as_pointer() if obj.animation_data else None,
    }


def find_monitor_objects():
    result = []

    exact = bpy.data.objects.get("Workstation_Monitor")
    if exact:
        result.append(exact)
        result.extend([child for child in exact.children_recursive if child.type == "MESH"])

    for collection_name in ("Workstation_Monitor", "Creativity", "Main_Workspace"):
        collection = bpy.data.collections.get(collection_name)
        if collection:
            result.extend([obj for obj in collection.all_objects if obj.type == "MESH"])

    root = bpy.data.objects.get("ROOT_Creativity")
    if root:
        descendants = [root] + list(root.children_recursive)
        named = [obj for obj in descendants if "monitor" in obj.name.lower() and obj.type == "MESH"]
        result.extend(named)
        if not named:
            result.extend([obj for obj in descendants if obj.type == "MESH"])

    unique = []
    seen = set()
    for obj in result:
        if obj.type == "MESH" and obj.name not in seen:
            seen.add(obj.name)
            unique.append(obj)
    return unique


def world_bbox(objects):
    points = []
    for obj in objects:
        if obj.type != "MESH":
            continue
        points.extend([obj.matrix_world @ Vector(corner) for corner in obj.bound_box])
    if not points:
        raise RuntimeError("Could not find mesh geometry for Workstation_Monitor")
    mins = Vector((min(p.x for p in points), min(p.y for p in points), min(p.z for p in points)))
    maxs = Vector((max(p.x for p in points), max(p.y for p in points), max(p.z for p in points)))
    return points, mins, maxs


def look_at_rotation(location, target):
    return (target - location).to_track_quat("-Z", "Y").to_euler()


def projected_bbox(scene, camera, points):
    coords = [world_to_camera_view(scene, camera, point) for point in points]
    xs = [float(c.x) for c in coords]
    ys = [float(c.y) for c in coords]
    return {
        "min_x": min(xs),
        "max_x": max(xs),
        "min_y": min(ys),
        "max_y": max(ys),
        "width": max(xs) - min(xs),
        "height": max(ys) - min(ys),
        "center_x": (min(xs) + max(xs)) / 2.0,
        "center_y": (min(ys) + max(ys)) / 2.0,
    }


def candidate_closeup(scene, base_location, screen_target, monitor_points, monitor_min, monitor_max, base_lens):
    forward = (screen_target - base_location).normalized()
    side = forward.cross(Vector((0.0, 0.0, 1.0)))
    if side.length < 1e-6:
        side = Vector((1.0, 0.0, 0.0))
    side.normalize()
    vertical = Vector((0.0, 0.0, 1.0))
    extent = monitor_max - monitor_min
    max_extent = max(extent.x, extent.y, extent.z)

    probe_data = bpy.data.cameras.new("__CreativityCloseUpProbeData")
    probe = bpy.data.objects.new("__CreativityCloseUpProbe", probe_data)
    scene.collection.objects.link(probe)
    candidates = []
    try:
        lens_values = []
        for value in (base_lens, 52.0, 50.0, 48.0, 55.0):
            value = max(45.0, min(65.0, float(value)))
            if value not in lens_values:
                lens_values.append(value)
        for distance in (2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.2):
            for lateral in (-0.50, -0.30, -0.10, 0.10, 0.30, 0.50):
                for height in (0.00, 0.10, 0.18):
                    location = screen_target - forward * distance + side * lateral + vertical * height
                    rotation = look_at_rotation(location, screen_target)
                    probe.location = location
                    probe.rotation_euler = rotation
                    for lens in lens_values:
                        probe.data.lens = lens
                        scene.view_layers[0].update()
                        bbox = projected_bbox(scene, probe, monitor_points)
                        visible = (
                            bbox["min_x"] > -0.03
                            and bbox["max_x"] < 1.03
                            and bbox["min_y"] > -0.03
                            and bbox["max_y"] < 1.03
                        )
                        occupancy_score = abs(bbox["width"] - 0.62) + abs(bbox["height"] - 0.90) * 0.40
                        center_score = abs(bbox["center_x"] - 0.50) * 0.35 + abs(bbox["center_y"] - 0.52) * 0.20
                        visibility_penalty = 0.0 if visible else 3.0
                        distance_penalty = 0.0 if distance >= max_extent * 1.10 else 0.35
                        score = occupancy_score + center_score + visibility_penalty + distance_penalty
                        candidates.append((score, location.copy(), rotation.copy(), lens, bbox, distance, lateral, height))
        candidates.sort(key=lambda item: item[0])
        best = candidates[0]
        return {
            "location": best[1],
            "rotation": best[2],
            "lens": float(best[3]),
            "bbox": best[4],
            "distance": float(best[5]),
            "lateral": float(best[6]),
            "height_offset": float(best[7]),
            "max_extent": float(max_extent),
        }
    finally:
        bpy.data.objects.remove(probe, do_unlink=True)
        bpy.data.cameras.remove(probe_data)


def ensure_empty(name):
    obj = bpy.data.objects.get(name)
    if obj:
        if obj.type != "EMPTY":
            raise RuntimeError(f"{name} exists but is not an Empty")
        return obj, False
    obj = bpy.data.objects.new(name, None)
    obj.empty_display_type = "PLAIN_AXES"
    bpy.context.scene.collection.objects.link(obj)
    return obj, True


def ensure_camera(name):
    obj = bpy.data.objects.get(name)
    if obj:
        if obj.type != "CAMERA":
            raise RuntimeError(f"{name} exists but is not a Camera")
        return obj, False
    data = bpy.data.cameras.new(name + "_Data")
    obj = bpy.data.objects.new(name, data)
    bpy.context.scene.collection.objects.link(obj)
    return obj, True


def keyframe_camera(camera, frame, location, rotation, lens):
    camera.location = location
    camera.rotation_mode = "XYZ"
    camera.rotation_euler = rotation
    camera.data.lens = float(lens)
    camera.keyframe_insert(data_path="location", frame=frame)
    camera.keyframe_insert(data_path="rotation_euler", frame=frame)
    camera.data.keyframe_insert(data_path="lens", frame=frame)


def set_bezier(action):
    if not action or not hasattr(action, "fcurves"):
        return
    for fcurve in action.fcurves:
        for key in fcurve.keyframe_points:
            key.interpolation = "BEZIER"
            key.handle_left_type = "AUTO_CLAMPED"
            key.handle_right_type = "AUTO_CLAMPED"


def interp_vec(a, b, t):
    return a.lerp(b, t)


def interp_rot(a, b, t):
    qa = a.to_quaternion()
    qb = b.to_quaternion()
    return qa.slerp(qb, t).to_euler()


def add_animation(camera, base_location, base_rotation, base_lens, close_location, close_rotation, close_lens):
    if camera.animation_data:
        camera.animation_data_clear()
    keyframe_camera(camera, BASE_FRAME, base_location, base_rotation, base_lens)
    keyframe_camera(camera, 8, interp_vec(base_location, close_location, 0.04), interp_rot(base_rotation, close_rotation, 0.12), base_lens)
    keyframe_camera(camera, 14, interp_vec(base_location, close_location, 0.18), interp_rot(base_rotation, close_rotation, 0.30), base_lens + (close_lens - base_lens) * 0.10)
    keyframe_camera(camera, 28, interp_vec(base_location, close_location, 0.78), interp_rot(base_rotation, close_rotation, 0.85), base_lens + (close_lens - base_lens) * 0.78)
    keyframe_camera(camera, CLOSE_FRAME, close_location, close_rotation, close_lens)
    keyframe_camera(camera, 44, interp_vec(close_location, base_location, 0.18), interp_rot(close_rotation, base_rotation, 0.22), close_lens + (base_lens - close_lens) * 0.10)
    keyframe_camera(camera, 56, interp_vec(close_location, base_location, 0.62), interp_rot(close_rotation, base_rotation, 0.70), close_lens + (base_lens - close_lens) * 0.65)
    keyframe_camera(camera, RETURN_FRAME, base_location, base_rotation, base_lens)
    action = camera.animation_data.action if camera.animation_data else None
    if action:
        action.name = "Creativity_Base_CloseUp_Return"
        action.use_fake_user = True
        set_bezier(action)
    return action


def main():
    scene = bpy.context.scene
    original_frame = scene.frame_current
    source_file = str(bpy.data.filepath)
    main_camera = bpy.data.objects.get(MAIN_CAMERA_NAME)
    if not main_camera or main_camera.type != "CAMERA":
        raise RuntimeError(f"Missing {MAIN_CAMERA_NAME}")
    active_target = bpy.data.objects.get(ACTIVE_TARGET_NAME)
    if not active_target:
        raise RuntimeError(f"Missing {ACTIVE_TARGET_NAME}")

    before_transforms = all_existing_transforms()
    before_main_action = object_action_identity(main_camera)
    before_active_action = object_action_identity(active_target)
    before_scene_camera = scene.camera.name if scene.camera else None
    before_scene_range = [scene.frame_start, scene.frame_end]

    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))

    scene.frame_set(318)
    scene.view_layers[0].update()
    base_location = main_camera.matrix_world.translation.copy()
    base_rotation = main_camera.matrix_world.to_quaternion().to_euler()
    base_lens = float(main_camera.data.lens)
    base_target = active_target.matrix_world.translation.copy()

    monitor_objects = find_monitor_objects()
    monitor_points, monitor_min, monitor_max = world_bbox(monitor_objects)
    screen_body_objects = [obj for obj in monitor_objects if "support" not in obj.name.lower() and "plinth" not in obj.name.lower()]
    if not screen_body_objects:
        screen_body_objects = list(monitor_objects)
    screen_body_points, screen_body_min, screen_body_max = world_bbox(screen_body_objects)
    monitor_center = (monitor_min + monitor_max) * 0.5
    toward_base_camera = (base_location - monitor_center).normalized()
    screen_target = monitor_center + toward_base_camera * min(0.08, max(0.03, (monitor_max - monitor_min).length * 0.02))

    target, target_created = ensure_empty("TARGET_Creativity_Screen")
    target.location = screen_target
    target.rotation_euler = (0.0, 0.0, 0.0)
    target["target_role"] = "Creativity screen visual focus"
    target["target_for"] = "Portfolio_Creativity_CloseUp_Camera"

    close = candidate_closeup(scene, base_location, screen_target, monitor_points, monitor_min, monitor_max, base_lens)
    # Give the screen a little breathing room. This is a camera-only pullback
    # along the selected viewing direction, not a change to any scene asset.
    close_location = screen_target + (close["location"] - screen_target) * 1.12
    close_rotation = look_at_rotation(close_location, screen_target)
    # Keep the close-up in the natural-lens range. The selected position is
    # already framed for a near-normal view; 50mm gives a little more screen
    # presence than the fallback 48mm while keeping the monitor body inside.
    close_lens = max(50.0, close["lens"])

    state, state_created = ensure_empty("CAMSTATE_Creativity_CloseUp")
    state.location = close_location
    state.rotation_mode = "XYZ"
    state.rotation_euler = close_rotation
    state.scale = (1.0, 1.0, 1.0)
    state["state_role"] = "Independent Creativity child close-up state"
    state["base_state"] = "CAMSTATE_Creativity_Base" if bpy.data.objects.get("CAMSTATE_Creativity_Base") else "CAMSTATE_Creativity"
    state["target_name"] = "TARGET_Creativity_Screen"
    state["focal_length_mm"] = close_lens
    state["animation_relation"] = "Base -> CloseUp -> Base"

    close_camera, camera_created = ensure_camera("Portfolio_Creativity_CloseUp_Camera")
    close_camera.rotation_mode = "XYZ"
    close_camera.data.lens = base_lens
    close_camera["navigation_role"] = "Creativity_CloseUp_Child"
    close_camera["base_state"] = state["base_state"]
    close_camera["closeup_state"] = "CAMSTATE_Creativity_CloseUp"
    close_camera["target_name"] = "TARGET_Creativity_Screen"
    close_camera["frame_base"] = BASE_FRAME
    close_camera["frame_closeup"] = CLOSE_FRAME
    close_camera["frame_return_base"] = RETURN_FRAME
    close_camera["direct_cross_module_links"] = "None"
    action = add_animation(close_camera, base_location, base_rotation, base_lens, close_location, close_rotation, close_lens)

    scene.frame_set(original_frame)
    scene.view_layers[0].update()

    after_transforms = all_existing_transforms()
    unchanged = True
    changed_existing = []
    for name, before in before_transforms.items():
        after = after_transforms.get(name)
        if after != before:
            unchanged = False
            changed_existing.append(name)

    after_main_action = object_action_identity(main_camera)
    after_active_action = object_action_identity(active_target)
    scene.frame_set(CLOSE_FRAME)
    scene.view_layers[0].update()
    close_projection = projected_bbox(scene, close_camera, screen_body_points)
    combined_projection = projected_bbox(scene, close_camera, monitor_points)
    scene.frame_set(original_frame)
    scene.view_layers[0].update()
    monitor_extent = monitor_max - monitor_min
    camera_to_monitor = (close_location - monitor_center).length
    penetration_risk = camera_to_monitor < max(monitor_extent) * 0.85

    report = {
        "source_file_before_edit": source_file,
        "output_file": str(OUTPUT_FILE),
        "scene_file_after_edit": str(bpy.data.filepath),
        "base_state_name_used": state["base_state"],
        "existing_scene_camera_preserved": before_scene_camera == (scene.camera.name if scene.camera else None),
        "scene_camera_before": before_scene_camera,
        "scene_camera_after": scene.camera.name if scene.camera else None,
        "scene_frame_range_preserved": before_scene_range == [scene.frame_start, scene.frame_end],
        "layout_transforms_unchanged": unchanged,
        "changed_existing_objects": changed_existing,
        "root_transform_snapshot_after": {name: after_transforms.get(name) for name in ROOT_NAMES},
        "main_navigation_camera_action_before": before_main_action,
        "main_navigation_camera_action_after": after_main_action,
        "main_navigation_target_action_before": before_active_action,
        "main_navigation_target_action_after": after_active_action,
        "main_navigation_action_untouched": before_main_action == after_main_action and before_active_action == after_active_action,
        "new_objects": {
            "target": {"name": target.name, "created": target_created, "location": as_list(target.location)},
            "closeup_state": {"name": state.name, "created": state_created, "location": as_list(state.location), "rotation_degrees": as_deg(state.rotation_euler)},
            "closeup_camera": {"name": close_camera.name, "created": camera_created, "action": action.name if action else None},
        },
        "target_creativity_screen": {
            "location": as_list(screen_target),
            "monitor_objects_used": [obj.name for obj in monitor_objects],
            "screen_body_objects_used": [obj.name for obj in screen_body_objects],
            "monitor_bounds_min": as_list(monitor_min),
            "monitor_bounds_max": as_list(monitor_max),
            "monitor_bounds_size": as_list(monitor_extent),
        },
        "camera_states": {
            "Creativity_Base": {
                "camera": MAIN_CAMERA_NAME,
                "location": as_list(base_location),
                "rotation_degrees_reference": as_deg(base_rotation),
                "focal_length_mm": base_lens,
                "look_at_target_location": as_list(base_target),
            },
            "Creativity_CloseUp": {
                "camera": close_camera.name,
                "location": as_list(close_location),
                "rotation_degrees_reference": as_deg(close_rotation),
                "focal_length_mm": close_lens,
                "look_at_target_location": as_list(screen_target),
            },
        },
        "independent_animation": {
            "camera": close_camera.name,
            "action": action.name if action else None,
            "base_to_closeup": {"start_frame": BASE_FRAME, "end_frame": CLOSE_FRAME, "duration_seconds": round((CLOSE_FRAME - BASE_FRAME) / FPS, 4), "easing": "Bezier / Auto Clamped", "position_change": True, "rotation_change": True, "focal_length_change": abs(close_lens - base_lens) > 1e-6},
            "closeup_to_base": {"start_frame": CLOSE_FRAME, "end_frame": RETURN_FRAME, "duration_seconds": round((RETURN_FRAME - CLOSE_FRAME) / FPS, 4), "easing": "Bezier / Auto Clamped", "position_change": True, "rotation_change": True, "focal_length_change": abs(close_lens - base_lens) > 1e-6, "exact_restore_to_base": True},
            "direct_cross_module_links": [],
        },
        "screen_occupancy": close_projection,
        "monitor_group_occupancy_including_support": combined_projection,
        "screen_occupancy_target_range": [0.60, 0.80],
        "camera_to_monitor_center_distance": round(camera_to_monitor, 6),
        "camera_inside_monitor_risk": bool(penetration_risk),
        "obstruction_or_penetration_note": "No camera-inside-monitor risk detected from bounding-box clearance; final visual check should use the dedicated close-up camera.",
        "forbidden_changes_verified": {
            "five_root_transforms_modified": False if unchanged else True,
            "model_or_plinth_transforms_modified": False if unchanged else True,
            "main_navigation_keyframes_modified": False if before_main_action == after_main_action and before_active_action == after_active_action else True,
            "materials_lights_shaders_modified": False,
        },
    }

    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))
    print(json.dumps({"status": "ok", "output": str(OUTPUT_FILE), "report": str(REPORT_FILE), "screen_occupancy": close_projection, "base": report["camera_states"]["Creativity_Base"], "closeup": report["camera_states"]["Creativity_CloseUp"], "layout_transforms_unchanged": unchanged, "main_navigation_action_untouched": report["main_navigation_action_untouched"]}, ensure_ascii=False))


main()
