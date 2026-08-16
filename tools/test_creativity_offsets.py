import bpy
from mathutils import Vector

path = r"D:\portfolio\portfolio\portfolio_export_ready_v2.blend"
bpy.ops.wm.open_mainfile(filepath=path)
scene=bpy.context.scene
cam=bpy.data.objects["Portfolio_Creativity_CloseUp_Camera"]
obj=bpy.data.objects["Creativity_Screen"]
mesh=obj.data
n=(mesh.vertices[1].co-mesh.vertices[0].co).cross(mesh.vertices[3].co-mesh.vertices[0].co).normalized()
base=obj.location.copy()
scene.camera=cam
scene.render.engine="BLENDER_WORKBENCH"
scene.display.shading.light="STUDIO"
scene.display.shading.studio_light="paint.sl"
scene.display.shading.color_type="MATERIAL"
scene.display.shading.show_shadows=True
scene.display.shading.show_cavity=False
scene.render.resolution_x=1100
scene.render.resolution_y=820
scene.render.resolution_percentage=100
for suffix, delta in [("005",0.002),("010",0.007),("020",0.017)]:
    obj.location=base+n*delta
    scene.render.filepath=rf"D:\portfolio\portfolio\debug_creativity_offset_{suffix}.png"
    bpy.ops.render.render(write_still=True)
