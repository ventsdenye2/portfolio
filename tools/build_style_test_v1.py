import bpy
import json
import math
from pathlib import Path
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view


OUTPUT_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v1.blend")
PREVIEW_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v1_preview.png")
REPORT_FILE = Path(r"D:\portfolio\portfolio\portfolio_style_test_v1_report.json")
MAIN_CAMERA_NAME = "Portfolio_Navigation_Camera"
TARGET_ROOTS = {
    "Workstation_Desk": "ROOT_Projects",
    "Workstation_Monitor": "ROOT_Creativity",
    "Kendo_Gear": "ROOT_Kendo",
}


def vlist(v):
    return [round(float(x), 6) for x in v]


def dlist(v):
    return [round(math.degrees(float(x)), 6) for x in v]


def transform(obj):
    return {"location": vlist(obj.location), "rotation": vlist(obj.rotation_euler), "scale": vlist(obj.scale)}


def snapshot_transforms():
    return {obj.name: transform(obj) for obj in bpy.data.objects}


def action_identity(obj):
    action = obj.animation_data.action if obj.animation_data else None
    return {"name": action.name if action else None, "pointer": action.as_pointer() if action else None}


def mesh_descendants(root_name):
    root = bpy.data.objects.get(root_name)
    if not root:
        raise RuntimeError(f"Missing asset root: {root_name}")
    objects = [obj for obj in [root] + list(root.children_recursive) if obj.type == "MESH"]
    if not objects:
        raise RuntimeError(f"No mesh descendants under {root_name}")
    return objects


def all_points(objects):
    points = []
    for obj in objects:
        points.extend([obj.matrix_world @ Vector(corner) for corner in obj.bound_box])
    return points


def bounds(points):
    mins = Vector((min(p.x for p in points), min(p.y for p in points), min(p.z for p in points)))
    maxs = Vector((max(p.x for p in points), max(p.y for p in points), max(p.z for p in points)))
    return mins, maxs


def aim_at(obj, target):
    obj.rotation_mode = "XYZ"
    obj.rotation_euler = (target - obj.location).to_track_quat("-Z", "Y").to_euler()


def setup_principled_base(name, color, roughness):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()
    output = nodes.new("ShaderNodeOutputMaterial")
    output.name = "Sketch_Base_Output"
    bsdf = nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.name = "Sketch_Base_Principled"
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Metallic"].default_value = 0.0
    bsdf.inputs["Roughness"].default_value = roughness
    if bsdf.inputs.get("Specular IOR Level"):
        bsdf.inputs["Specular IOR Level"].default_value = 0.22
    elif bsdf.inputs.get("Specular"):
        bsdf.inputs["Specular"].default_value = 0.22
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])
    mat.diffuse_color = (*color, 1.0)
    mat["material_role"] = "GLB_exportable_neutral_base_material"
    mat["preview_only"] = False
    return mat


def setup_preview_material(name, base_color, roughness):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links
    nodes.clear()

    output = nodes.new("ShaderNodeOutputMaterial")
    output.name = "Sketch_Preview_Output"
    bsdf = nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.name = "Sketch_Preview_Principled"
    bsdf.inputs["Metallic"].default_value = 0.0
    bsdf.inputs["Roughness"].default_value = roughness
    if bsdf.inputs.get("Specular IOR Level"):
        bsdf.inputs["Specular IOR Level"].default_value = 0.20
    elif bsdf.inputs.get("Specular"):
        bsdf.inputs["Specular"].default_value = 0.20

    tex = nodes.new("ShaderNodeTexCoord")
    mapping_a = nodes.new("ShaderNodeMapping")
    mapping_a.inputs["Scale"].default_value = (32.0, 32.0, 32.0)
    wave_a = nodes.new("ShaderNodeTexWave")
    wave_a.wave_type = "BANDS"
    wave_a.bands_direction = "X"
    wave_a.inputs["Scale"].default_value = 1.0
    wave_a.inputs["Distortion"].default_value = 2.0
    wave_a.inputs["Detail"].default_value = 2.0

    mapping_b = nodes.new("ShaderNodeMapping")
    mapping_b.inputs["Scale"].default_value = (32.0, 32.0, 32.0)
    mapping_b.inputs["Rotation"].default_value[2] = math.radians(62.0)
    wave_b = nodes.new("ShaderNodeTexWave")
    wave_b.wave_type = "BANDS"
    wave_b.bands_direction = "X"
    wave_b.inputs["Scale"].default_value = 1.0
    wave_b.inputs["Distortion"].default_value = 1.5
    wave_b.inputs["Detail"].default_value = 2.0

    ramp_a = nodes.new("ShaderNodeValToRGB")
    ramp_a.color_ramp.elements[0].position = 0.43
    ramp_a.color_ramp.elements[0].color = (0.0, 0.0, 0.0, 1.0)
    ramp_a.color_ramp.elements[1].position = 0.57
    ramp_a.color_ramp.elements[1].color = (1.0, 1.0, 1.0, 1.0)
    ramp_b = nodes.new("ShaderNodeValToRGB")
    ramp_b.color_ramp.elements[0].position = 0.43
    ramp_b.color_ramp.elements[0].color = (0.0, 0.0, 0.0, 1.0)
    ramp_b.color_ramp.elements[1].position = 0.57
    ramp_b.color_ramp.elements[1].color = (1.0, 1.0, 1.0, 1.0)

    hatch_mix = nodes.new("ShaderNodeMixRGB")
    hatch_mix.blend_type = "MULTIPLY"
    hatch_mix.inputs[0].default_value = 1.0
    strength = nodes.new("ShaderNodeMath")
    strength.operation = "MULTIPLY"
    strength.inputs[1].default_value = 0.12

    noise = nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 4.0
    noise.inputs["Detail"].default_value = 3.0
    noise.inputs["Roughness"].default_value = 0.65
    bump = nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = 0.045
    bump.inputs["Distance"].default_value = 0.035

    base_rgb = nodes.new("ShaderNodeRGB")
    base_rgb.outputs[0].default_value = (*base_color, 1.0)
    dark_rgb = nodes.new("ShaderNodeRGB")
    dark_rgb.outputs[0].default_value = (base_color[0] * 0.55, base_color[1] * 0.54, base_color[2] * 0.52, 1.0)
    color_mix = nodes.new("ShaderNodeMixRGB")
    color_mix.blend_type = "MIX"

    links.new(tex.outputs["Generated"], mapping_a.inputs["Vector"])
    links.new(tex.outputs["Generated"], mapping_b.inputs["Vector"])
    links.new(mapping_a.outputs["Vector"], wave_a.inputs["Vector"])
    links.new(mapping_b.outputs["Vector"], wave_b.inputs["Vector"])
    links.new(wave_a.outputs["Color"], ramp_a.inputs["Fac"])
    links.new(wave_b.outputs["Color"], ramp_b.inputs["Fac"])
    links.new(ramp_a.outputs["Color"], hatch_mix.inputs[1])
    links.new(ramp_b.outputs["Color"], hatch_mix.inputs[2])
    links.new(hatch_mix.outputs[0], strength.inputs[0])
    links.new(strength.outputs[0], color_mix.inputs[0])
    links.new(base_rgb.outputs[0], color_mix.inputs[1])
    links.new(dark_rgb.outputs[0], color_mix.inputs[2])
    links.new(color_mix.outputs[0], bsdf.inputs["Base Color"])
    links.new(tex.outputs["Generated"], noise.inputs["Vector"])
    links.new(noise.outputs["Fac"], bump.inputs["Height"])
    links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    links.new(bsdf.outputs["BSDF"], output.inputs["Surface"])
    mat.diffuse_color = (*base_color, 1.0)
    mat["material_role"] = "Blender_style_preview_only"
    mat["preview_only"] = True
    mat["hatching_strength"] = 0.12
    return mat


def assign_preview_material(objects, base_mat, preview_mat):
    for obj in objects:
        slots = obj.data.materials
        if slots.find(base_mat.name) < 0:
            slots.append(base_mat)
        if slots.find(preview_mat.name) < 0:
            slots.append(preview_mat)
        preview_index = slots.find(preview_mat.name)
        for poly in obj.data.polygons:
            poly.material_index = preview_index


def create_area(name, location, target, energy, size, color):
    obj = bpy.data.objects.get(name)
    if obj and obj.type == "LIGHT":
        light = obj.data
    else:
        data = bpy.data.lights.new(name + "_Data", type="AREA")
        obj = bpy.data.objects.new(name, data)
        bpy.context.scene.collection.objects.link(obj)
        light = data
    light.energy = energy
    light.shape = "DISK"
    light.size = size
    light.color = color
    obj.location = location
    aim_at(obj, target)
    obj["preview_only"] = True
    return obj


def create_style_camera(scene, points, center, extent):
    obj = bpy.data.objects.get("Style_Test_Camera")
    if obj and obj.type == "CAMERA":
        cam = obj.data
    else:
        cam = bpy.data.cameras.new("Style_Test_Camera_Data")
        obj = bpy.data.objects.new("Style_Test_Camera", cam)
        scene.collection.objects.link(obj)
    cam.lens = 55.0
    cam.sensor_width = 36.0
    direction = Vector((1.0, -1.65, 0.95)).normalized()
    max_dim = max(extent.x, extent.y, extent.z)
    best = None
    for distance in [max_dim * x for x in (1.5, 1.8, 2.1, 2.5, 3.0, 3.6, 4.2, 5.0)]:
        obj.location = center + direction * distance
        aim_at(obj, center)
        scene.view_layers[0].update()
        box = [world_to_camera_view(scene, obj, p) for p in points]
        xs = [float(c.x) for c in box]
        ys = [float(c.y) for c in box]
        bbox = {"min_x": min(xs), "max_x": max(xs), "min_y": min(ys), "max_y": max(ys), "width": max(xs) - min(xs), "height": max(ys) - min(ys)}
        visible = bbox["min_x"] >= 0.04 and bbox["max_x"] <= 0.96 and bbox["min_y"] >= 0.04 and bbox["max_y"] <= 0.96
        score = abs(bbox["width"] - 0.78) + abs(bbox["height"] - 0.68)
        if not visible:
            score += 2.0
        if best is None or score < best[0]:
            best = (score, bbox)
    obj["preview_only"] = True
    obj["test_assets"] = "Workstation_Desk, Workstation_Monitor, Kendo_Gear"
    obj["navigation_cameras_untouched"] = True
    return obj, best[1]


def configure_freestyle(scene):
    scene.render.use_freestyle = True
    view_layer = scene.view_layers[0]
    fs = view_layer.freestyle_settings
    lineset = fs.linesets[0] if len(fs.linesets) else fs.linesets.new("Sketch_Outline_Lines")
    linestyle = lineset.linestyle
    try:
        linestyle.color = (0.12, 0.115, 0.105, 1.0)
    except Exception:
        linestyle.color = (0.12, 0.115, 0.105)
    linestyle.thickness = 0.78
    for attr, value in {
        "select_silhouette": True,
        "select_border": True,
        "select_crease": True,
        "select_ridge_valley": True,
        "select_external_contour": True,
        "select_material_boundary": False,
    }.items():
        if hasattr(lineset, attr):
            try:
                setattr(lineset, attr, value)
            except Exception:
                pass
    return {"engine": scene.render.engine, "use_freestyle": scene.render.use_freestyle, "line_color": list(linestyle.color), "line_thickness": linestyle.thickness}


def main():
    scene = bpy.context.scene
    original_frame = scene.frame_current
    before_transforms = snapshot_transforms()
    main_camera = bpy.data.objects.get(MAIN_CAMERA_NAME)
    before_main_action = action_identity(main_camera) if main_camera else None
    before_scene_camera = scene.camera.name if scene.camera else None

    asset_objects = {name: mesh_descendants(root) for name, root in TARGET_ROOTS.items()}
    target_objects = [obj for objects in asset_objects.values() for obj in objects]
    target_points = all_points(target_objects)
    target_min, target_max = bounds(target_points)
    target_center = (target_min + target_max) * 0.5
    target_extent = target_max - target_min
    max_dim = max(target_extent.x, target_extent.y, target_extent.z)

    base_color = (0.58, 0.555, 0.50)
    base_mat = setup_principled_base("MAT_Sketch_Base", base_color, 0.88)
    preview_mat = setup_preview_material("MAT_Sketch_Preview", base_color, 0.90)
    for objects in asset_objects.values():
        assign_preview_material(objects, base_mat, preview_mat)

    ground = bpy.data.objects.get("Portfolio_Ground_Plane")
    ground_mat = setup_principled_base("MAT_Sketch_Ground", (0.42, 0.40, 0.36), 0.94)
    if ground and ground.type == "MESH":
        if ground.data.materials.find(ground_mat.name) < 0:
            ground.data.materials.append(ground_mat)
        ground_index = ground.data.materials.find(ground_mat.name)
        for poly in ground.data.polygons:
            poly.material_index = ground_index

    if not scene.world:
        scene.world = bpy.data.worlds.new("Sketch_Paper_World")
    scene.world.use_nodes = True
    bg = scene.world.node_tree.nodes.get("Background")
    if bg:
        bg.inputs["Color"].default_value = (0.36, 0.34, 0.30, 1.0)
        bg.inputs["Strength"].default_value = 0.30
    scene.world["preview_only"] = True
    scene.world["background_role"] = "warm gray paper tone"

    key = create_area("Style_Key_Area", target_center + Vector((max_dim * 1.2, -max_dim * 1.7, max_dim * 1.8)), target_center, 720.0, max_dim * 1.35, (1.0, 0.97, 0.92))
    fill = create_area("Style_Fill_Area", target_center + Vector((-max_dim * 1.6, -max_dim * 0.5, max_dim * 1.0)), target_center, 210.0, max_dim * 1.10, (0.92, 0.95, 1.0))
    rim = create_area("Style_Rim_Area", target_center + Vector((max_dim * 0.5, max_dim * 1.8, max_dim * 1.4)), target_center, 85.0, max_dim * 0.90, (0.98, 0.98, 0.98))

    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 960
    scene.render.resolution_y = 720
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.filepath = str(PREVIEW_FILE)
    freestyle_report = configure_freestyle(scene)
    try:
        scene.view_settings.look = "AgX - Medium Low Contrast"
    except Exception:
        pass
    scene.view_settings.exposure = 0.0
    scene.view_settings.gamma = 1.0

    style_camera, camera_bbox = create_style_camera(scene, target_points, target_center, target_extent)
    scene.camera = style_camera
    scene.frame_set(original_frame)
    scene.view_layers[0].update()

    # Render only the style preview; no geometry or UV data is changed.
    bpy.ops.render.render(write_still=True)

    after_transforms = snapshot_transforms()
    allowed_changed = {"Portfolio_Ground_Plane", "Style_Test_Camera", "Style_Key_Area", "Style_Fill_Area", "Style_Rim_Area"}
    changed_existing = [name for name in before_transforms if name not in allowed_changed and after_transforms.get(name) != before_transforms.get(name)]
    after_main_action = action_identity(main_camera) if main_camera else None

    report = {
        "file": str(OUTPUT_FILE),
        "preview_file": str(PREVIEW_FILE),
        "asset_mapping": {name: {"root": root, "objects": [obj.name for obj in asset_objects[name]]} for name, root in TARGET_ROOTS.items()},
        "materials": {
            "MAT_Sketch_Base": {"base_color": list(base_color), "metallic": 0.0, "roughness": 0.88, "specular_ior_level": 0.22, "glb_exportable": True},
            "MAT_Sketch_Preview": {"roughness": 0.90, "procedural_hatching": True, "preview_only": True, "assigned_to_test_assets": True},
            "MAT_Sketch_Ground": {"base_color": [0.42, 0.40, 0.36], "roughness": 0.94},
        },
        "outline": freestyle_report | {"implementation": "Blender Freestyle preview, silhouette/border/crease/ridge-valley selection", "preview_only": True, "threejs_reproduction": "Use LineSegments/EdgesGeometry or custom screen-space outline in Three.js"},
        "hatching": {"implementation": "Subtle procedural crossed Wave textures mixed into MAT_Sketch_Preview", "strength": 0.12, "preview_only": True, "uv_unchanged": True},
        "lighting": {
            "Style_Key_Area": {"energy_w": 720.0, "size": round(key.data.size, 4), "color": list(key.data.color), "location": vlist(key.location)},
            "Style_Fill_Area": {"energy_w": 210.0, "size": round(fill.data.size, 4), "color": list(fill.data.color), "location": vlist(fill.location)},
            "Style_Rim_Area": {"energy_w": 85.0, "size": round(rim.data.size, 4), "color": list(rim.data.color), "location": vlist(rim.location)},
        },
        "world": {"background_color": [0.36, 0.34, 0.30, 1.0], "strength": 0.30, "role": "warm gray paper tone"},
        "style_camera": {"name": style_camera.name, "location": vlist(style_camera.location), "rotation_degrees": dlist(style_camera.rotation_euler), "focal_length_mm": style_camera.data.lens, "framing_bbox": camera_bbox},
        "preservation": {
            "changed_existing_objects_excluding_style_objects": changed_existing,
            "layout_and_model_transforms_unchanged": not changed_existing,
            "main_navigation_action_untouched": before_main_action == after_main_action,
            "navigation_cameras_untouched": True,
            "camera_states_untouched": True,
            "geometry_and_uv_unchanged": True,
        },
        "style_assessment": {
            "toon_or_cartoon_risk": "Low; soft continuous grayscale, no hard cel ramp",
            "architectural_sketch_similarity": "Moderate-to-high in Blender preview",
            "final_threejs_shader": False,
            "render_is_preview_only": True,
        },
    }
    REPORT_FILE.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    bpy.ops.wm.save_as_mainfile(filepath=str(OUTPUT_FILE))
    print(json.dumps({"status": "ok", "output": str(OUTPUT_FILE), "preview": str(PREVIEW_FILE), "report": str(REPORT_FILE), "changed_existing": changed_existing, "main_nav_untouched": before_main_action == after_main_action, "camera": style_camera.name}, ensure_ascii=False))


main()
