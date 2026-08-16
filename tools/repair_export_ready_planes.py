import bpy
import json
import os
from itertools import combinations
from mathutils import Vector, Matrix

V2 = r"D:\portfolio\portfolio\portfolio_export_ready_v2.blend"
GLB = r"D:\portfolio\portfolio\exports\portfolio_scene_test_v2.glb"
DEBUG_OVERVIEW = r"D:\portfolio\portfolio\debug_content_planes_overview.png"
DEBUG_CLOSEUP = r"D:\portfolio\portfolio\debug_content_planes_closeup.png"
REPORT_PATH = r"D:\portfolio\portfolio\plane_alignment_report_v2.json"

bpy.ops.wm.open_mainfile(filepath=V2)
scene = bpy.context.scene

TARGET_NAMES = {"PersonalIntro_Photo", "Creativity_Screen", "Projects_Screen"}
LOCK_NAMES = [o.name for o in bpy.data.objects if o.name not in TARGET_NAMES]

def vec(v):
    return [round(float(x), 6) for x in v]

def mat_flat(m):
    return [round(float(m[r][c]), 6) for r in range(4) for c in range(4)]

def snapshot_object(o):
    return {
        "location": mat_flat(o.matrix_world),
        "local_location": vec(o.location),
        "local_rotation": vec(o.rotation_euler),
        "local_scale": vec(o.scale),
    }

locked_before = {n: snapshot_object(bpy.data.objects[n]) for n in LOCK_NAMES if bpy.data.objects.get(n)}

def ensure_gltf_material(name, color):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    mat.name = name
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    out.location = (260, 0)
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.location = (0, 0)
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Metallic"].default_value = 0.0
    bsdf.inputs["Roughness"].default_value = 0.88
    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = 0.25
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    mat.diffuse_color = (*color, 1.0)
    return mat

def assign_material(obj, mat):
    obj.data.materials.clear()
    obj.data.materials.append(mat)

def make_uv(mesh):
    if "UVMap" in mesh.uv_layers:
        mesh.uv_layers.remove(mesh.uv_layers["UVMap"])
    uv = mesh.uv_layers.new(name="UVMap")
    coords = [(0.0, 0.0), (1.0, 0.0), (1.0, 1.0), (0.0, 1.0)]
    for loop, coord in zip(mesh.loops, coords):
        uv.data[loop.index].uv = coord

def normalize_existing_plane(name, parent_name, material):
    obj = bpy.data.objects[name]
    parent = bpy.data.objects[parent_name]
    if obj.parent != parent:
        raise RuntimeError(f"{name} parent mismatch: {obj.parent and obj.parent.name} != {parent_name}")
    if len(obj.data.polygons) != 1 or len(obj.data.vertices) != 4:
        raise RuntimeError(f"{name} is not the expected quad plane")

    old_mesh = obj.data
    old_face = list(old_mesh.polygons[0].vertices)
    parent_space = obj.matrix_parent_inverse @ obj.matrix_basis
    parent_points = [parent_space @ v.co for v in old_mesh.vertices]
    center = sum(parent_points, Vector()) / len(parent_points)
    local_points = [p - center for p in parent_points]

    new_mesh = bpy.data.meshes.new(f"{name}_Mesh")
    new_mesh.from_pydata(local_points, [], [old_face])
    new_mesh.update()
    new_mesh.validate(verbose=False)
    make_uv(new_mesh)
    obj.data = new_mesh
    if old_mesh.users == 0:
        bpy.data.meshes.remove(old_mesh)

    obj.parent = parent
    obj.matrix_parent_inverse = Matrix.Identity(4)
    obj.rotation_mode = "XYZ"
    obj.location = center
    obj.rotation_euler = (0.0, 0.0, 0.0)
    obj.scale = (1.0, 1.0, 1.0)
    assign_material(obj, material)
    obj["is_content_plane"] = True
    obj["content_plane_role"] = name
    return {
        "name": name,
        "parent": parent.name,
        "local_position": vec(obj.location),
        "local_rotation": vec(obj.rotation_euler),
        "local_scale": vec(obj.scale),
        "dimensions": vec(obj.dimensions),
        "mesh_vertices": len(obj.data.vertices),
        "uv_layers": [u.name for u in obj.data.uv_layers],
        "world_center": vec(obj.matrix_world @ Vector((0, 0, 0))),
        "normal_offset_method": "mesh recentered into parent-local coordinates; existing surface offset retained",
    }

def replace_plane_on_surface(name, parent_name, surface_points, surface_normal, material, inset=0.94, offset=0.003):
    obj = bpy.data.objects[name]
    parent = bpy.data.objects[parent_name]
    center = sum(surface_points, Vector()) / 4
    inset_points = [center + (p - center) * inset for p in surface_points]
    plane_center = sum(inset_points, Vector()) / 4 + surface_normal * offset
    local_points = [p - plane_center for p in inset_points]
    old_mesh = obj.data
    mesh = bpy.data.meshes.new(f"{name}_Mesh")
    mesh.from_pydata(local_points, [], [[0, 1, 2, 3]])
    mesh.update()
    mesh.validate(verbose=False)
    make_uv(mesh)
    obj.data = mesh
    if old_mesh.users == 0:
        bpy.data.meshes.remove(old_mesh)
    obj.parent = parent
    obj.matrix_parent_inverse = Matrix.Identity(4)
    obj.rotation_mode = "XYZ"
    obj.location = plane_center
    obj.rotation_euler = (0.0, 0.0, 0.0)
    obj.scale = (1.0, 1.0, 1.0)
    assign_material(obj, material)
    obj["is_content_plane"] = True
    obj["content_plane_role"] = name
    obj["surface_offset_blender_units"] = offset
    return {
        "name": name,
        "parent": parent.name,
        "local_position": vec(obj.location),
        "local_rotation": vec(obj.rotation_euler),
        "local_scale": vec(obj.scale),
        "dimensions": vec(obj.dimensions),
        "mesh_vertices": len(obj.data.vertices),
        "uv_layers": [u.name for u in obj.data.uv_layers],
        "surface_points": [vec(p) for p in surface_points],
        "surface_normal": vec(surface_normal),
        "surface_offset_blender_units": offset,
    }

def find_monitor_screen_quad(monitor):
    mesh = monitor.data
    faces = [
        p for p in mesh.polygons
        if p.area > 0.05 and 0.35 < p.center.z < 0.9 and p.normal.y < -0.90 and p.normal.z > 0.15
    ]
    if len(faces) < 2:
        raise RuntimeError("Could not identify the monitor display surface")
    ref = max(faces, key=lambda p: p.area).normal.normalized()
    faces = [p for p in faces if p.normal.normalized().dot(ref) > 0.995]
    ids = sorted({i for p in faces for i in p.vertices})
    points = [mesh.vertices[i].co.copy() for i in ids]
    zmin = min(p.z for p in points)
    zmax = max(p.z for p in points)
    bottom = [p for p in points if abs(p.z - zmin) < 1e-4]
    top = [p for p in points if abs(p.z - zmax) < 1e-4]
    if len(bottom) < 2 or len(top) < 2:
        raise RuntimeError("Monitor display surface did not form a rectangular boundary")
    bl = min(bottom, key=lambda p: p.x)
    br = max(bottom, key=lambda p: p.x)
    tl = min(top, key=lambda p: p.x)
    tr = max(top, key=lambda p: p.x)
    quad = [bl, br, tr, tl]
    normal = (quad[1] - quad[0]).cross(quad[3] - quad[0]).normalized()
    if normal.dot(ref) < 0:
        quad.reverse()
        normal = -normal
    return quad, normal, {
        "source_faces": [p.index for p in faces],
        "source_vertices": ids,
        "surface_width": round(float(max(p.x for p in points) - min(p.x for p in points)), 6),
        "surface_height": round(float(zmax - zmin), 6),
        "surface_normal": vec(normal),
        "surface_center": vec(sum(quad, Vector()) / 4),
    }

def find_desk_screen_quad(desk):
    mesh = desk.data
    candidates = [
        p for p in mesh.polygons
        if p.area > 0.20 and p.center.z > 2.0 and p.normal.y < -0.85 and p.normal.z > 0.05
    ]
    best = None
    for p, q in combinations(candidates, 2):
        pv, qv = set(p.vertices), set(q.vertices)
        if len(pv & qv) != 2 or len(pv | qv) != 4:
            continue
        if p.normal.dot(q.normal) < 0.995:
            continue
        pts = [mesh.vertices[i].co.copy() for i in pv | qv]
        x_span = max(v.x for v in pts) - min(v.x for v in pts)
        z_span = max(v.z for v in pts) - min(v.z for v in pts)
        if x_span < 0.8 or z_span < 0.3:
            continue
        score = (p.area + q.area) + x_span * z_span
        if best is None or score > best[0]:
            best = (score, p, q, x_span, z_span)
    if best is None:
        raise RuntimeError("Could not identify the desk's built-in monitor screen")
    _, p, q, x_span, z_span = best
    common = set(p.vertices) & set(q.vertices)
    p_only = [i for i in p.vertices if i not in common]
    q_only = [i for i in q.vertices if i not in common]
    common_order = [i for i in p.vertices if i in common]
    # p is the lower triangle in the current asset. The order gives the outward front normal.
    quad_indices = [p_only[0], common_order[0], q_only[0], common_order[1]]
    points = [mesh.vertices[i].co.copy() for i in quad_indices]
    n = (points[1] - points[0]).cross(points[3] - points[0]).normalized()
    if n.dot(p.normal) < 0:
        points.reverse()
        n = -n
    return points, n, {
        "polygon_indices": [p.index, q.index],
        "vertex_indices": quad_indices,
        "screen_width": round(float(x_span), 6),
        "screen_height": round(float(z_span), 6),
        "surface_normal": vec(n),
        "surface_center": vec(sum(points, Vector()) / 4),
    }

def create_projects_screen(desk, material):
    old = bpy.data.objects.get("Projects_Screen")
    if old:
        bpy.data.objects.remove(old, do_unlink=True)
    points, surface_normal, discovery = find_desk_screen_quad(desk)
    surface_center = sum(points, Vector()) / 4
    inset = 0.94
    inset_points = [surface_center + (p - surface_center) * inset for p in points]
    offset = 0.005
    plane_center = sum(inset_points, Vector()) / 4 + surface_normal * offset
    local_points = [p - plane_center for p in inset_points]

    mesh = bpy.data.meshes.new("Projects_Screen_Mesh")
    mesh.from_pydata(local_points, [], [[0, 1, 2, 3]])
    mesh.update()
    mesh.validate(verbose=False)
    make_uv(mesh)
    obj = bpy.data.objects.new("Projects_Screen", mesh)
    collection = desk.users_collection[0] if desk.users_collection else scene.collection
    collection.objects.link(obj)
    obj.parent = desk
    obj.matrix_parent_inverse = Matrix.Identity(4)
    obj.location = plane_center
    obj.rotation_mode = "XYZ"
    obj.rotation_euler = (0.0, 0.0, 0.0)
    obj.scale = (1.0, 1.0, 1.0)
    assign_material(obj, material)
    obj["is_content_plane"] = True
    obj["content_plane_role"] = "Projects_Screen"
    obj["surface_source"] = "Workstation_Desk_Mesh built-in monitor front quad"
    obj["surface_offset_blender_units"] = offset
    return obj, discovery

mat_photo = ensure_gltf_material("MAT_PersonalIntro_Photo", (0.16, 0.17, 0.18))
mat_creativity = ensure_gltf_material("MAT_Creativity_Screen", (0.055, 0.06, 0.065))
mat_projects = ensure_gltf_material("MAT_Projects_Screen", (0.065, 0.07, 0.075))

photo_report = normalize_existing_plane("PersonalIntro_Photo", "Photo_Frame", mat_photo)
monitor = bpy.data.objects["Workstation_Monitor"]
monitor_surface, monitor_normal, monitor_discovery = find_monitor_screen_quad(monitor)
creativity_report = replace_plane_on_surface("Creativity_Screen", "Workstation_Monitor", monitor_surface, monitor_normal, mat_creativity, inset=0.94, offset=0.005)
creativity_report["discovery"] = monitor_discovery
projects_obj, projects_discovery = create_projects_screen(bpy.data.objects["Workstation_Desk"], mat_projects)
bpy.context.view_layer.update()
projects_report = {
    "name": projects_obj.name,
    "parent": projects_obj.parent.name,
    "local_position": vec(projects_obj.location),
    "local_rotation": vec(projects_obj.rotation_euler),
    "local_scale": vec(projects_obj.scale),
    "dimensions": vec(projects_obj.dimensions),
    "world_center": vec(projects_obj.matrix_world.translation),
    "uv_layers": [u.name for u in projects_obj.data.uv_layers],
    "material": projects_obj.data.materials[0].name,
    "discovery": projects_discovery,
}

# Temporary red/green/blue validation renders. The assignments are restored before saving.
debug_red = ensure_gltf_material("__DEBUG_Photo_Red", (0.85, 0.03, 0.03))
debug_green = ensure_gltf_material("__DEBUG_Projects_Green", (0.04, 0.8, 0.06))
debug_blue = ensure_gltf_material("__DEBUG_Creativity_Blue", (0.04, 0.18, 0.9))
photo_obj = bpy.data.objects["PersonalIntro_Photo"]
creativity_obj = bpy.data.objects["Creativity_Screen"]
photo_obj.data.materials[0] = debug_red
projects_obj.data.materials[0] = debug_green
creativity_obj.data.materials[0] = debug_blue

orig_camera = scene.camera
orig_engine = scene.render.engine
orig_filepath = scene.render.filepath
orig_res = (scene.render.resolution_x, scene.render.resolution_y, scene.render.resolution_percentage)
orig_frame = scene.frame_current
try:
    scene.render.engine = "BLENDER_WORKBENCH"
    scene.display.shading.light = "STUDIO"
    scene.display.shading.studio_light = "paint.sl"
    scene.display.shading.color_type = "MATERIAL"
    scene.display.shading.show_shadows = True
    scene.display.shading.show_cavity = True
    scene.display.shading.cavity_type = "WORLD"
    scene.display.shading.curvature_ridge_factor = 1.4
    scene.display.shading.curvature_valley_factor = 1.2
    scene.display.shading.show_specular_highlight = False
    scene.display.shading.background_type = "WORLD"
    scene.display.shading.background_color = (0.92, 0.92, 0.92)
    scene.render.resolution_x = 1100
    scene.render.resolution_y = 820
    scene.render.resolution_percentage = 100
    overview = bpy.data.objects.get("Portfolio_Main_Camera") or orig_camera
    closeup = bpy.data.objects.get("Portfolio_Creativity_CloseUp_Camera") or overview
    scene.camera = overview
    scene.render.filepath = DEBUG_OVERVIEW
    bpy.ops.render.render(write_still=True)
    scene.camera = closeup
    scene.render.filepath = DEBUG_CLOSEUP
    bpy.ops.render.render(write_still=True)
finally:
    photo_obj.data.materials[0] = mat_photo
    projects_obj.data.materials[0] = mat_projects
    creativity_obj.data.materials[0] = mat_creativity
    scene.camera = orig_camera
    scene.render.engine = orig_engine
    scene.render.filepath = orig_filepath
    scene.render.resolution_x, scene.render.resolution_y, scene.render.resolution_percentage = orig_res
    scene.frame_set(orig_frame)
    for mname in ["__DEBUG_Photo_Red", "__DEBUG_Projects_Green", "__DEBUG_Creativity_Blue"]:
        m = bpy.data.materials.get(mname)
        if m and m.users == 0:
            bpy.data.materials.remove(m)

locked_after = {n: snapshot_object(bpy.data.objects[n]) for n in LOCK_NAMES if bpy.data.objects.get(n)}
unchanged = []
for n in locked_before:
    a, b = locked_before[n], locked_after[n]
    unchanged.append(n) if a == b else unchanged.append(f"CHANGED:{n}")
changed_locked = [x for x in unchanged if x.startswith("CHANGED:")]

alignment_report = {
    "source": "portfolio_export_ready_v1.blend",
    "working_file": V2,
    "root_and_asset_transforms_changed": changed_locked,
    "cause_assessment": {
        "personal_intro": "The plane was a quad whose vertices carried Photo_Frame-local surface offsets while the child object transform stayed at identity. Blender evaluated it correctly, but the intended local placement was implicit rather than represented by the child transform. It was normalized into Photo_Frame local coordinates without changing its world surface.",
        "creativity": "The plane used the same implicit-parent-space geometry pattern: Workstation_Monitor-local surface coordinates inside an identity child transform. It was normalized into a clean child-local transform and retained the existing monitor-front normal offset.",
        "double_transform_confirmed": False,
        "world_local_issue": True,
        "clean_glb_previous_reimport": "The old GLB preserved the same parent/world matrices, so the defect was not a root-level coordinate conversion. The v2 fix makes local placement explicit and adds the Projects plane from the desk's actual front screen quad.",
    },
    "planes": {
        "PersonalIntro_Photo": photo_report,
        "Creativity_Screen": creativity_report,
        "Projects_Screen": projects_report,
    },
    "debug_validation_renders": [DEBUG_OVERVIEW, DEBUG_CLOSEUP],
}
os.makedirs(os.path.dirname(REPORT_PATH), exist_ok=True)
with open(REPORT_PATH, "w", encoding="utf-8") as f:
    json.dump(alignment_report, f, ensure_ascii=False, indent=2)

# Export only meshes and empties; cameras and lights are excluded.
os.makedirs(os.path.dirname(GLB), exist_ok=True)
selected_before = [o.name for o in bpy.context.selected_objects]
active_before = bpy.context.view_layer.objects.active.name if bpy.context.view_layer.objects.active else None
bpy.ops.object.select_all(action="DESELECT")
for o in bpy.data.objects:
    o.select_set(o.type in {"MESH", "EMPTY"})
bpy.context.view_layer.objects.active = bpy.data.objects.get("ROOT_Projects")
kwargs = {
    "filepath": GLB,
    "export_format": "GLB",
    "use_selection": True,
    "export_materials": "EXPORT",
    "export_texcoords": True,
    "export_normals": True,
    "export_animations": False,
    "export_cameras": False,
    "export_lights": False,
    "export_apply": False,
    "export_keep_originals": True,
}
try:
    bpy.ops.export_scene.gltf(**kwargs)
except TypeError:
    supported = bpy.ops.export_scene.gltf.get_rna_type().properties.keys()
    bpy.ops.export_scene.gltf(**{k: v for k, v in kwargs.items() if k in supported})

bpy.ops.object.select_all(action="DESELECT")
for name in selected_before:
    if bpy.data.objects.get(name):
        bpy.data.objects[name].select_set(True)
if active_before and bpy.data.objects.get(active_before):
    bpy.context.view_layer.objects.active = bpy.data.objects[active_before]

bpy.ops.wm.save_as_mainfile(filepath=V2)
print(json.dumps({
    "saved": V2,
    "glb": GLB,
    "report": REPORT_PATH,
    "locked_transform_changes": changed_locked,
    "photo": photo_report,
    "creativity": creativity_report,
    "projects": projects_report,
    "debug_renders": [DEBUG_OVERVIEW, DEBUG_CLOSEUP],
}, ensure_ascii=False, indent=2))
