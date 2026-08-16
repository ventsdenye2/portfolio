# Three.js Integration Test v2

测试工程：`D:\portfolio\portfolio\threejs-integration-test`  
测试地址：`http://127.0.0.1:5173/`  
本次没有修改 Blender 文件、GLB 文件或三个 Camera JSON 文件。

## 1. 黑框问题分析

检查对象：

- `Creativity_Screen`
- `PersonalIntro_Photo`
- `Terminal_Panel_A`
- `Terminal_Panel_B`
- `Terminal_Panel_C`

所有对象均为 `Mesh / BufferGeometry / MeshStandardMaterial`，顶点数均为 4，当前占位材质参数为：

```text
side: FrontSide
transparent: false
opacity: 1
depthTest: true
depthWrite: true
renderOrder: 0
```

没有发现 Outline、后处理或特殊黑边 Shader 作用于这些对象。

### 定位结果

| 对象 | 近邻表面 | Z-fighting 风险 | 结论 |
|---|---|---:|---|
| `Creativity_Screen` | `Workstation_Monitor`，包围盒间隙 0 | 是 | 与显示器正面几何重合 |
| `PersonalIntro_Photo` | `Photo_Frame`，包围盒间隙 0 | 是 | 与相框内部表面几何重合 |
| `Terminal_Panel_A` | `Tech_Support_A`，约 0.012 BU | 否 | 很近但不是共面 |
| `Terminal_Panel_B` | `Tech_Support_B`，约 0.183 BU | 否 | 没有共面证据 |
| `Terminal_Panel_C` | `Tech_Support_C`，约 0.173 BU | 否 | 没有共面证据 |

### 修复方案

没有移动 GLB 内的对象。Three.js 加载后对五个内容平面统一执行：

- `userData.isContentPlane = true`
- `FrontSide`
- `depthTest = true`
- `depthWrite = true`
- `polygonOffset = true`
- `polygonOffsetFactor = -1`
- `polygonOffsetUnits = -1`
- 关闭 `castShadow` 和 `receiveShadow`

这解决了两个共面内容平面的深度竞争，同时保留了未来替换屏幕 / 图片纹理的能力。三个 Terminal Panel 没有做肉眼可见的位移。

当前看到的深灰色内容区域本身是 GLB-safe 占位材质，不是额外的黑色描边。

## 2. 基础阴影系统

### Renderer

- `renderer.shadowMap.enabled = true`
- `THREE.PCFSoftShadowMap`
- `renderer.outputColorSpace = THREE.SRGBColorSpace`

### Lights

- `AmbientLight`：强度 `0.55`
- `HemisphereLight`：强度 `0.35`
- `DirectionalLight`：强度 `2.15`
- DirectionalLight 位置：`(5, 9, 7)`
- `castShadow = true`

### Shadow 参数

- Map Size：`2048 × 2048`
- Shadow Camera：left/right `-16 / 16`
- Shadow Camera：top/bottom `16 / -16`
- Near/Far：`0.1 / 40`
- `bias = -0.00025`
- `normalBias = 0.02`
- `radius = 3`

### Mesh 阴影策略

- 一般实体、展台、支撑、工作站、兴趣物件、相框：`castShadow = true`，`receiveShadow = true`
- `Portfolio_Ground_Plane`：`castShadow = false`，`receiveShadow = true`
- `Creativity_Screen`
- `PersonalIntro_Photo`
- `Terminal_Panel_A / B / C`

以上五个内容平面：`castShadow = false`，`receiveShadow = false`，避免内容面产生脏边和额外深色块。

相比 v1，Projects、Creativity 和 More Interests 画面现在有更明显的地面接触阴影、桌腿投影和展台层次；没有加入 SSAO、Bloom、OutlinePass 或后处理链。

## 3. Personal Intro Camera 微调

没有改动 `camera_states.json`。

在 Three.js 代码层将 `personalIntro` 相机沿当前 Camera → Target 方向靠近 22%，保持 Target、FOV 和观看方向不变。

### Blender 坐标数据层的原始 / 调整后位置

```text
原始：    ( 0.071590, -5.295649, 2.332651 )
调整后：  (-0.329175, -4.903699, 2.068651 )
```

转换到 Three.js 后：

```text
(-0.329, 2.069, 4.904)
```

同步更新了内存中的 `PersonalIntro_to_TechStack` 起始关键帧（frame 48），避免从 Personal Intro 进入 Tech Stack 时发生跳变。其他 Camera State、Transition 和 CloseUp 数据没有调整。

## 4. 调试开关

测试页新增：

- `Shadows: On / Off`
- `Plane Info`：显示五个内容平面的完整诊断数据
- `Highlight Planes: On / Off`：临时橙色高亮内容平面

内容平面诊断同时输出到浏览器 Console，并在页面 Debug Panel 中可展开查看。

## 5. 回归测试

- GLB 加载：通过
- 五大 ROOT：5 / 5，通过
- Personal Intro 新位置：通过
- Intro → Tech → Projects → Creativity → More Interests：通过
- Creativity Base → CloseUp：通过
- CloseUp → Creativity Base：通过
- CloseUp → More Interests：通过，先退出 CloseUp 再进入 More Interests
- 阴影开关：通过
- 内容平面信息开关：通过
- 内容平面高亮开关：通过
- 默认桌面视口：通过
- 390 × 844 移动视口：Debug UI、模型和 ROOT 状态正常
- 应用 Console warning/error：无

浏览器自动化服务偶发的外部 Statsig 网络超时不属于测试项目，且没有进入应用 Console 日志。

## 6. 当前限制

当前仍然不是最终 NPR 阶段，未加入：

- Hatching
- Paper Texture
- Outline / Sobel
- Toon Shader
- ShaderMaterial 风格化
- SSAO / Bloom / Post Processing

与 Blender v6 Visual Master 的最大差距仍然是：Three.js 当前只使用 GLB 基础材质、基础灯光和实时阴影，没有复刻 Blender 的 Freestyle、粗排线和 NPR 材质逻辑。

## 7. 对现有 Camera / Navigation 的影响

- 没有修改五大 ROOT
- 没有修改模型和展台 Transform
- 没有修改 GLB
- 没有修改 Camera JSON 文件结构或内容
- 没有破坏 Camera State 读取
- 没有破坏主导航
- 没有破坏 Creativity CloseUp 状态机
- 仅通过代码层调整 Personal Intro 位置及其直接相连的起始关键帧

结论：基础阴影、内容平面深度问题和 Personal Intro 镜头聚焦已处理，可以进入下一阶段 NPR 风格复刻，但本次没有开始 NPR 实现。
