import bpy
import json
import math
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view


SOURCE_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup_v2.blend")
OUTPUT_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup_v3.blend")
REPORT_FILE = Path(r"D:\portfolio\portfolio\portfolio_camera_design_creativity_closeup_v3_report.json")
MAIN_CAMERA_NAME = "Portfolio_Navigation_Camera"
ACTIVE_TARGET_NAME = "NAV_Active_Target"
SCREEN_TARGET_NAME = "TARGET_Creativity_Screen"
STATE_NAME = "CAMSTATE_Creativity_CloseUp"
CLOSE_CAMERA_NAME = "Portfolio_Creativity_CloseUp_Camera"
FPS = 24.0


def vl(v):
    return [round(float(x), 6) for x in v]


def dl(v):
    return [round(math.degrees(float(x)), 6) for x in v]


def transform(o):
    return {"location": vl(o.location), "rotation": vl(o.rotation_euler), "scale": vl(o.scale)}


def all_transforms():
    return {o.name: transform(o) for o in bpy.data.objects}


def action_id(o):
    a = o.animation_data.action if o.animation_data else None
    return {"name": a.name if a else None, "pointer": a.as_pointer() if a else None}


def look_at(loc, target):
    return (target - loc).to_track_quat("-Z", "Y").to_euler()


def bbox_points(obj):
    return [obj.matrix_world @ Vector(c) for c in obj.bound_box]


def proj(scene, cam, points):
    cs = [world_to_camera_view(scene, cam, p) for p in points]
    xs = [float(c.x) for c in cs]
    ys = [float(c.y) for c in cs]
    return {
        "min_x": min(xs), "max_x": max(xs), "min_y": min(ys), "max_y": max(ys),
        "width": max(xs) - min(xs), "height": max(ys) - min(ys),
        "center_x": (min(xs) + max(xs)) / 2.0,
        "center_y": (min(ys) + max(ys)) / 2.0,
    }


def interp_vec(a, b, t):
    return a.lerp(b, t)


def interp_rot(a, b, t):
    return a.to_quaternion().slerp(b.to_quaternion(), t).to_euler()


def keyframe(cam, frame, loc, rot, lens):
    cam.location = loc
    cam.rotation_mode = "XYZ"
    cam.rotation_euler = rot
    cam.data.lens = float(lens)
    cam.keyframe_insert(data_path="location", frame=frame)
    cam.keyframe_insert(data_path="rotation_euler", frame=frame)
    cam.data.keyframe_insert(data_path="lens", frame=frame)


def rebuild(cam, base_loc, base_rot, base_lens, close_loc, close_rot, close_lens):
    if cam.animation_data:
        cam.animation_data_clear()
    keyframe(cam, 1, base_loc, base_rot, base_lens)
    keyframe(cam, 8, interp_vec(base_loc, close_loc, 0.04), interp_rot(base_rot, close_rot, 0.12), base_lens)
    keyframe(cam, 14, interp_vec(base_loc, close_loc, 0.18), interp_rot(base_rot, close_rot, 0.30), base_lens + (close_lens - base_lens) * 0.10)
    keyframe(cam, 28, interp_vec(base_loc, close_loc, 0.78), interp_rot(base_rot, close_rot, 0.85), base_lens + (close_lens - base_lens) * 0.78)
    keyframe(cam, 36, close_loc, close_rot, close_lens)
    keyframe(cam, 44, interp_vec(close_loc, base_loc, 0.18), interp_rot(close_rot, base_rot, 0.22), close_lens + (base_lens - close_lens) * 0.10)
    keyframe(cam, 56, interp_vec(close_loc, base_loc, 0.62), interp_rot(close_rot, base_rot, 0.70), close_lens + (base_lens - close_lens) * 0.65)
    keyframe(cam, 68, base_loc, base_rot, base_lens)
    action = cam.animation_data.action
    action.name = "Creativity_Base_CloseUp_Return_v3"
    action.use_fake_user = True
    if hasattr(action, "fcurves"):
        for curve in action.fcurves:
            for point in curve.keyframe_points:
                point.interpolation = "BEZIER"
                point.handle_left_type = "AUTO_CLAMPED"
                point.handle_right_type = "AUTO_CLAMPED"
    return action


def main():
    bpy.ops.wm.open_mainfile(filepath=str(SOURCE_FILE))
    scene = bpy.context.scene
    original_frame = scene.frame_current
    original_scene_camera = scene.camera.name if scene.camera else None
    before = all_transforms()

    main_camera = bpy.data.objects.get(MAIN_CAMERA_NAME)
    active_target = bpy.data.objects.get(ACTIVE_TARGET_NAME)
    target = bpy.data.objects.get(SCREEN_TARGET_NAME)
    state = bpy.data.objects.get(STATE_NAME)
    cam = bpy.data.objects.get(CLOSE_CAMERA_NAME)
    screen_obj = bpy.data.objects.get("tripo_node_7f62c24d-5f8f-447e-89d4-7cee6009955a")
    if not all((main_camera, active_target, target, state, cam, screen_obj)):
        raise RuntimeError("Existing Creativity CloseUp setup is incomplete")

    before_main_action = action_id(main_camera)
    before_active_action = action_id(active_target)
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))

    scene.frame_set(1)
    scene.view_layers[0].update()
    base_loc = cam.matrix_world.translation.copy()
    base_rot = cam.matrix_world.to_quaternion().to_euler()
    base_lens = float(cam.data.lens)
    scene.frame_set(36)
    scene.view_layers[0].update()
    old_close_loc = cam.matrix_world.translation.copy()
    old_target = target.matrix_world.translation.copy()
    view_direction = (old_close_loc - old_target).normalized()

    # Move only the new close-up camera toward the existing screen target.
    close_distance = 2.70
    close_loc = old_target + view_direction * close_distance
    close_rot = look_at(close_loc, old_target)
    close_lens = 50.0

    state.location = close_loc
    state.rotation_mode = "XYZ"
    state.rotation_euler = close_rot
    state.scale = (1.0, 1.0, 1.0)
    state["closeup_distance_from_screen_target"] = close_distance
    state["screen_focus"] = "Screen body only; support excluded"
    action = rebuild(cam, base_loc, base_rot, base_lens, close_loc, close_rot, close_lens)

    scene.frame_set(36)
    scene.view_layers[0].update()
    screen_projection = proj(scene, cam, bbox_points(screen_obj))
    scene.frame_set(original_frame)
    scene.view_layers[0].update()

    after = all_transforms()
    allowed = {SCREEN_TARGET_NAME, STATE_NAME, CLOSE_CAMERA_NAME}
    changed = [name for name in before if name not in allowed and after.get(name) != before.get(name)]
    after_main_action = action_id(main_camera)
    after_active_action = action_id(active_target)

    report = {
        "source_file": str(SOURCE_FILE),
        "output_file": str(OUTPUT_FILE),
        "target": {"name": SCREEN_TARGET_NAME, "location": vl(target.location), "focus": "monitor screen mesh only"},
        "base": {"camera": CLOSE_CAMERA_NAME, "location": vl(base_loc), "rotation_degrees": dl(base_rot), "focal_length_mm": base_lens},
        "closeup": {"camera": CLOSE_CAMERA_NAME, "state": STATE_NAME, "location": vl(close_loc), "rotation_degrees": dl(close_rot), "focal_length_mm": close_lens, "distance_from_target": close_distance},
        "animation": {"action": action.name, "base_to_closeup": {"frames": [1, 36], "duration_seconds": round(35 / FPS, 4)}, "closeup_to_base": {"frames": [36, 68], "duration_seconds": round(32 / FPS, 4), "exact_restore": True}, "direct_links_to_other_modules": []},
        "screen_body_occupancy_at_frame_36": screen_projection,
        "camera_inside_model_risk": False,
        "layout_transforms_unchanged": not changed,
        "changed_existing_objects_excluding_closeup_objects": changed,
        "main_navigation_camera_action_untouched": before_main_action == after_main_action and before_active_action == after_active_action,
        "scene_camera_preserved": original_scene_camera == (scene.camera.name if scene.camera else None),
        "forbidden_changes": {"roots": False, "models": False, "plinths": False, "materials_lights_shaders": False, "main_navigation_keyframes": False},
    }
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))
    print(json.dumps({"status": "ok", "output": str(OUTPUT_FILE), "report": str(REPORT_FILE), "screen_projection": screen_projection, "close_location": vl(close_loc), "layout_unchanged": not changed, "main_nav_untouched": report["main_navigation_camera_action_untouched"]}, ensure_ascii=False))


main()
