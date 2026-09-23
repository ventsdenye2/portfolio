# Kui — Creative Technology Portfolio

当前作品集位于 `threejs-integration-test/`，使用 Three.js、TypeScript、GSAP 和 Vite。目录名沿用早期集成测试阶段的名称，目前承载正式网站。

## 本地运行

```bash
cd threejs-integration-test
npm install
npm run dev
```

打开 <http://localhost:5173/>。根目录不再包含旧版网站入口。

## 构建与部署

在 `threejs-integration-test/` 中运行：

```bash
npm run build
npm run preview
```

构建结果位于 `threejs-integration-test/dist/`，预览地址为 <http://localhost:4173/>。部署时上传 `dist/` 内的文件，不要上传整个仓库。Nginx 配置参考 `threejs-integration-test/deploy/`。

## Git 发布分支

- `main` 保存源码。
- `deploy` 使用独立历史，根目录只保存构建后的站点文件。
- 两个分支目前手动发布；向 `main` 推送不会自动更新 `deploy` 或服务器。

服务器可以将发布分支克隆到一个新的目录（不要覆盖现有网站目录）：

```bash
git clone --single-branch --branch deploy https://github.com/ventsdenye2/portfolio.git ~/portfolio-deploy
git -C ~/portfolio-deploy pull --ff-only
```

首次部署需将构建文件同步到 Nginx 网站目录，或通过版本目录切换发布。不要将 `.git` 目录复制到可公开访问的网站目录。服务器迁移尚需单独执行。

## 目录用途

- `threejs-integration-test/src/`：页面逻辑、样式、3D 场景和交互。
- `threejs-integration-test/src/content/portfolioContent.ts`：项目列表与个人介绍。
- `threejs-integration-test/public/`：网站使用的模型、相机配置、项目正文、图片、视频与互动作品。
- `threejs-integration-test/source-media-originals/legacy/`：旧站留下的原始项目文稿和媒体，仅用于编辑参考，不参与网站构建；该原始素材目录不纳入 Git。
- 根目录的 Blender 工程、`tools/`、`exports/` 与报告：3D 制作工具和历史制作资料。

旧版 HTML/CSS/JS 网站已移除。历史报告中的旧路径仅记录当时的迁移过程。
