# Three.js Integration Test v3

本次验证针对 Export Ready v2 内容承载平面与 Projects 动态屏幕完成。没有修改 Blender Visual Master、五大 ROOT、模型布局、相机 JSON 数据结构或现有导航状态机。

## 1. 资产与 Export Ready

- Blender 工作文件：`D:\portfolio\portfolio\portfolio_export_ready_v2.blend`
- 测试 GLB：`D:\portfolio\portfolio\exports\portfolio_scene_test_v2.glb`
- Three.js 使用副本：`D:\portfolio\portfolio\threejs-integration-test\public\models\portfolio_scene.glb`
- GLB 大小：464,324 bytes
- 干净 Blender 重导入验证：`PASS`
- 对象数量：97（74 Mesh，23 Empty）
- 材质数量：7
- 图片纹理数量：0（当前均为占位材质）

五大 ROOT 均保留：

- `ROOT_PersonalIntro`
- `ROOT_TechStack`
- `ROOT_Projects`
- `ROOT_Creativity`
- `ROOT_MoreInterests`

## 2. 内容平面问题定位与修复

检查对象：`PersonalIntro_Photo`、`Creativity_Screen`、`Projects_Screen`、`Terminal_Panel_A/B/C`。

原问题不是 Three.js 相机或整体坐标轴转换，而是部分内容面没有以明确的父对象局部坐标建立在真实承载表面上；其中 Photo 与 Monitor Screen 还与宿主表面共面或过近，容易发生深度竞争并表现为黑边。Terminal Panels 与支撑结构之间没有发现共面证据。

修复结果：

- `PersonalIntro_Photo`：重建为相框内部的显式 parent-local 四边形，完整 UV，保持 16:9 逻辑与独立材质。
- `Creativity_Screen`：按显示器真实内屏四角重建，沿屏幕法线仅增加约 0.005 BU 的不可见间隔，并保留完整 UV。
- `Projects_Screen`：按 `Workstation_Desk` 内置显示器真实前表面创建，沿法线约 0.005 BU 偏移，完整 UV。
- 所有三块可动态替换的屏幕均使用 `FrontSide`、`depthTest=true`、`depthWrite=true` 与有限 `polygonOffset`；不使用透明材质，不使用运行时位置修正。
- 内容平面统一标记 `userData.isContentPlane=true`，并写入 `contentPlaneRole`，为后续 Outline/NPR 排除保留识别入口。
- 内容面关闭 `castShadow` / `receiveShadow`，避免内容区域产生脏阴影边缘。

Three.js 诊断中的 `possibleZFight` 仅表示内容面与其宿主表面包围盒共面/重叠；这是屏幕贴合承载面产生的预期结果，不代表仍有可见黑边。`polygonOffset` 与明确的法线间距用于消除实际深度竞争。

## 3. Projects 动态屏幕

新增：

- Blender Mesh：`Projects_Screen`
- 材质：`MAT_Projects_Screen`
- TypeScript API：`setProjectsScreenTexture(root, texture)`
- Debug UI：`Project Screen A` / `Project Screen B`

A/B 测试使用运行时生成的 CanvasTexture，仅用于验证替换链路，不是最终项目内容。点击 B 后页面状态显示：`Projects screen texture B applied only to Projects_Screen`；切回 A 后只有 `Projects_Screen` 的按钮状态与纹理发生变化。

## 4. Three.js 基础验证

- 项目：`D:\portfolio\portfolio\threejs-integration-test`
- Three.js：`0.179.1`
- GSAP：`3.15.0`
- Vite：`7.3.6`
- TypeScript：`5.9.3`
- `npm run build`：通过
- `npm run dev -- --host 127.0.0.1`：正常运行
- 测试地址：`http://127.0.0.1:5173/`
- GLB 加载：通过
- 五大 ROOT：5 / 5
- 关键内容平面：全部找到
- 运行时 Console：无应用 warning/error

## 5. 导航回归

已验证：

- Instant Camera State 仍可切换。
- `creativityBase → creativityCloseup`：通过。
- `creativityCloseup → creativityBase`：通过。
- `creativityCloseup → moreInterests`：通过，先退回 `creativityBase`，再进入 `moreInterests`。
- Projects 屏幕 A/B 切换不改变相机、模型或导航状态。

没有修改：

- `setCameraStateInstant`
- `navigateTo`
- CloseUp 退出规则
- 五大 ROOT 名称
- Camera State / Transition JSON

## 6. 当前限制

本版本仍是基础 Integration Test，不包含：

- NPR Shader
- Hatching
- Freestyle / Outline replacement
- Paper Texture
- Toon Shader
- Bloom、SSAO 或正式后处理
- 最终 UI 与实际项目截图内容

当前验证目标已经覆盖 GLB 加载、ROOT 层级、内容面承载、Projects 屏幕动态替换、基础阴影与 CloseUp 状态机。下一阶段才适合开始 Three.js NPR 风格复刻。
