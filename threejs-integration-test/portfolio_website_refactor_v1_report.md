# Portfolio Website Refactor v1

## Existing Content Audit

旧版内容来源主要位于项目根目录的 `content/index.json`、`content/entries/*/content.md`、`images/`、`videoes/` 和旧版 `index.html` / `assets/`。

实际发现并复用的内容：

- 站点定位：游戏开发、互动叙事、创意技术。
- 个人简介：计算机专业学生与创作者，关注游戏、图形、交互叙事以及人在系统中的选择。
- 正式项目：`爆浆奶茶店`、`Save Lara`、`厨房交响曲·乱炖大危机`。
- 概念/互动内容：`GHOSTFONT / 幽灵字体`、`知风夜跑`。
- 项目摘要、类型、状态、年份、格式、标签、封面和外部链接。
- GitHub 联系方式：`https://github.com/ventsdenye2`。

已经迁移到 Three.js 项目的 `src/content/portfolioContent.ts`，并复制必要封面到 `public/content-media/`。旧版正文文件和原始网站文件未删除。

暂未直接嵌入的内容：

- 旧版项目详情 Markdown 的完整长文，目前保留在根目录内容系统中，首页只使用摘要和元数据。
- `videoes/codeplay.mp4`，当前正式骨架只保留项目链接和摘要，不增加媒体播放器。
- Concept Lab 的完整详情页，当前只作为 Creativity/内容来源参考。

## New UI Structure

正式桌面页面由以下层组成：

```text
Three.js Canvas
└── Portfolio UI Overlay
    ├── ZE. / Creative Technology Header
    │   └── Intro / Tech / Projects / Creativity / Interests
    ├── Current Module Panel
    │   ├── Module index and kicker
    │   ├── Title / subtitle / description
    │   ├── Tags
    │   └── Module actions
    ├── Five-step Module Rail
    └── Scroll / scene status hint
```

默认进入 `Personal Intro`。Canvas 继续全屏作为视觉主体，UI 只提供透明的内容层、导航和当前模块操作。

## Navigation Integration

- 顶部导航和右侧模块轨都调用现有 `CameraController.navigateTo()`。
- `Intro → Tech → Projects → Creativity → Interests` 顺序保持不变。
- 鼠标滚轮和 Arrow Up / Arrow Down 可按模块顺序切换；点击导航仍是主要入口。
- 现有 GSAP Camera Transition、四元数插值、Camera State 和坐标转换没有改动。
- `Creativity CloseUp` 通过正式面板的 `View CloseUp` / `Return to Creativity` 接入。
- 从 CloseUp 点击其他模块时，仍由底层 CameraController 强制执行 `CloseUp → Creativity Base → Target Module`。

## Projects Integration

- 项目数据来自旧版 `content/index.json` 的三个 work entries，整理为 `src/content/portfolioContent.ts`。
- Projects 面板显示当前项目标题、类型、格式、摘要、状态、年份和标签。
- `Prev` / `Next` 在三个项目间循环切换。
- 每个项目切换时会调用现有 `setProjectsScreenTexture()`，将对应 CanvasTexture 替换到 `Projects_Screen`。
- 现有内容平面排除 NPR 的机制没有改变。

## Creativity Integration

- Base 状态显示创意实践说明和 `View CloseUp`。
- CloseUp 状态显示独立标题和返回操作。
- CloseUp 不会被并入新的主导航状态，仍然是底层 Camera 状态机的 detail state。

## Design System

视觉方向是“暖灰 NPR 场景 + 深墨蓝玻璃 UI + 克制强调色”：

- Ink：`#07121f`，用于文字和导航锚点。
- Warm：`#f4f0e8`，用于主要标题。
- Indigo：`#9ca8ff`，用于当前导航和模块轨。
- Teal：`#77d7c3`，用于模块 kicker、标签和场景 ready 状态。
- Coral：`#f0a16f`，用于主要行动按钮和方向提示。
- UI 使用半透明深色卡片、细边框、轻微 backdrop blur 和克制阴影。
- 没有加入霓虹、复杂渐变、大量卡片、FPS/ROOT/Shader 等开发信息。

## Debug UI Policy

正式页面默认隐藏原 Integration Test Debug UI。需要调试时访问：

```text
http://127.0.0.1:5173/?debug=1
```

Debug 模式仍可访问旧的 NPR、阴影、Plane、Camera 和性能控制，不影响正式 UI 的默认体验。

## Verification

- `npm run build`：通过。
- 默认页面：5/5 ROOT 加载，场景 ready，Debug UI 不可见。
- Navigation：Intro、Tech、Projects、Creativity、Interests 均验证通过。
- Projects：Next 从 `爆浆奶茶店` 切换到 `Save Lara`，面板内容和 Projects_Screen 同步。
- Creativity：Base → CloseUp → Interests 验证通过，CloseUp 会先返回 Base。
- 开发模式：`?debug=1` 可重新显示旧调试面板。
- Browser/IAB：使用当前本地页面进行 DOM、截图、交互和控制台检查。

## Remaining Work

- 当前是桌面版 Portfolio Website v1，尚未制作移动端专用构图和交互。
- 项目详情页、完整 Markdown 正文、视频和 Concept Lab 的独立页面尚未接入正式 UI。
- Projects_Screen 目前使用代码生成的项目占位 CanvasTexture，后续可替换为真实项目截图或视频纹理。
- 尚未部署，也未开始最终正式 UI 的 SEO、分享元信息和性能优化。
