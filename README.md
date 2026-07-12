# 泽 / Ze — 作品与可玩想法

这是泽的个人作品集与互动想法档案馆，收集游戏原型、互动故事、VR/AI 实验和还在形成中的概念。

站点采用纯静态架构：`index.html` 负责页面壳，`assets/` 负责样式与逻辑，`content/` 负责可增量发布的 Markdown 内容和条目索引。新增内容不需要改首页结构，详见 [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)。

## 本地运行

```bash
python -m http.server 8000
```

打开 <http://localhost:8000/> 即可预览。

## 目录结构

```text
content/
├── index.json                 # 所有条目的目录索引
└── entries/
    └── entry-slug/
        ├── content.md         # 正文
        ├── cover.png           # 可选封面
        └── interactive.html   # 可选可玩版本
assets/
├── css/main.css
└── js/app.js
```

## 发布原则

先把一个核心想法做成 3—8 分钟内可以完成的体验，再考虑扩展。作品优先保持静态、可分享、可以在手机和桌面端打开。
