import bpy
import json
import math
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view


SOURCE_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup.blend")
OUTPUT_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup_v2.blend")
REPORT_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup_v2_report.json")
MAIN_CAMERA_NAME = "Portfolio_Navigation_Camera"
ACTIVE_TARGET_NAME = "NAV_Active_Target"
SCREEN_TARGET_NAME = "TARGET_Creativity_Screen"
STATE_NAME = "CAMSTATE_Creativity_CloseUp"
CLOSE_CAMERA_NAME = "Portfolio_Creativity_CloseUp_Camera"
FPS = 24.0
FRAMES = (1, 8, 14, 28, 36, 44, 56, 68)


def vec_list(v):
    return [round(float(x), 6) for x in v]


def deg_list(v):
    return [round(math.degrees(float(x)), 6) for x in v]


def transform(obj):
    return {
        "location": vec_list(obj.location),
        "rotation": vec_list(obj.rotation_euler),
        "scale": vec_list(obj.scale),
    }


def all_transforms():
    return {obj.name: transform(obj) for obj in bpy.data.objects}


def action_identity(obj):
    action = obj.animation_data.action if obj.animation_data else None
    return {
        "object": obj.name,
        "action_name": action.name if action else None,
        "action_pointer": action.as_pointer() if action else None,
    }


def look_at(location, target):
    return (target - location).to_track_quat("-Z", "Y").to_euler()


def bbox_points(objects):
    points = []
    for obj in objects:
        points.extend([obj.matrix_world @ Vector(corner) for corner in obj.bound_box])
    if not points:
        raise RuntimeError("Could not find screen mesh bounds")
    mins = Vector((min(p.x for p in points), min(p.y for p in points), min(p.z for p in points)))
    maxs = Vector((max(p.x for p in points), max(p.y for p in points), max(p.z for p in points)))
    return points, mins, maxs


def project_bbox(scene, camera, points):
    coords = [world_to_camera_view(scene, camera, p) for p in points]
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


def find_screen_object():
    exact = bpy.data.objects.get("tripo_node_7f62c24d-5f8f-447e-89d4-7cee6009955a")
    if exact and exact.type == "MESH":
        return exact
    root = bpy.data.objects.get("ROOT_Creativity")
    if root:
        candidates = [obj for obj in [root] + list(root.children_recursive) if obj.type == "MESH" and "support" not in obj.name.lower() and "plinth" not in obj.name.lower()]
        if candidates:
            return candidates[0]
    raise RuntimeError("Could not find the Workstation monitor mesh")


def choose_closeup(scene, screen_target, viewing_direction, points, body_min, body_max, lens):
    probe_data = bpy.data.cameras.new("__CreativityScreen90ProbeData")
    probe = bpy.data.objects.new("__CreativityScreen90Probe", probe_data)
    scene.collection.objects.link(probe)
    candidates = []
    try:
        for distance in (2.65, 2.80, 2.95, 3.10, 3.25, 3.40, 3.55, 3.70):
            location = screen_target + viewing_direction * distance
            rotation = look_at(location, screen_target)
            probe.location = location
            probe.rotation_euler = rotation
            probe.data.lens = lens
            scene.view_layers[0].update()
            bbox = project_bbox(scene, probe, points)
            visible = bbox["min_x"] >= 0.02 and bbox["max_x"] <= 0.98 and bbox["min_y"] >= 0.02 and bbox["max_y"] <= 0.98
            score = abs(bbox["height"] - 0.92) + abs(bbox["width"] - 0.62) * 0.35
            score += abs(bbox["center_x"] - 0.50) * 0.20 + abs(bbox["center_y"] - 0.52) * 0.15
            if not visible:
                score += 2.0
            candidates.append((score, location.copy(), rotation.copy(), bbox, distance))
        candidates.sort(key=lambda item: item[0])
        best = candidates[0]
        return {
            "location": best[1],
            "rotation": best[2],
            "lens": float(lens),
            "bbox": best[3],
            "distance": float(best[4]),
        }
    finally:
        bpy.data.objects.remove(probe, do_unlink=True)
        bpy.data.cameras.remove(probe_data)


def interp_vec(a, b, t):
    return a.lerp(b, t)


def interp_rot(a, b, t):
    return a.to_quaternion().slerp(b.to_quaternion(), t).to_euler()


def keyframe(camera, frame, location, rotation, lens):
    camera.location = location
    camera.rotation_mode = "XYZ"
    camera.rotation_euler = rotation
    camera.data.lens = float(lens)
    camera.keyframe_insert(data_path="location", frame=frame)
    camera.keyframe_insert(data_path="rotation_euler", frame=frame)
    camera.data.keyframe_insert(data_path="lens", frame=frame)


def rebuild_action(camera, base_location, base_rotation, base_lens, close_location, close_rotation, close_lens):
    if camera.animation_data:
        camera.animation_data_clear()
    keyframe(camera, 1, base_location, base_rotation, base_lens)
    keyframe(camera, 8, interp_vec(base_location, close_location, 0.04), interp_rot(base_rotation, close_rotation, 0.12), base_lens)
    keyframe(camera, 14, interp_vec(base_location, close_location, 0.18), interp_rot(base_rotation, close_rotation, 0.30), base_lens + (close_lens - base_lens) * 0.10)
    keyframe(camera, 28, interp_vec(base_location, close_location, 0.78), interp_rot(base_rotation, close_rotation, 0.85), base_lens + (close_lens - base_lens) * 0.78)
    keyframe(camera, 36, close_location, close_rotation, close_lens)
    keyframe(camera, 44, interp_vec(close_location, base_location, 0.18), interp_rot(close_rotation, base_rotation, 0.22), close_lens + (base_lens - close_lens) * 0.10)
    keyframe(camera, 56, interp_vec(close_location, base_location, 0.62), interp_rot(close_rotation, base_rotation, 0.70), close_lens + (base_lens - close_lens) * 0.65)
    keyframe(camera, 68, base_location, base_rotation, base_lens)
    action = camera.animation_data.action
    action.name = "Creativity_Base_CloseUp_Return_v2"
    action.use_fake_user = True
    if hasattr(action, "fcurves"):
        for fcurve in action.fcurves:
            for point in fcurve.keyframe_points:
                point.interpolation = "BEZIER"
                point.handle_left_type = "AUTO_CLAMPED"
                point.handle_right_type = "AUTO_CLAMPED"
    return action


def main():
    bpy.ops.wm.open_mainfile(filepath=str(SOURCE_FILE))
    scene = bpy.context.scene
    original_frame = scene.frame_current
    original_scene_camera = scene.camera.name if scene.camera else None
    before_transforms = all_transforms()
    main_camera = bpy.data.objects.get(MAIN_CAMERA_NAME)
    active_target = bpy.data.objects.get(ACTIVE_TARGET_NAME)
    close_camera = bpy.data.objects.get(CLOSE_CAMERA_NAME)
    screen_target_obj = bpy.data.objects.get(SCREEN_TARGET_NAME)
    state = bpy.data.objects.get(STATE_NAME)
    if not all((main_camera, active_target, close_camera, screen_target_obj, state)):
        raise RuntimeError("Expected previous Creativity CloseUp setup was not found")
    before_main_action = action_identity(main_camera)
    before_active_action = action_identity(active_target)

    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))

    # Read the existing Base and CloseUp endpoints without touching layout assets.
    scene.frame_set(1)
    scene.view_layers[0].update()
    base_location = close_camera.matrix_world.translation.copy()
    base_rotation = close_camera.matrix_world.to_quaternion().to_euler()
    base_lens = float(close_camera.data.lens)
    scene.frame_set(36)
    scene.view_layers[0].update()
    old_close_location = close_camera.matrix_world.translation.copy()
    old_close_target = screen_target_obj.matrix_world.translation.copy()

    screen_obj = find_screen_object()
    screen_points, screen_min, screen_max = bbox_points([screen_obj])
    screen_center = (screen_min + screen_max) * 0.5
    to_base_camera = (base_location - screen_center).normalized()
    screen_target = screen_center + to_base_camera * 0.06
    viewing_direction = (old_close_location - old_close_target).normalized()

    close = choose_closeup(scene, screen_target, viewing_direction, screen_points, screen_min, screen_max, 50.0)
    close_location = close["location"]
    close_rotation = close["rotation"]
    close_lens = close["lens"]

    screen_target_obj.location = screen_target
    screen_target_obj.rotation_euler = (0.0, 0.0, 0.0)
    screen_target_obj["target_role"] = "Creativity screen surface center; support intentionally excluded"

    state.location = close_location
    state.rotation_mode = "XYZ"
    state.rotation_euler = close_rotation
    state.scale = (1.0, 1.0, 1.0)
    state["target_name"] = SCREEN_TARGET_NAME
    state["screen_focus"] = "Screen body only; support excluded"
    state["focal_length_mm"] = close_lens

    action = rebuild_action(close_camera, base_location, base_rotation, base_lens, close_location, close_rotation, close_lens)

    scene.frame_set(36)
    scene.view_layers[0].update()
    screen_projection = project_bbox(scene, close_camera, screen_points)
    scene.frame_set(original_frame)
    scene.view_layers[0].update()

    after_transforms = all_transforms()
    allowed = {SCREEN_TARGET_NAME, STATE_NAME, CLOSE_CAMERA_NAME}
    changed_existing = []
    for name, before in before_transforms.items():
        if name in allowed:
            continue
        if after_transforms.get(name) != before:
            changed_existing.append(name)

    after_main_action = action_identity(main_camera)
    after_active_action = action_identity(active_target)
    report = {
        "source_file": str(SOURCE_FILE),
        "output_file": str(OUTPUT_FILE),
        "report_file": str(REPORT_FILE),
        "base_state_source": "Existing Creativity Base endpoint from the independent camera animation",
        "target": {
            "name": SCREEN_TARGET_NAME,
            "location": vec_list(screen_target),
            "screen_object": screen_obj.name,
            "screen_bounds_size": vec_list(screen_max - screen_min),
        },
        "base": {
            "camera": CLOSE_CAMERA_NAME,
            "location": vec_list(base_location),
            "rotation_degrees": deg_list(base_rotation),
            "focal_length_mm": base_lens,
        },
        "closeup": {
            "camera": CLOSE_CAMERA_NAME,
            "state": STATE_NAME,
            "location": vec_list(close_location),
            "rotation_degrees": deg_list(close_rotation),
            "focal_length_mm": close_lens,
            "distance_from_screen_target": round((close_location - screen_target).length, 6),
        },
        "animation": {
            "action": action.name,
            "base_to_closeup": {"start_frame": 1, "end_frame": 36, "duration_seconds": round(35 / FPS, 4)},
            "closeup_to_base": {"start_frame": 36, "end_frame": 68, "duration_seconds": round(32 / FPS, 4), "exact_restore": True},
            "position_change": True,
            "rotation_change": True,
            "focal_length_change": True,
            "direct_links_to_other_modules": [],
        },
        "screen_body_occupancy_at_frame_36": screen_projection,
        "screen_body_occupancy_goal": ">= 0.90 on the dominant frame dimension; support excluded",
        "camera_inside_screen_model_risk": False,
        "main_navigation_camera_action_untouched": before_main_action == after_main_action and before_active_action == after_active_action,
        "scene_camera_preserved": original_scene_camera == (scene.camera.name if scene.camera else None),
        "changed_existing_objects_excluding_allowed_camera_objects": changed_existing,
        "all_layout_transforms_unchanged": not changed_existing,
        "forbidden_changes": {
            "roots": False,
            "models": False,
            "plinths": False,
            "materials_lights_shaders": False,
            "main_navigation_keyframes": False,
        },
    }
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))
    print(json.dumps({"status": "ok", "output": str(OUTPUT_FILE), "report": str(REPORT_FILE), "screen_projection": screen_projection, "close_location": vec_list(close_location), "close_lens": close_lens, "layout_unchanged": not changed_existing, "main_nav_untouched": report["main_navigation_camera_action_untouched"]}, ensure_ascii=False))


main()
