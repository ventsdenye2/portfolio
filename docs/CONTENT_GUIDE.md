# 内容发布说明

这个站点是一个纯静态内容站。页面不会连接数据库，GitHub Pages 只需要发布仓库里的文件即可。

## 新增一条作品或想法

1. 在 `content/entries/` 下新建一个英文 slug 目录，例如 `time-camera/`。
2. 在目录中创建 `content.md`，写正文。支持二级/三级标题、段落、列表、引用、链接和代码块。
3. 在 `content/index.json` 的 `entries` 数组中新增一个对象：

```json
{
  "slug": "time-camera",
  "type": "想法",
  "status": "原型中",
  "date": "2026",
  "format": "互动机制",
  "title": "拍照会删除对应记忆",
  "summary": "一句话说明这个想法最有趣的地方。",
  "cover": "content/entries/time-camera/cover.png",
  "tags": ["叙事", "机制"],
  "content": "content/entries/time-camera/content.md",
  "interactive": "content/entries/time-camera/interactive.html"
}
```

4. 如果有可玩的网页，把它放到同一个目录并填写 `interactive`。没有互动版本就删掉这一行。
5. 提交并推送到 GitHub，首页、档案列表和详情页会自动出现新条目。

## 给 ChatGPT 的最小交接格式

以后可以直接提供：

```text
请在这个作品集里新增一个条目：
标题：
类型：作品 / 想法 / 笔记
状态：
一句话简介：
关键词：
正文或对话整理：
是否需要可玩的 interactive.html：是 / 否
```

生成结果应至少包含 `content.md` 和 `content/index.json` 中对应的索引对象。图片、音频和视频放在条目自己的目录中，避免所有素材继续堆在根目录。

## 本地预览

由于浏览器会限制 `file://` 页面读取 JSON 和 Markdown，预览时请在仓库根目录启动静态服务器：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。GitHub Pages 不需要额外配置，所有路径都使用相对路径。
