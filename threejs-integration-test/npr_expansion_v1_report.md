# NPR Expansion v1 Report

## Scope

本阶段完成了 Projects NPR 参数冻结、通用 NPR Manager 重构、More Interests 扩展、Kendo 首轮验证和 Canvas 预览导出修复。

没有修改 Blender、GLB、Camera State、Camera Transition、ROOT Transform 或 Creativity CloseUp 状态机。

## Frozen Projects Preset

文件：`src/npr/presets/projectsPreset.ts`

参数来自用户当前 Debug Panel 实际调参截图：

| 参数 | 冻结值 |
|---|---:|
| Base Light Boost | 1.19 |
| Midtone Strength | 0.33 |
| Hatch Width | 11.50 px |
| Hatch Spacing | 23 px |
| Hatch Angle | 45° |
| Hatch Opacity | 0.58 |
| Shadow Threshold | 0.36 |
| Deep Shadow Threshold | 0.37 |
| Shadow Darken Amount | 0.00 |
| Outline Width | 0.01 config units |
| Outline Color | `#42403b` |
| Hatch Color | `#514e47` |
| Paper Noise Strength | 0.01 |

页面重新加载后 Projects 默认使用这套 preset，不再回到之前的示例默认值。

## Refactor

新的通用入口位于：

`src/npr/NPRManager.ts`

核心 API：

```ts
nprManager.applyNPRToRoot(root, preset, options)
nprManager.enableNPR(root)
nprManager.disableNPR(root)
```

当前实现拆分为：

- `NPRManager`：管理多个 ROOT 的 NPR Controller。
- `NPRRootController`：对单个 ROOT 应用 Base、Hatching、Outline、Paper 四层。
- `projectsPreset.ts`：冻结后的 Projects 参数。
- `interestsPreset.ts`：More Interests 的轻量化参数。
- `NPRProjects.ts`：保留旧 import 的兼容导出。

每个 Mesh 应用 NPR 前都会保存：

```ts
mesh.userData.originalMaterial
```

关闭 NPR 后恢复原始 GLTF Material。

## Content Plane Exclusion

统一排除以下对象：

- `PersonalIntro_Photo`
- `Projects_Screen`
- `Creativity_Screen`
- `Terminal_Panel_A`
- `Terminal_Panel_B`
- `Terminal_Panel_C`

判断同时支持 `userData.isContentPlane` 和统一名称集合。内容 Plane 不会获得 Base NPR、Hatching 或 Geometry Outline。

`Project Screen A / B` 已重新验证，动态 Texture 仍只作用于 `Projects_Screen`。

## More Interests / Kendo Test

文件：`src/npr/presets/interestsPreset.ts`

More Interests 采用同一套 Shader，但使用更克制的参数：

| 参数 | Interests 值 |
|---|---:|
| Base Light Boost | 1.15 |
| Midtone Strength | 0.28 |
| Hatch Width | 7 px |
| Hatch Spacing | 38 px |
| Hatch Opacity | 0.34 |
| Shadow Threshold | 0.28 |
| Deep Shadow Threshold | 0.18 |
| Outline Width | 0.007 config units |
| Paper Noise Strength | 0.006 |

先检查了 `Kendo_Gear` 对象是否存在，再对 `ROOT_MoreInterests` 的全部 descendants 应用同一套 NPR。当前覆盖：

- `Kendo_Gear`
- `Compact_Camera`
- `Artist_Palette`
- `Game_Controller`
- `World_Globe`
- More Interests 展台和平台结构

Kendo 的第一版参数出现过度交叉排线，之后仅收敛 `interestsPreset`：增大间距、降低线宽/透明度、降低深阴影覆盖。最终截图中护具曲面和竹剑仍可辨认，没有看到明显 Moiré；当前静态和即时镜头验证没有发现闪烁或游移。

展台也使用同一套 NPR，但由于 Interests preset 的 Hatch Opacity 更低，视觉权重低于兴趣物件。

## Screenshot Fix

`Capture Projects Preview` 黑图的主要风险是 WebGL 默认 `preserveDrawingBuffer: false`，在渲染帧结束后直接读取 Canvas 可能得到已清除的缓冲区。

修复方式：

1. 创建 Renderer 时启用 `preserveDrawingBuffer: true`。
2. 点击按钮时先更新 NPR Controller。
3. 显式执行一次当前场景 Render。
4. 再从真正的 WebGL Canvas 调用 `toBlob("image/png")`。
5. 下载的内容只包含 Canvas，不包含 Debug UI。

浏览器点击后状态显示：

```text
Current WebGL canvas downloaded as npr_projects_final.png
```

同时已用桌面浏览器截图验证输出不是黑图、透明图或空白图。

## Screenshots

- Projects final：`references/npr_projects_final.png`
- Projects regression：`references/npr_projects_regression.png`
- More Interests / Kendo：`references/npr_more_interests_v1.png`

## Performance

### Projects only

- NPR Meshes：1
- Shader Passes：4
- Draw Calls：7
- Triangles：19,978
- FPS：约 120

### Projects + More Interests

- NPR Meshes：59
- Shader Passes：8
- Draw Calls：约 150
- Triangles：约 38,166
- FPS：约 120

数值来自当前桌面浏览器快照，会随相机可见性、视口和渲染时机略有变化。

## Debug UI

已增加：

- Projects / More Interests 模块选择
- Active NPR 开关
- Projects NPR 独立开关
- More Interests NPR 独立开关
- Outline / Hatching / Paper Noise 开关
- Reset Preset
- Copy Current Values（输出可复制的 JSON preset 到 Console）
- 当前模块对应的运行时 Slider

当前默认选择 Projects；用户可以切换到 More Interests 调参，不会改变另一个模块的 preset。

## Validation

- GLB：通过。
- ROOT：5 / 5。
- Projects preset：重新加载后锁定为截图参数。
- More Interests NPR：通过。
- Kendo NPR：通过，已收敛过度交叉排线。
- Project Screen A / B：通过。
- `Capture Projects Preview`：通过，状态显示成功。
- NPR On / Off：通过。
- Preset Reset：通过。
- Copy Current Values：通过。
- Creativity CloseUp Enter / Exit：通过。
- 应用 Console error / warn：无。

## Remaining Issues

- More Interests 当前复用了整个 `ROOT_MoreInterests`，因此展台和五个兴趣物件的 NPR 仍是同一套 Controller；后续若要更细腻的局部层级，可增加 object-level override，但本阶段没有拆成五套 Shader。
- Blender v6 的 Freestyle 和手绘排线覆盖比当前实时 Geometry Outline + screen-space Hatch 更丰富。
- 当前仍未扩展 Tech Stack、Personal Intro 或 Creativity。
- 尚未进行移动端低端 GPU、正式发布构建和长期动画 FPS 测试。

