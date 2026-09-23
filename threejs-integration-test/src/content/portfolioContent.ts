export type PortfolioState = "personalIntro" | "techStack" | "projects" | "creativityBase" | "moreInterests";

export interface PortfolioProjectMedia {
  type: "video";
  title: string;
  src: string;
  autoplay?: boolean;
  loop?: boolean;
}

export interface PortfolioProjectLink {
  label: string;
  url: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  type: string;
  status: string;
  date: string;
  format: string;
  summary: string;
  tags: string[];
  cover?: string;
  screenImage?: string;
  screenAccent: string;
  detailPath: string;
  media?: PortfolioProjectMedia[];
  links?: PortfolioProjectLink[];
}

export interface TechStackGroup {
  label: string;
  items: string[];
}

export interface InterestCertificate {
  title: string;
  award: string;
  photo: string;
  image: string;
}

/** Curated from the existing root portfolio/content/index.json and entry Markdown. */
export const portfolioContent = {
  meta: {
    description: "I work across games, interactive narratives and creative technology — translating observations into experiences that invite people to look again.",
    fields: "GAME DEVELOPMENT / INTERACTIVE NARRATIVE / CREATIVE TECHNOLOGY",
    github: "https://github.com/ventsdenye2",
  },
  personalIntro: {
    kicker: "PERSONAL INTRO / 01",
    title: "hi, I'm 葵下风",
    subtitle: "Tech otakus save the world!",
    body: "我是一名计算机专业学生与创作者。我关注游戏、图形学、交互叙事、AI、harness工程等等",
    detail: "",
    tags: ["GAME DEVELOPMENT", "INTERACTIVE NARRATIVE", "CREATIVE TECHNOLOGY"],
    openingLines: [
      "I observe what is.",
      "I question why.",
      "I imagine what could be.",
      "I create what comes next.",
    ],
    experienceTimeline: [
      { period: "2025.7–9", title: "科幻美术人才培养工作坊", detail: "制作《爆浆奶茶店》· 主要负责美术、程序" },
      { period: "2025.9–11", title: "轻风计划（中传&央美联合举办）", detail: "参与制作《Time98：世纪末玫瑰夜幕》· 负责程序" },
      { period: "2025.10", title: "TapTap 聚光灯 Game Jam", detail: "参与 Game Jam" },
      { period: "2025.11–12", title: "北航七海游戏社 Game Jam", detail: "制作《SaveLara》· 负责策划、程序" },
      { period: "2026.1–2", title: "第三届萌芽 Game Jam", detail: "以主策划、主程序身份带领 6 人小队制作《厨房交响曲：乱炖大危机！》" },
      { period: "2026.3–7", title: "北航 VR 国重实验室", detail: "制作数字孪生无人机控制平台· 以主程序身份参与· 正在申请软著" },
      { period: "2026.7–至今", title: "腾讯游戏创作大赛 2026 · TENCENT GAME AWARDS 2026", detail: "制作《追忆档案馆》· 以主程序身份参与" },
    ],
  },
  techStack: {
    kicker: "TECH STACK / 02",
    title: "Tech Stack",
    subtitle: "先把工具用起来，再把想法做出来。",
    body: "目前主要使用 Unity、Unreal Engine、Blender、SolidWorks 与 Godot，围绕游戏、交互体验和数字内容进行学习与创作。",
    detail: "在 AI 协助下，我可以快速了解并上手新的工具与工作流；把问题拆清楚、和 AI 共同查资料与调试，再通过自己的实践完成验证，是我正在形成的学习方式。",
    tags: ["UNITY", "UNREAL ENGINE", "BLENDER", "SOLIDWORKS", "GODOT", "AI-ASSISTED LEARNING"],
    groups: [
      { label: "CURRENT TOOLS", items: ["Unity", "Unreal Engine", "Blender", "SolidWorks", "Godot"] },
      { label: "LEARNING APPROACH", items: ["快速上手新工具", "AI 协作学习", "问题拆解", "查资料与调试", "实践验证"] },
    ] satisfies TechStackGroup[],
  },
  creativity: {
    kicker: "CREATIVE PRACTICE / 04",
    title: "Creativity",
    subtitle: "我通过ai将创意快速转化为互动网页",
    body: "",
    detail: "进入 CloseUp，查看显示器中的创意输出。",
    tags: ["DESIGN", "STORY SYSTEMS", "VISUAL EXPERIMENTS"],
  },
  interests: {
    kicker: "MORE INTERESTS / 05",
    title: "More Interests",
    subtitle: "持续学习与探索是我的日常！",
    body: "剑道、摄影、绘画、游戏叙事与世界观搭建，是我当下拥有的爱好",
    detail: "",
    tags: ["KENDO", "PHOTOGRAPHY", "PAINTING", "GAME NARRATIVE", "WORLDBUILDING"],
    certificates: [
      {
        title: "《抱大鹅》",
        award: "第六届 ICAD 国际当代青年美术设计大赛 · 铜奖",
        photo: "/content-media/interests/photo-bao-da-e.webp",
        image: "/content-media/interests/icad-bao-da-e.webp",
      },
      {
        title: "《神气的老学究》",
        award: "第六届 ICAD 国际当代青年美术设计大赛 · 铜奖",
        photo: "/content-media/interests/photo-shen-qi-de-lao-xue-jia.webp",
        image: "/content-media/interests/icad-shen-qi-de-lao-xue-jia.webp",
      },
    ] satisfies InterestCertificate[],
  },
  projects: [
    {
      slug: "memorial-archive",
      title: "追忆档案馆",
      type: "中等体量独立游戏",
      status: "开发中",
      date: "2026",
      format: "Unity / C# / 游戏工程",
      summary: "一款正在开发中的独立游戏：以 Framework / Gameplay 分层、事件通信和数据配置支撑探索、战斗、解谜与剧情系统。",
      tags: ["主程序", "游戏架构", "Unity", "C#"],
      cover: "/content-media/projects/covers/memorial-archive-cover.webp",
      screenImage: "/content-media/projects/covers/memorial-archive-cover.webp",
      screenAccent: "#9ea7ff",
      detailPath: "/content-media/projects/details/memorial-archive.md",
    },
    {
      slug: "ue5-drone-control",
      title: "数字孪生无人机控制平台",
      type: "数字孪生控制平台",
      status: "外场验证",
      date: "2026",
      format: "UE5 / 三端协同 / 软件工程",
      summary: "连接 UE5 客户端、C++ 后端、Jetson 与 PX4 的虚实联动系统，完成从仿真控制到真实无人机执行的 OODA 闭环。",
      tags: ["数字孪生", "无人机", "UE5", "软件工程"],
      screenAccent: "#67d5c5",
      detailPath: "/content-media/projects/details/ue5-drone-control.md",
      media: [{ type: "video", title: "OODA 闭环演示", src: "/content-media/projects/videos/ue5-drone-control-demo.mp4", autoplay: true, loop: true }],
      links: [{ label: "GitHub 仓库", url: "https://github.com/lonelyplanet23/UE5DroneControl" }],
    },
    {
      slug: "bursting-milk-tea-shop",
      title: "爆浆奶茶店",
      type: "剧情驱动游戏",
      status: "已发布",
      date: "2024",
      format: "叙事 / 模拟经营",
      summary: "一间看起来平常的奶茶店，藏着关于人类与奶茶生物共生的恐怖故事。",
      tags: ["叙事", "模拟经营", "恐怖"],
      cover: "/content-media/projects/covers/bursting-milk-tea-shop-cover.webp",
      screenImage: "/content-media/projects/covers/bursting-milk-tea-shop-cover.webp",
      screenAccent: "#5ed2bf",
      detailPath: "/content-media/projects/details/bursting-milk-tea-shop.md",
      media: [{ type: "video", title: "演示视频", src: "/content-media/projects/videos/bursting-milk-tea-shop-demo.mp4" }],
      links: [{ label: "TapTap 页面", url: "https://www.taptap.cn/app/781080?os=pc" }],
    },
    {
      slug: "vr-interaction-coursework",
      title: "VR 人机交互课程项目集",
      type: "VR 人机交互课程项目集",
      status: "课程项目集",
      date: "2026",
      format: "Unity / VR 交互 / PICO 4",
      summary: "五个 Unity VR 课程原型，覆盖眼动、手势、姿态捕捉与空间交互，并完成 PICO 4 真机运行与调试。",
      tags: ["VR", "Unity", "PICO 4", "人机交互"],
      cover: "/content-media/projects/covers/vr-interaction-coursework-cover.svg",
      screenImage: "/content-media/projects/covers/vr-interaction-coursework-cover.svg",
      screenAccent: "#8cc9ff",
      detailPath: "/content-media/projects/details/vr-interaction-coursework.md",
      media: [{ type: "video", title: "VR 交互演示", src: "/content-media/projects/videos/vr-interaction-coursework-demo.mp4", autoplay: true, loop: true }],
    },
    {
      slug: "kitchen-symphony",
      title: "厨房交响曲·乱炖大危机",
      type: "单人躲弹幕游戏",
      status: "已发布",
      date: "2026",
      format: "动作 / 节拍弹幕",
      summary: "在被紊乱波影响的厨房里，观察节拍、躲避弹幕并击败失控的厨具 Boss。",
      tags: ["单人", "弹幕", "节拍", "Game Jam"],
      cover: "/content-media/projects/covers/kitchen-symphony-cover.webp",
      screenImage: "/content-media/projects/covers/kitchen-symphony-cover.webp",
      screenAccent: "#f2ae70",
      detailPath: "/content-media/projects/details/kitchen-symphony.md",
      links: [
        { label: "在 GmHub 查看", url: "https://www.gmhub.com/game/9571" },
        { label: "Bilibili 演示视频", url: "https://www.bilibili.com/video/BV1rUc7zqEEr/" },
      ],
    },
    {
      slug: "save-lara",
      title: "Save Lara",
      type: "回合制解谜",
      status: "原型阶段",
      date: "2024",
      format: "策略 / 时间机制",
      summary: "护送装有主人 Lara 的箱子穿过机器人的追捕，用一次次重启改变战局。",
      tags: ["推箱子", "策略", "时间机制"],
      cover: "/content-media/projects/covers/save-lara-cover.webp",
      screenImage: "/content-media/projects/covers/save-lara-cover.webp",
      screenAccent: "#c1a7ff",
      detailPath: "/content-media/projects/details/save-lara.md",
      links: [{ label: "GitHub 仓库", url: "https://github.com/rorschachandbat/2025BUAAGJ" }],
    },
  ] satisfies PortfolioProject[],
  conceptLab: [
    {
      slug: "kongtian-university",
      title: "空天大学",
      summary: "我在北航文学创作部发起的校园共创 IP：以青春与生命力为核心，为文字、绘画和更多形式的共同创作搭建世界观底座。",
      tags: ["共创 IP", "世界观", "社区创作", "校园叙事"],
      cover: "/content-media/kongtian-university-cover.webp",
      link: "https://wwwwwxinchi.github.io/kongtian-university/index.html",
    },
    {
      slug: "ghostfont",
      title: "GHOSTFONT / 幽灵字体",
      summary: "视觉合规工程师林默在旧录像中发现失踪姐姐留下的 GhostFont，并必须决定人类应如何重新取得自由。",
      tags: ["AI 治理", "互动叙事", "选择后果"],
      cover: "/content-media/ghostfont.svg",
      link: "/content/entries/ghostfont/interactive.html",
    },
    {
      slug: "zhifeng-night-run",
      title: "知风夜跑",
      summary: "在一条校园夜路上交替迈步；当意义暂时缺席，行动本身是否仍能带人继续向前？",
      tags: ["互动叙事", "夜跑", "多结局"],
      cover: "/content-media/zhifeng-night-run.svg",
      link: "/content/entries/zhifeng-night-run/interactive.html",
    },
  ],
} as const;

export type CreativityEntry = (typeof portfolioContent.conceptLab)[number];

export function getModuleContent(state: PortfolioState) {
  if (state === "personalIntro") return portfolioContent.personalIntro;
  if (state === "techStack") return portfolioContent.techStack;
  if (state === "projects") return {
    kicker: "SELECTED PROJECTS / 03",
    title: "Projects",
    subtitle: "Made to be experienced.",
    body: "六个项目，从独立游戏、数字孪生到 VR 交互，记录我如何把系统、玩法与叙事变成可被体验的作品。",
    detail: "选择项目，工作站屏幕同步切换封面；本地演示视频按需加载。",
    tags: ["6 SELECTED WORKS"],
  };
  if (state === "creativityBase") return portfolioContent.creativity;
  return portfolioContent.interests;
}
