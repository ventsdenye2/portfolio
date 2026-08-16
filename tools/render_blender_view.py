import bpy
import os

path = r"D:\portfolio\portfolio\portfolio_export_ready_v2.blend"
out = r"D:\portfolio\portfolio\debug_export_ready_view.png"
bpy.ops.wm.open_mainfile(filepath=path)
scene = bpy.context.scene
cameras = [o for o in bpy.data.objects if o.type == "CAMERA"]
print("CAMERAS", [(c.name, tuple(round(x, 4) for x in c.location)) for c in cameras])
preferred = ["Portfolio_Main_Camera", "Portfolio_Navigation_Camera", "Reference_Camera"]
cam = next((bpy.data.objects.get(n) for n in preferred if bpy.data.objects.get(n)), None)
if cam is None and cameras:
    cam = cameras[0]
if cam is None:
    raise RuntimeError("No camera")
scene.camera = cam
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
scene.render.filepath = out
scene.render.film_transparent = False
bpy.ops.render.render(write_still=True)
print("RENDERED", out, "camera", cam.name)
