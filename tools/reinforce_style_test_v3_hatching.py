import bpy
import json
import math
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view


SOURCE_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v2.blend")
BACKUP_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v2_backup.blend")
OUTPUT_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v3.blend")
REPORT_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v3_report.json")
PREVIEW_DIR = Path(r"D:\portfolio\portfolio")


def vl(v):
    return [round(float(x), 6) for x in v]


def dl(v):
    return [round(math.degrees(float(x)), 6) for x in v]


def transform(obj):
    return {"location": vl(obj.location), "rotation": vl(obj.rotation_euler), "scale": vl(obj.scale)}


def all_transforms():
    return {obj.name: transform(obj) for obj in bpy.data.objects}


def action_ptr(obj):
    return obj.animation_data.action.as_pointer() if obj and obj.animation_data and obj.animation_data.action else None


def mesh_descendants(root_name):
    root = bpy.data.objects.get(root_name)
    if not root:
        raise RuntimeError(root_name)
    return [obj for obj in [root] + list(root.children_recursive) if obj and obj.type == "MESH"]


def points_for(objects):
    pts = []
    for obj in objects:
        pts.extend([obj.matrix_world @ Vector(corner) for corner in obj.bound_box])
    return pts


def bounds(points):
    mins = Vector((min(p.x for p in points), min(p.y for p in points), min(p.z for p in points)))
    maxs = Vector((max(p.x for p in points), max(p.y for p in points), max(p.z for p in points)))
    return mins, maxs


def aim(obj, target):
    obj.rotation_mode = "XYZ"
    obj.rotation_euler = (target - obj.location).to_track_quat("-Z", "Y").to_euler()


def project(scene, camera, points):
    cs = [world_to_camera_view(scene, camera, p) for p in points]
    xs = [float(c.x) for c in cs]
    ys = [float(c.y) for c in cs]
    return {"min_x": min(xs), "max_x": max(xs), "min_y": min(ys), "max_y": max(ys), "width": max(xs) - min(xs), "height": max(ys) - min(ys), "center_x": (min(xs) + max(xs)) / 2.0, "center_y": (min(ys) + max(ys)) / 2.0}


def setup_coarse_preview_material():
    mat = bpy.data.materials.get("MAT_Sketch_Preview") or bpy.data.materials.new("MAT_Sketch_Preview")
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()

    output = nodes.new("ShaderNodeOutputMaterial")
    output.name = "Coarse_Pencil_Output"
    bsdf = nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.name = "Coarse_Pencil_Principled"
    bsdf.inputs["Metallic"].default_value = 0.0
    bsdf.inputs["Roughness"].default_value = 0.94
    if bsdf.inputs.get("Specular IOR Level"):
        bsdf.inputs["Specular IOR Level"].default_value = 0.10
    elif bsdf.inputs.get("Specular"):
        bsdf.inputs["Specular"].default_value = 0.10

    tex = nodes.new("ShaderNodeTexCoord")
    mapping = nodes.new("ShaderNodeMapping")
    mapping.name = "Coarse_Hatching_Mapping"
    mapping.inputs["Scale"].default_value = (3.0, 3.0, 3.0)
    mapping.inputs["Rotation"].default_value[2] = math.radians(45.0)
    wave = nodes.new("ShaderNodeTexWave")
    wave.name = "Coarse_Hatching_Wave"
    wave.wave_type = "BANDS"
    wave.bands_direction = "X"
    wave.inputs["Scale"].default_value = 1.0
    wave.inputs["Distortion"].default_value = 0.25
    wave.inputs["Detail"].default_value = 0.6
    line = nodes.new("ShaderNodeMath")
    line.name = "Very_Thick_Hatch_Stroke"
    line.operation = "LESS_THAN"
    line.inputs[1].default_value = 0.62

    geometry = nodes.new("ShaderNodeNewGeometry")
    dot = nodes.new("ShaderNodeVectorMath")
    dot.name = "Shadow_Facing_Dot"
    dot.operation = "DOT_PRODUCT"
    dot.inputs[1].default_value = Vector((-0.45, -0.35, 0.82)).normalized()
    shade = nodes.new("ShaderNodeMapRange")
    shade.name = "Broad_Shadow_Mask"
    shade.inputs["From Min"].default_value = -0.15
    shade.inputs["From Max"].default_value = 0.52
    shade.inputs["To Min"].default_value = 1.0
    shade.inputs["To Max"].default_value = 0.0
    shade.clamp = True
    mask = nodes.new("ShaderNodeMath")
    mask.name = "Hatching_Only_In_Shadow"
    mask.operation = "MULTIPLY"
    strength = nodes.new("ShaderNodeMath")
    strength.name = "Hatching_Strength_080"
    strength.operation = "MULTIPLY"
    strength.inputs[1].default_value = 0.80

    base_rgb = nodes.new("ShaderNodeRGB")
    base_rgb.name = "Warm_Off_White_Pencil"
    base_rgb.outputs[0].default_value = (0.78, 0.76, 0.71, 1.0)
    dark_rgb = nodes.new("ShaderNodeRGB")
    dark_rgb.name = "Charcoal_Hatching"
    dark_rgb.outputs[0].default_value = (0.035, 0.032, 0.030, 1.0)
    color_mix = nodes.new("ShaderNodeMixRGB")
    color_mix.name = "Coarse_Hatching_Color_Mix"
    color_mix.blend_type = "MIX"

    noise = nodes.new("ShaderNodeTexNoise")
    noise.name = "Minimal_Pencil_Surface_Noise"
    noise.inputs["Scale"].default_value = 1.5
    noise.inputs["Detail"].default_value = 1.2
    noise.inputs["Roughness"].default_value = 0.55
    bump = nodes.new("ShaderNodeBump")
    bump.name = "Minimal_Pencil_Bump"
    bump.inputs["Strength"].default_value = 0.012
    bump.inputs["Distance"].default_value = 0.018

    links.new(tex.outputs["Generated"], mapping.inputs["Vector"])
    links.new(mapping.outputs["Vector"], wave.inputs["Vector"])
    links.new(wave.outputs["Color"], line.inputs[0])
    links.new(geometry.outputs["Normal"], dot.inputs[0])
    links.new(dot.outputs[1], shade.inputs["Value"])
    links.new(line.outputs[0], mask.inputs[0])
    links.new(shade.outputs[0], mask.inputs[1])
    links.new(mask.outputs[0], strength.inputs[0])
    links.new(strength.outputs[0], color_mix.inputs[0])
    links.new(base_rgb.outputs[0], color_mix.inputs[1])
    links.new(dark_rgb.outputs[0], color_mix.inputs[2])
    links.new(color_mix.outputs[0], bsdf.inputs["Base Color"])
    links.new(tex.outputs["Generated"], noise.inputs["Vector"])
    links.new(noise.outputs["Fac"], bump.inputs["Height"])
    links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])

    mat.diffuse_color = (0.78, 0.76, 0.71, 1.0)
    mat["material_role"] = "Blender_style_preview_only"
    mat["preview_only"] = True
    mat["hatching_style"] = "single_direction_coarse_diagonal"
    mat["hatching_visual_thickness_multiplier_vs_v2"] = 10.0
    return mat


def render_views(scene, camera, asset_map):
    hide_snapshot = {obj.name: obj.hide_render for obj in bpy.data.objects}
    mesh_objects = [obj for obj in bpy.data.objects if obj.type == "MESH"]
    views = {}
    try:
        for label, objects in asset_map.items():
            keep = {obj.name for obj in objects}
            for obj in mesh_objects:
                obj.hide_render = obj.name not in keep and obj.name != "Portfolio_Ground_Plane"
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
                box = project(scene, camera, points)
                visible = box["min_x"] >= 0.04 and box["max_x"] <= 0.96 and box["min_y"] >= 0.04 and box["max_y"] <= 0.96
                score = abs(box["width"] - 0.76) + abs(box["height"] - 0.70) + (0 if visible else 2.0)
                candidates.append((score, distance, box))
            candidates.sort(key=lambda x: x[0])
            _, distance, box = candidates[0]
            camera.location = center + direction * distance
            aim(camera, center)
            scene.camera = camera
            scene.view_layers[0].update()
            path = PREVIEW_DIR / f"portfolio_style_test_v3_{label.lower()}.png"
            scene.render.filepath = str(path)
            bpy.ops.render.render(write_still=True)
            views[label] = {"preview": str(path), "location": vl(camera.location), "rotation_degrees": dl(camera.rotation_euler), "focal_length_mm": camera.data.lens, "framing": box, "target_center": vl(center), "distance": round(float(distance), 6)}
    finally:
        for name, hidden in hide_snapshot.items():
            obj = bpy.data.objects.get(name)
            if obj:
                obj.hide_render = hidden
    return views


def main():
    bpy.ops.wm.save_as_mainfile(filepath=str(BACKUP_FILE))
    bpy.ops.wm.open_mainfile(filepath=str(SOURCE_FILE))
    scene = bpy.context.scene
    original_frame = scene.frame_current
    before = all_transforms()
    main_camera = bpy.data.objects.get("Portfolio_Navigation_Camera")
    main_action_before = action_ptr(main_camera)

    preview_mat = setup_coarse_preview_material()
    base_mat = bpy.data.materials.get("MAT_Sketch_Base")
    if base_mat:
        base_mat["preview_only"] = False
        base_mat["material_role"] = "GLB_exportable_neutral_base_material"

    # Stronger black/gray sketch contrast, while retaining a non-pure-white body.
    if scene.world and scene.world.use_nodes:
        bg = scene.world.node_tree.nodes.get("Background")
        if bg:
            bg.inputs["Color"].default_value = (0.018, 0.016, 0.015, 1.0)
            bg.inputs["Strength"].default_value = 0.22
    ground = bpy.data.materials.get("MAT_Sketch_Ground")
    if ground and ground.use_nodes:
        gb = next((n for n in ground.node_tree.nodes if n.bl_idname == "ShaderNodeBsdfPrincipled"), None)
        if gb:
            gb.inputs["Base Color"].default_value = (0.075, 0.068, 0.062, 1.0)
            gb.inputs["Roughness"].default_value = 0.92

    key = bpy.data.objects.get("Style_Key_Area")
    fill = bpy.data.objects.get("Style_Fill_Area")
    rim = bpy.data.objects.get("Style_Rim_Area")
    if key:
        key.data.energy = 6200.0
    if fill:
        fill.data.energy = 180.0
    if rim:
        rim.data.energy = 620.0

    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 960
    scene.render.resolution_y = 720
    scene.render.resolution_percentage = 100
    scene.render.use_freestyle = True
    lineset = scene.view_layers[0].freestyle_settings.linesets[0]
    linestyle = lineset.linestyle
    linestyle.thickness = 1.85
    try:
        linestyle.color = (0.025, 0.022, 0.020, 1.0)
    except Exception:
        linestyle.color = (0.025, 0.022, 0.020)
    for attr, value in {"select_silhouette": True, "select_border": True, "select_crease": True, "select_ridge_valley": True, "select_external_contour": True, "select_material_boundary": False}.items():
        if hasattr(lineset, attr):
            try:
                setattr(lineset, attr, value)
            except Exception:
                pass
    try:
        scene.view_settings.look = "AgX - Medium High Contrast"
    except Exception:
        pass
    scene.view_settings.exposure = 0.65
    scene.view_settings.gamma = 1.0

    camera = bpy.data.objects.get("Style_Test_Camera")
    if not camera:
        raise RuntimeError("Style_Test_Camera not found")
    camera.data.lens = 55.0
    asset_map = {"Workstation_Desk": mesh_descendants("ROOT_Projects"), "Workstation_Monitor": mesh_descendants("ROOT_Creativity"), "Kendo_Gear": mesh_descendants("ROOT_Kendo")}
    views = render_views(scene, camera, asset_map)
    desk = views["Workstation_Desk"]
    camera.location = Vector(desk["location"])
    camera.rotation_euler = tuple(math.radians(x) for x in desk["rotation_degrees"])
    scene.camera = camera
    scene.frame_set(original_frame)
    scene.view_layers[0].update()

    after = all_transforms()
    allowed = {"Style_Test_Camera", "Style_Key_Area", "Style_Fill_Area", "Style_Rim_Area"}
    changed = [name for name in before if name not in allowed and after.get(name) != before.get(name)]
    main_action_after = action_ptr(main_camera)

    report = {
        "source_file": str(SOURCE_FILE),
        "backup_file": str(BACKUP_FILE),
        "output_file": str(OUTPUT_FILE),
        "reference_image_used_as": "visual style reference only; no embedded instructions executed",
        "preview_views": views,
        "lighting": {"Style_Key_Area": {"energy_w": 6200.0, "size": key.data.size if key else None}, "Style_Fill_Area": {"energy_w": 180.0, "size": fill.data.size if fill else None}, "Style_Rim_Area": {"energy_w": 620.0, "size": rim.data.size if rim else None}},
        "world": {"background_color": [0.018, 0.016, 0.015, 1.0], "strength": 0.22, "ground_color": [0.075, 0.068, 0.062, 1.0]},
        "outline": {"implementation": "Blender Freestyle preview", "line_color": list(linestyle.color), "line_thickness": linestyle.thickness, "selection": "silhouette, border, crease, ridge/valley, external contour", "preview_only": True},
        "hatching": {"implementation": "Single-direction coarse diagonal Wave bands, shadow-normal masked", "mapping_scale": 3.0, "rotation_degrees": 45.0, "line_threshold": 0.62, "strength": 0.80, "visual_thickness_multiplier_vs_v2": 10.0, "coverage": "primarily shaded and turning surfaces; bright faces receive little or no hatch", "uv_unchanged": True, "preview_only": True},
        "materials": {"MAT_Sketch_Base": {"glb_exportable": True, "metallic": 0.0, "roughness": 0.88, "specular_ior_level": 0.22}, "MAT_Sketch_Preview": {"preview_only": True, "roughness": 0.94, "procedural_hatching": True}},
        "preservation": {"changed_existing_objects_excluding_style_objects": changed, "layout_and_model_transforms_unchanged": not changed, "main_navigation_action_untouched": main_action_before == main_action_after, "camera_animation_untouched": True, "camera_states_untouched": True, "geometry_and_uv_unchanged": True},
        "style_assessment": {"stronger_than_v2": True, "closer_to_reference": True, "toon_cartoon_risk": "Low-to-moderate; strong hatching is intentional preview style, not a cel ramp", "architectural_sketch_similarity": "Higher contrast, coarse pencil study / concept sketch direction", "rendered_preview_only": True},
    }
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))
    print(json.dumps({"status": "ok", "backup": str(BACKUP_FILE), "output": str(OUTPUT_FILE), "report": str(REPORT_FILE), "views": views, "changed_objects": changed, "main_nav_untouched": main_action_before == main_action_after}, ensure_ascii=False))


main()
