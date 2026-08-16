import bpy
import json
import math
from collections import defaultdict
from mathutils import Vector

path = r"D:\portfolio\portfolio\portfolio_export_ready_v2.blend"
bpy.ops.wm.open_mainfile(filepath=path)

def v3(v):
    return [round(float(x), 6) for x in v]

def report_object(name):
    o = bpy.data.objects.get(name)
    if not o:
        return {"name": name, "missing": True}
    result = {
        "name": o.name,
        "type": o.type,
        "parent": o.parent.name if o.parent else None,
        "location": v3(o.location),
        "rotation": v3(o.rotation_euler),
        "scale": v3(o.scale),
        "world_location": v3(o.matrix_world.translation),
        "dimensions": v3(o.dimensions),
        "children": [c.name for c in o.children],
    }
    if o.type == "MESH":
        result["mesh"] = {
            "name": o.data.name,
            "vertices": len(o.data.vertices),
            "polygons": len(o.data.polygons),
            "materials": [s.material.name if s.material else None for s in o.material_slots],
            "uv_layers": [u.name for u in o.data.uv_layers],
        }
    return result

print("OBJECTS")
for n in ["Photo_Frame", "PersonalIntro_Photo", "Workstation_Desk", "Workstation_Monitor", "Creativity_Screen"]:
    print(json.dumps(report_object(n), ensure_ascii=False))

o = bpy.data.objects.get("Workstation_Desk")
if o and o.type == "MESH":
    mesh = o.data
    groups = defaultdict(lambda: {"count": 0, "area": 0.0, "centers": [], "sizes": []})
    for p in mesh.polygons:
        n = p.normal.normalized()
        # large planar faces are potential screen/bezel surfaces; quantize normal and plane coordinate.
        axis = max(range(3), key=lambda i: abs(n[i]))
        if abs(n[axis]) < 0.985:
            continue
        c = p.center
        # For a face normal along Y, the plane coordinate is Y; for Z, it is Z, etc.
        plane = round(float(c[axis]), 3)
        key = (axis, 1 if n[axis] >= 0 else -1, plane)
        g = groups[key]
        g["count"] += 1
        g["area"] += p.area
        if len(g["centers"]) < 40:
            g["centers"].append(c)
        # face local extents along the other two axes
        coords = [mesh.vertices[i].co for i in p.vertices]
        ext = []
        for j in range(3):
            ext.append(round(float(max(x[j] for x in coords) - min(x[j] for x in coords)), 4))
        g["sizes"].append(ext)
    candidates = []
    for key, g in groups.items():
        if g["area"] < 0.02:
            continue
        centers = g["centers"]
        avg = sum(centers, Vector()) / max(len(centers), 1)
        max_ext = [0.0, 0.0, 0.0]
        for s in g["sizes"]:
            for i in range(3):
                max_ext[i] = max(max_ext[i], s[i])
        candidates.append({
            "key": list(key),
            "count": g["count"],
            "area": round(g["area"], 5),
            "avg_center": v3(avg),
            "max_face_extent": max_ext,
        })
    candidates.sort(key=lambda x: (-x["area"], x["key"]))
    print("DESK_PLANAR_FACE_CANDIDATES")
    print(json.dumps(candidates[:80], ensure_ascii=False, indent=2))

    # Quantized vertex distributions help identify embedded monitor/screen boundaries.
    for axis in range(3):
        vals = sorted({round(float(v.co[axis]), 3) for v in mesh.vertices})
        print(f"DESK_AXIS_{axis}_VALUES", json.dumps(vals[:300]))
