import bpy
import json
from mathutils import Vector

path = r"D:\portfolio\portfolio\portfolio_export_ready_v2.blend"
bpy.ops.wm.open_mainfile(filepath=path)
o = bpy.data.objects["Workstation_Desk"]
mesh = o.data
rows = []
for p in mesh.polygons:
    c = p.center
    n = p.normal.normalized()
    if c.z < 1.45 or abs(n.y) < 0.75:
        continue
    coords = [mesh.vertices[i].co for i in p.vertices]
    ext = [max(v[j] for v in coords) - min(v[j] for v in coords) for j in range(3)]
    if p.area < 0.004:
        continue
    rows.append({
        "index": p.index,
        "area": round(float(p.area), 6),
        "center": [round(float(x), 6) for x in c],
        "normal": [round(float(x), 6) for x in n],
        "extent": [round(float(x), 6) for x in ext],
        "verts": list(p.vertices),
    })
rows.sort(key=lambda r: (-r["area"], r["center"][2]))
print(json.dumps(rows[:220], ensure_ascii=False, indent=2))
