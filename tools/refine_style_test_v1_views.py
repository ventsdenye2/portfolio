import bpy
import json
import math
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view


BLEND_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v1.blend")
REPORT_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v1_report.json")
PREVIEW_DIR = Path(r"D:\portfolio\portfolio")


def vlist(v):
    return [round(float(x), 6) for x in v]


def dlist(v):
    return [round(math.degrees(float(x)), 6) for x in v]


def snapshot(obj):
    return {"location": vlist(obj.location), "rotation": vlist(obj.rotation_euler), "scale": vlist(obj.scale)}


def all_transforms():
    return {obj.name: snapshot(obj) for obj in bpy.data.objects}


def mesh_descendants(root_name):
    root = bpy.data.objects.get(root_name)
    return [obj for obj in [root] + list(root.children_recursive) if obj and obj.type == "MESH"]


def points_for(objects):
    points = []
    for obj in objects:
        points.extend([obj.matrix_world @ Vector(c) for c in obj.bound_box])
    return points


def bounds(points):
    mins = Vector((min(p.x for p in points), min(p.y for p in points), min(p.z for p in points)))
    maxs = Vector((max(p.x for p in points), max(p.y for p in points), max(p.z for p in points)))
    return mins, maxs


def aim(obj, target):
    obj.rotation_mode = "XYZ"
    obj.rotation_euler = (target - obj.location).to_track_quat("-Z", "Y").to_euler()


def projection(scene, camera, points):
    cs = [world_to_camera_view(scene, camera, p) for p in points]
    xs = [float(c.x) for c in cs]
    ys = [float(c.y) for c in cs]
    return {"min_x": min(xs), "max_x": max(xs), "min_y": min(ys), "max_y": max(ys), "width": max(xs) - min(xs), "height": max(ys) - min(ys), "center_x": (min(xs) + max(xs)) / 2.0, "center_y": (min(ys) + max(ys)) / 2.0}


def find_view(camera, scene, objects):
    points = points_for(objects)
    mins, maxs = bounds(points)
    center = (mins + maxs) * 0.5
    extent = maxs - mins
    max_dim = max(extent.x, extent.y, extent.z)
    direction = Vector((1.15, -1.90, 0.95)).normalized()
    candidates = []
    for distance in (max_dim * 1.4, max_dim * 1.7, max_dim * 2.0, max_dim * 2.3, max_dim * 2.7, max_dim * 3.2, max_dim * 3.8):
        camera.location = center + direction * distance
        aim(camera, center)
        scene.view_layers[0].update()
        box = projection(scene, camera, points)
        visible = box["min_x"] >= 0.04 and box["max_x"] <= 0.96 and box["min_y"] >= 0.04 and box["max_y"] <= 0.96
        score = abs(box["width"] - 0.76) + abs(box["height"] - 0.70)
        if not visible:
            score += 2.0
        candidates.append((score, distance, center.copy(), box))
    candidates.sort(key=lambda x: x[0])
    best = candidates[0]
    camera.location = best[2] + direction * best[1]
    aim(camera, best[2])
    scene.view_layers[0].update()
    return best[3], best[2], best[1]


def brighten_materials():
    preview = bpy.data.materials.get("MAT_Sketch_Preview")
    if preview and preview.use_nodes:
        rgb_nodes = [n for n in preview.node_tree.nodes if n.bl_idname == "ShaderNodeRGB"]
        if rgb_nodes:
            rgb_nodes[0].outputs[0].default_value = (0.66, 0.635, 0.58, 1.0)
        if len(rgb_nodes) > 1:
            rgb_nodes[1].outputs[0].default_value = (0.40, 0.385, 0.35, 1.0)
    ground = bpy.data.materials.get("MAT_Sketch_Ground")
    if ground and ground.use_nodes:
        bsdf = next((n for n in ground.node_tree.nodes if n.bl_idname == "ShaderNodeBsdfPrincipled"), None)
        if bsdf:
            bsdf.inputs["Base Color"].default_value = (0.60, 0.57, 0.52, 1.0)
            bsdf.inputs["Roughness"].default_value = 0.95


def main():
    bpy.ops.wm.open_mainfile(filepath=str(BLEND_FILE))
    scene = bpy.context.scene
    original_frame = scene.frame_current
    before_transforms = all_transforms()
    main_cam = bpy.data.objects.get("Portfolio_Navigation_Camera")
    main_action = main_cam.animation_data.action.as_pointer() if main_cam and main_cam.animation_data and main_cam.animation_data.action else None

    brighten_materials()
    world = scene.world
    if world and world.use_nodes:
        bg = world.node_tree.nodes.get("Background")
        if bg:
            bg.inputs["Color"].default_value = (0.56, 0.53, 0.48, 1.0)
            bg.inputs["Strength"].default_value = 0.45

    key = bpy.data.objects.get("Style_Key_Area")
    fill = bpy.data.objects.get("Style_Fill_Area")
    rim = bpy.data.objects.get("Style_Rim_Area")
    if key:
        key.data.energy = 2600.0
    if fill:
        fill.data.energy = 820.0
    if rim:
        rim.data.energy = 260.0

    view_layer = scene.view_layers[0]
    if scene.render.use_freestyle and view_layer.freestyle_settings.linesets:
        linestyle = view_layer.freestyle_settings.linesets[0].linestyle
        linestyle.thickness = 1.05
        try:
            linestyle.color = (0.085, 0.08, 0.075, 1.0)
        except Exception:
            linestyle.color = (0.085, 0.08, 0.075)

    scene.render.resolution_x = 960
    scene.render.resolution_y = 720
    scene.render.resolution_percentage = 100
    try:
        scene.view_settings.look = "AgX - Medium Low Contrast"
    except Exception:
        pass
    scene.view_settings.exposure = 0.7

    camera = bpy.data.objects.get("Style_Test_Camera")
    if not camera or camera.type != "CAMERA":
        raise RuntimeError("Style_Test_Camera not found")
    camera.data.lens = 55.0

    asset_map = {
        "Workstation_Desk": mesh_descendants("ROOT_Projects"),
        "Workstation_Monitor": mesh_descendants("ROOT_Creativity"),
        "Kendo_Gear": mesh_descendants("ROOT_Kendo"),
    }
    views = {}
    hide_render_snapshot = {obj.name: obj.hide_render for obj in bpy.data.objects}
    all_mesh_objects = [obj for obj in bpy.data.objects if obj.type == "MESH"]
    for label, objects in asset_map.items():
        keep_names = {obj.name for obj in objects}
        for obj in all_mesh_objects:
            if obj.name == "Portfolio_Ground_Plane" or obj.name in keep_names:
                obj.hide_render = False
            else:
                obj.hide_render = True
        box, center, distance = find_view(camera, scene, objects)
        path = PREVIEW_DIR / f"portfolio_style_test_v1_{label.lower()}.png"
        scene.render.filepath = str(path)
        scene.camera = camera
        scene.view_layers[0].update()
        bpy.ops.render.render(write_still=True)
        views[label] = {"preview": str(path), "location": vlist(camera.location), "rotation_degrees": dlist(camera.rotation_euler), "focal_length_mm": camera.data.lens, "framing": box, "target_center": vlist(center), "distance": round(float(distance), 6)}

    for name, hidden in hide_render_snapshot.items():
        obj = bpy.data.objects.get(name)
        if obj:
            obj.hide_render = hidden

    # Leave the test camera at the desk view for immediate inspection.
    desk_view = views["Workstation_Desk"]
    camera.location = Vector(desk_view["location"])
    camera.rotation_euler = tuple(math.radians(x) for x in desk_view["rotation_degrees"])
    scene.camera = camera
    scene.frame_set(original_frame)
    scene.view_layers[0].update()

    after_transforms = all_transforms()
    allowed = {"Style_Test_Camera", "Style_Key_Area", "Style_Fill_Area", "Style_Rim_Area"}
    changed_existing = [name for name in before_transforms if name not in allowed and after_transforms.get(name) != before_transforms.get(name)]
    report = json.loads(REPORT_FILE.read_text(encoding="utf-8")) if REPORT_FILE.exists() else {}
    report["preview_views"] = views
    report["style_camera_final_view"] = "Workstation_Desk"
    report["lighting"]["Style_Key_Area"]["energy_w"] = 2600.0
    report["lighting"]["Style_Fill_Area"]["energy_w"] = 820.0
    report["lighting"]["Style_Rim_Area"]["energy_w"] = 260.0
    report["world"]["background_color"] = [0.56, 0.53, 0.48, 1.0]
    report["world"]["strength"] = 0.45
    report["preservation"]["changed_existing_objects_excluding_style_objects"] = changed_existing
    report["preservation"]["layout_and_model_transforms_unchanged"] = not changed_existing
    report["preservation"]["main_navigation_action_untouched"] = main_action == (main_cam.animation_data.action.as_pointer() if main_cam and main_cam.animation_data and main_cam.animation_data.action else None)
    report["style_assessment"]["preview_views_rendered"] = True
    report["style_assessment"]["preview_render_isolation"] = "Each render temporarily hid non-target meshes and restored their hide_render state before saving"
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(BLEND_FILE))
    print(json.dumps({"status": "ok", "blend": str(BLEND_FILE), "views": views, "changed_existing": changed_existing, "main_nav_untouched": report["preservation"]["main_navigation_action_untouched"]}, ensure_ascii=False))


main()
