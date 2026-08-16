# Three.js Integration Test v4

本次仅同步用户在 Blender 中手动调整后的 `Projects_Screen`，没有修改其他模型、ROOT、相机或 Camera JSON。

## Blender

- 文件：`D:\portfolio\portfolio\portfolio_export_ready_v3.blend`
- 新增对象：`Projects_Screen`
- Parent：`Workstation_Desk`
- 材质：`MAT_Projects_Screen`
- UV：`UVMap`
- 用户调整后的 Blender Location：`(0.023891, -0.086067, -0.845434)`
- 用户调整后的 Scale：`(1.045473, 1.127006, 1.336541)`
- 导出前 Transform 差异检查：其他对象无变化

## GLB

- 文件：`D:\portfolio\portfolio\exports\portfolio_scene_test_v3.glb`
- 文件大小：464,548 bytes
- 仅导出 Mesh、Empty、UV、材质和层级
- 相机和灯光未导出
- 导出日志确认包含 `Projects_Screen_Mesh`

## Three.js

- 新 GLB 已复制到：`public/models/portfolio_scene.glb`
- 页面重新加载成功
- GLB：74 Mesh
- 五大 ROOT：5 / 5
- `Projects_Screen`：找到
- 浏览器诊断读取到用户调整后的屏幕 Transform
- Projects Screen A/B 动态纹理替换功能仍保留
- 当前未进入 NPR、Hatching 或正式 UI 阶段

测试地址：`http://127.0.0.1:5173/`
