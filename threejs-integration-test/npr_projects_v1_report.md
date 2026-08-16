# Three.js NPR Prototype v1 — Projects

## Scope

本次只对 `ROOT_Projects` 下的工作站 Geometry 应用 NPR Prototype。未修改 Blender 文件、GLB 文件、Camera State、Camera Transition 或导航状态机；其他四个模块保持普通基础材质。

`Projects_Screen` 被明确排除在 NPR 之外，继续使用独立动态内容材质。

## Implementation

### NPR Pipeline

实现集中在 `src/npr/`，由 `NPRProjectsController` 管理，可分别启用或关闭：

```text
Base Lighting / Tone
        ↓
Shadow-aware Hatch Mask
        ↓
Major-structure Outline
        ↓
Subtle Paper Noise
```

- Base：使用 `MeshToonMaterial` 与四级暖灰 gradient map，保留来源材质的纹理引用。
- Shadow / tone：根据世界空间法线与主光方向计算明暗遮罩，使用阈值区分中间阴影与深阴影。
- Hatching：使用屏幕空间 `gl_FragCoord` 生成斜向排线，不依赖 UV，不会把线条纹理永久贴死在模型表面。
- Outline：使用 `EdgesGeometry` 提取结构边，再通过 `LineSegments2` / `LineMaterial` 绘制；过滤短边，避免键盘细节变成黑色噪声。
- Paper：使用低振幅屏幕空间 hash noise，只提供非常轻微的亮度变化。

### Hatching

默认使用约 45° 的粗疏排线。中间阴影显示主方向排线，深阴影才叠加少量反方向排线；亮面尽量保持干净。

### Outline

最终没有采用 Inverted Hull，因为工作站键盘结构会产生过多无关轮廓。当前采用：

- `EdgesGeometry` threshold：42°
- 最短边过滤：0.22 local units
- `LineSegments2` + `LineMaterial`
- 深灰色、约 1.96px 的可调轮廓

### Lighting and Shadow

保留 Integration Test v2 的实时阴影系统，并调整为更暖的基础环境：

- `AmbientLight`：颜色 `#fffdf7`，强度 `0.46`
- `HemisphereLight`：天空 `#f4eee2`，地面 `#5f5a52`，强度 `0.28`
- `DirectionalLight`：颜色 `#fffbf2`，强度 `2.4`
- 阴影类型：`PCFSoftShadowMap`
- 地面颜色：`#e2ddd2`
- 场景背景：`#b8b3aa`

## Parameters

| 参数 | 当前值 |
|---|---:|
| Hatch Width | 7 px |
| Hatch Spacing | 34 px |
| Hatch Angle | 45° |
| Hatch Opacity | 0.82 |
| Shadow Threshold | 0.54 |
| Deep Shadow Threshold | 0.76 |
| Outline Width | 0.014 config units，约 1.96 px |
| Outline Color | `#42403b` |
| Hatch Color | `#514e47` |
| Paper Noise Opacity | 0.018 |
| Background Color | `#b8b3aa` |
| Ground Color | `#e2ddd2` |

所有主要参数均已放入 NPR Debug Panel，可实时开关和调节。

## Projects Screen and Dynamic Texture

`Projects_Screen` 没有使用 NPR 材质、排线、轮廓、纸张噪声或风格化明暗。它仍通过独立内容材质显示动态项目内容。

已验证：

- `setProjectsScreenTexture()` 仍然工作。
- Project Screen A / B 切换正常。
- 修正了动态纹理的 `flipY`，Project A 文字方向正常。
- NPR 只管理 `ROOT_Projects` 中除 `Projects_Screen` 外的 Geometry。

## Comparison with Blender v6

已经接近的部分：

- 暖灰 / 米白环境与主体关系。
- 粗、宽间距、明显的斜向排线。
- 暗部驱动排线，亮面保持相对干净。
- 深灰结构轮廓。
- 工作站与地面的基础接触阴影。
- 视觉效果可以通过开关与参数实时对比。

仍存在的差距：

- Blender v6 的排线覆盖更有手绘密度变化，目前 Three.js 版本更像“粗排线阴影点缀”，不是完整复刻。
- Blender 的 Freestyle / NPR 灯光能提供更强的全局结构线与暗部塑形；当前使用实时材质与可维护的 Geometry 边线方案。
- 当前项目屏幕按要求保持干净，不参与 NPR；Blender 参考图中的显示器内容与外壳风格因此不会完全一致。
- 本阶段没有加入真实纸张纹理、后处理或 Screen-space Sobel，因此轮廓和纸面感仍较克制。

## Performance Snapshot

在 Projects Camera State、NPR 开启、默认参数下记录：

- FPS：约 114
- Draw Calls：7
- Triangles：19,978
- NPR managed meshes：1
- Shader / overlay passes：4（Base、Hatching、Outline、Paper）

这是桌面端当前浏览器验证快照，不是最终性能基准；尚未进行移动端、低端 GPU 或正式发布构建的性能测试。

## Validation

- GLB 加载：通过。
- 五大 ROOT：5 / 5，通过。
- Projects Camera State：通过。
- NPR Projects On / Off：通过。
- Outline On / Off：通过。
- Hatching On / Off：通过。
- Paper Noise On / Off：通过。
- Project Screen A / B 动态纹理：通过。
- 主导航与 Camera State：通过。
- Creativity Base ↔ CloseUp：通过。
- CloseUp → Other Module：会先返回 Creativity Base，再进入目标模块。
- In-app Browser 应用错误日志：无。

## Limitations

本版本仍是 Projects-only Prototype，不是最终 Three.js NPR 实现：

- 尚未应用到 Personal Intro、Tech Stack、Creativity 或 More Interests。
- 未实现最终 OutlinePass、Sobel、完整 Screen-space shadow texture 或后处理链。
- Hatching 的阴影遮罩当前主要依据法线与主光方向，而不是完整实时阴影贴图，因此遮挡阴影区域仍需后续增强。
- 未加入真实纸张图片与最终 UI。
- 未进行 LOD、压缩、Draw Call 合并或移动端优化。

## Output

- 预览图：`references/npr_projects_v1.png`
- 本报告：`npr_projects_v1_report.md`

