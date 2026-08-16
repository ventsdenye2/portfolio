# Three.js Integration Test v1

测试时间：2026-08-15  
项目路径：`D:\portfolio\portfolio\threejs-integration-test`  
本地地址：`http://127.0.0.1:5173/`

## GLB

- `portfolio_scene.glb` 加载：通过
- 文件大小：462,536 bytes
- GLB 顶层 Group 子节点：6 个（地面 + 五大 ROOT）
- Object 数量：83
- Mesh 数量：73
- Empty / Object3D 数量：10
- GLB 未加载 Blender 灯光、Camera 或 Freestyle 数据
- 未对 GLB 做自动缩放或旋转

### 关键对象

所有直接可命名检查项均被找到：

- `Terminal_Panel_A / B / C`
- `Workstation_Desk`
- `Workstation_Monitor`
- `Creativity_Screen`
- `Photo_Frame`
- `PersonalIntro_Photo`
- `Compact_Camera`
- `Artist_Palette`
- `Game_Controller`
- `World_Globe`

`Kendo_Gear` 在 GLB 中不是单一 Mesh 名称，而是保留为 `ROOT_Kendo` 下的 48 个 `Kendo_Gear_Part_00`–`Kendo_Gear_Part_47`。测试代码没有创建假的 `Kendo_Gear` 对象，而是将该聚合结构作为验证结果记录。

## ROOT

五大 ROOT 全部找到：5 / 5。

- `ROOT_PersonalIntro`：通过
- `ROOT_TechStack`：通过
- `ROOT_Projects`：通过
- `ROOT_Creativity`：通过
- `ROOT_MoreInterests`：通过

层级仍由 GLB 提供，测试页没有重新创建 ROOT，也没有改写任何对象 Transform。

## Camera State

六个瞬时状态均可点击并正确写入 Camera：

- `personalIntro`：通过
- `techStack`：通过
- `projects`：通过
- `creativityBase`：通过
- `creativityCloseup`：通过，进入 `currentMainState=creativityBase / detailState=closeup`
- `moreInterests`：通过

应用顺序为：

1. Position
2. 转换后的 Quaternion
3. FOV
4. `camera.updateProjectionMatrix()`

当 JSON 含有 Target 时，代码先转换 Position / Target，再用等价的 Three.js Camera `lookAt` 方向重建 Quaternion。原始 JSON 未修改。

## Coordinate Conversion

需要统一的 Blender → Three.js 坐标转换，原因是：

- Blender 使用 Z-up；
- glTF / Three.js 使用 Y-up；
- GLB 已由 `GLTFLoader` 按 glTF 坐标载入；
- Blender Camera JSON 仍保存 Blender 世界坐标。

当前集中在 `convertBlenderCameraStateToThree()` 中处理：

```text
(x, y, z)_Blender -> (x, z, -y)_Three
```

Quaternion 不直接污染 JSON；有 Target 的状态使用转换后的 Target 重建等价 Camera Quaternion。这样 Projects、Creativity 和 More Interests 等视图都能看到正确的模型方向和高度。

## Camera Transitions

动画使用 `camera_transitions.json` 中已有的关键帧，不记录或播放每一帧：

| Transition | Waypoints | Result |
|---|---:|---|
| PersonalIntro → TechStack | 48, 69, 90 | 通过 |
| TechStack → Projects | 138, 159, 180 | 通过 |
| Projects → CreativityBase | 228, 249, 270 | 通过 |
| CreativityBase → MoreInterests | 318, 339, 360 | 通过 |

每个 waypoint 段同时插值：

- Position：`Vector3.lerpVectors`
- Rotation：`Quaternion.slerpQuaternions`
- FOV：同步 Tween
- Ease：GSAP `power2.inOut`

源码中的 `isTransitioning` 会阻止同一时间启动第二条 Camera 动画。

原始 JSON 没有为所有反向主导航提供 Blender Waypoint，因此没有对应数据的反向或跳转路线使用集中式的当前状态 → 目标状态插值 fallback；没有修改 Blender Camera Path 或 JSON。

## Creativity CloseUp

- Creativity Base → Creativity CloseUp：通过
- Creativity CloseUp → Creativity Base：通过
- CloseUp → More Interests：通过，实际执行 CloseUp → Creativity Base → More Interests
- `detailState === closeup` 时不会直接跳过 Base 进入其他主模块

该行为与 `camera_navigation_rules.json` 一致。

## Runtime / Browser QA

- `npm run dev`：正常启动
- `npm run build`：通过
- 浏览器页面 Title：`Portfolio Three.js Integration Test v1`
- 页面不是空白页，Debug UI 和 WebGL Canvas 均正常渲染
- 默认视口验证：通过
- 移动视口 390×844：Debug UI 可滚动，ROOT 状态仍显示 5 / 5；验证后已恢复默认视口
- 浏览器 `tab.dev.logs`：无应用侧 warning / error
- 浏览器自动化服务本身偶发出现外部 Statsig 网络超时提示；该提示不来自测试项目，且未进入应用 Console 日志

## Issues / Known Limitations

1. `Kendo_Gear` 是 48 个分件，不是单一对象名；`ROOT_Kendo` 是其可交互聚合节点。
2. GLB 当前无纹理，这是 Export Ready 的预期结果；本阶段没有实现 NPR、Outline、Hatching 或 Post Processing。
3. `camera_transitions.json` 缺少完整反向 Waypoint，反向导航使用代码层的直接插值 fallback；如果未来需要完全复刻 Blender 反向路径，需要在 Blender 中提供对应关键帧数据。
4. Vite 提示 Three.js bundle 超过 500 kB；本阶段不做性能拆包或模型优化。
5. 当前页面是结构 / Camera 验证页面，不是最终作品集 UI，背景和灯光仅为中性测试配置。

## Conclusion

已通过：

- GLB Loading
- 五大 ROOT Validation
- 六个 Camera State Instant Test
- 四段主要前向 Camera Transition
- Quaternion Rotation 插值
- Creativity CloseUp Enter / Exit
- CloseUp → Other Module 强制先返回 Base
- Blender → Three.js 统一坐标转换

本阶段未开始 NPR、正式网页 UI、性能优化或移动端适配。
