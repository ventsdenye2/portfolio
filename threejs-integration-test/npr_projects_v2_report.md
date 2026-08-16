# Three.js NPR Prototype v2 — Projects 明暗修正

## 1. 问题根因

本次通过检查现有 `NPRProjectsController` 与 Shader 流程定位到：

1. Projects 基础材质使用了 `MeshToonMaterial + gradientMap`。
2. 该 gradient map 的最低明度约为 `150 / 255 ≈ 0.59`，大量普通受光面会被离散 Toon 明暗直接压到中灰。
3. 因此桌面、桌腿、键盘、机箱外壳即使不是深阴影，也会先变成灰色，再叠加排线。
4. 原 Hatching Mask 以 `darkness = 1 - NdotL` 判断，并使用 `0.54 / 0.76` 阈值，导致正常半明面也容易进入排线区域。
5. 当前 Renderer 没有启用 ACES；默认是 `NoToneMapping`，曝光不是造成整体发灰的主要原因。
6. Paper Noise 强度原为 `0.018`，会带来轻微整体脏感，但不是主要根因；本次同时降低到 `0.008`。

## 2. 修改内容

### Base Tone

- 移除 Projects NPR 基础材质的低明度 Toon gradient map。
- 改为高亮暖白 `MeshStandardMaterial`：
  - Base Color：`#f1ece2`
  - Metalness：`0`
  - Roughness：`0.9`
- 保留原始 UV / map 引用与原始材质缓存。
- `baseLightBoost` 现在可以从 Debug Panel 调节基础亮度。

这样基础材质负责正常光照与实时阴影，但不会再通过人为的低灰度梯度把整个工作站压成灰模。

### Shadow Mask / Hatching

Hatching Shader 仍然是独立叠加层，但 Mask 改为直接使用亮度阈值：

```text
brightness = max(dot(worldNormal, lightDirection), 0)
```

- `brightness > shadowThreshold`：保持干净亮面。
- 接近 `shadowThreshold`：出现较弱的主方向粗排线。
- 低于 `deepShadowThreshold`：加强主排线，并增加少量交叉排线。
- 深阴影只增加非常轻的额外暗化，不再改变整张 Base Color。

当前排线仍使用屏幕空间 `gl_FragCoord`，没有改成 UV 纹理。

### Tone Mapping / Exposure

保留中性明确的渲染设置：

- Tone Mapping：`THREE.NoToneMapping`
- Exposure：默认 `1.0`

本轮没有用暴力提高曝光来掩盖 Shader 问题。

### Real-time Shadow

实时阴影系统保留，没有取消桌面下方、桌腿和地面的接触关系。阴影仍由 `PCFSoftShadowMap` 提供；本轮主要修复主体材质，不改变 Camera 或模型。

### Paper Noise

- Paper Noise opacity：`0.018 → 0.008`
- 仍然只作为极轻微屏幕空间亮度扰动，不参与主体整体压暗。

## 3. 当前参数

| 参数 | v2 值 |
|---|---:|
| Base Light Boost | 1.00 |
| Midtone Strength | 0.68 |
| Hatch Width | 7 px |
| Hatch Spacing | 34 px |
| Hatch Angle | 45° |
| Hatch Opacity | 0.82 |
| Shadow Threshold | 0.36 brightness |
| Deep Shadow Threshold | 0.16 brightness |
| Shadow Darken Amount | 0.06 |
| Outline Width | 0.014 config units，约 1.96 px |
| Outline Color | `#42403b` |
| Hatch Color | `#514e47` |
| Paper Noise Strength | 0.008 |
| Background Color | `#b8b3aa` |
| Ground Color | `#e2ddd2` |

## 4. 修正结果

- 桌面：已从整体中灰恢复为明显的暖白 / 米白。
- 桌腿：亮面保留浅色，只有朝向背光和接触区域变暗。
- 机箱：白色壳体保持浅色，结构边由 Outline 与局部 Hatch 辅助。
- 键盘：整体可读，不再沉入一片中灰。
- 显示器外壳：主体保持浅色；`Projects_Screen` 仍是独立内容面。
- 排线：不再负责“把整个物体染灰”，只作为暗部叠加语言。

因此本轮已经改成：

```text
Lighting → 生成明暗判断 / Shadow Mask
Base Material → 保持浅色主体
Hatching → 只叠加在暗部
```

## 5. 动态屏幕与导航验证

- `Projects_Screen` 完全排除 NPR。
- `Project Screen A / B` 切换正常。
- `setProjectsScreenTexture()` 仍然工作。
- Projects Camera State 保持原位置、旋转和 FOV。
- 五大 ROOT 仍为 `5 / 5`。
- NPR On / Off 对比正常。
- 其他导航与 Creativity CloseUp 逻辑未修改。

## 6. 性能快照

Projects Camera State、NPR On 下浏览器快照约为：

- FPS：约 120
- Draw Calls：约 7（浏览器视口与渲染时机不同可能波动）
- Triangles：约 19,978
- NPR managed meshes：1
- Shader / overlay passes：4

## 7. 与 Blender v6 的剩余差距

当前最接近参考图的是：

- 暖白主体不再整体灰掉。
- 暗部通过结构边线与粗排线表达。
- 桌面、键盘、机箱外壳保持良好的浅色分离度。

剩余主要差距：

- Blender v6 的排线在暗面覆盖更连续、更有手绘节奏；当前 Three.js 版本仍偏向局部暗部线条。
- Blender 的 Freestyle / NPR 光照能产生更丰富的内部结构线；当前使用可维护的 `EdgesGeometry` 主要边线方案。
- 当前没有真实纸张纹理、Sobel 后处理或完整实时 Shadow Texture 驱动的屏幕空间 NPR。
- 本阶段仍只应用到 `ROOT_Projects`，其他模块保持普通材质。

## 8. 输出

- v2 预览图：`references/npr_projects_v2.png`
- 本报告：`npr_projects_v2_report.md`

