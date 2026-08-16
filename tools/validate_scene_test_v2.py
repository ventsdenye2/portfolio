import bpy
import json
import os
from mathutils import Vector

GLB = r"D:\portfolio\portfolio\exports\portfolio_scene_test_v2.glb"
REPORT = r"D:\portfolio\portfolio\glb_validation_report_v2.json"

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=GLB)
bpy.context.view_layer.update()

def v3(v):
    return [round(float(x), 6) for x in v]

roots = ["ROOT_PersonalIntro", "ROOT_TechStack", "ROOT_Projects", "ROOT_Creativity", "ROOT_MoreInterests"]
planes = ["PersonalIntro_Photo", "Projects_Screen", "Creativity_Screen"]
key_objects = roots + planes + ["Photo_Frame", "Workstation_Desk", "Workstation_Monitor", "Terminal_Panel_A", "Terminal_Panel_B", "Terminal_Panel_C"]

def obj_row(name):
    o = bpy.data.objects.get(name)
    if not o:
        return {"name": name, "missing": True}
    return {
        "name": name,
        "type": o.type,
        "parent": o.parent.name if o.parent else None,
        "location": v3(o.location),
        "rotation": v3(o.rotation_euler),
        "scale": v3(o.scale),
        "world_location": v3(o.matrix_world.translation),
        "dimensions": v3(o.dimensions),
        "children": [c.name for c in o.children],
        "uv_layers": [u.name for u in o.data.uv_layers] if o.type == "MESH" else [],
        "materials": [s.material.name if s.material else None for s in o.material_slots] if o.type == "MESH" else [],
        "vertices": len(o.data.vertices) if o.type == "MESH" else 0,
    }

missing = [n for n in key_objects if bpy.data.objects.get(n) is None]
wrong_parent = []
expected = {
    "PersonalIntro_Photo": "Photo_Frame",
    "Projects_Screen": "Workstation_Desk",
    "Creativity_Screen": "Workstation_Monitor",
}
for child, parent in expected.items():
    o = bpy.data.objects.get(child)
    if o and (o.parent is None or o.parent.name != parent):
        wrong_parent.append({"child": child, "expected": parent, "actual": o.parent and o.parent.name})

plane_checks = {}
for n in planes:
    o = bpy.data.objects.get(n)
    plane_checks[n] = {
        "exists": bool(o),
        "parent_ok": bool(o and o.parent and o.parent.name == expected[n]),
        "quad": bool(o and o.type == "MESH" and len(o.data.vertices) == 4 and len(o.data.polygons) in {1, 2}),
        "uv_0_1": bool(o and o.type == "MESH" and "UVMap" in o.data.uv_layers and len(o.data.uv_layers["UVMap"].data) in {4, 6}),
        "material": o.data.materials[0].name if o and o.type == "MESH" and o.data.materials else None,
    }

mesh_count = sum(1 for o in bpy.data.objects if o.type == "MESH")
empty_count = sum(1 for o in bpy.data.objects if o.type == "EMPTY")
report = {
    "glb": GLB,
    "file_size_bytes": os.path.getsize(GLB),
    "object_count": len(bpy.data.objects),
    "mesh_count": mesh_count,
    "empty_count": empty_count,
    "material_count": len(bpy.data.materials),
    "image_count": len(bpy.data.images),
    "roots_found": {n: bool(bpy.data.objects.get(n)) for n in roots},
    "missing_key_objects": missing,
    "wrong_parent": wrong_parent,
    "plane_checks": plane_checks,
    "objects": {n: obj_row(n) for n in key_objects if bpy.data.objects.get(n)},
    "status": "PASS" if not missing and not wrong_parent and all(x["quad"] and x["uv_0_1"] and x["parent_ok"] for x in plane_checks.values()) else "FAIL",
}
with open(REPORT, "w", encoding="utf-8") as f:
    json.dump(report, f, ensure_ascii=False, indent=2)
print(json.dumps(report, ensure_ascii=False, indent=2))
