export type PortfolioState = "personalIntro" | "techStack" | "projects" | "creativityBase" | "moreInterests";

export interface PortfolioProject {
  slug: string;
  title: string;
  type: string;
  status: string;
  date: string;
  format: string;
  summary: string;
  tags: string[];
  cover: string;
  screenImage: string;
  screenAccent: string;
  link?: { label: string; url: string };
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
    subtitle: "游戏、互动叙事与创意技术实验。",
    body: "我是一名计算机专业学生与创作者。我关注游戏、图形、交互叙事与人如何在系统中作出选择。",
    detail: "把观察变成体验，让人愿意重新看一眼。",
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
    subtitle: "把想法变成可以运行、可以被体验的系统。",
    body: "我在游戏引擎、WebGL、交互叙事与实时图形之间工作，喜欢从机制和体验出发，再选择合适的工具。",
    detail: "CLI 面板对应开发流程、实验记录与多任务工作流。",
    tags: ["UNREAL ENGINE", "UNITY", "C#", "THREE.JS", "WEBGL", "TYPESCRIPT"],
  },
  creativity: {
    kicker: "CREATIVE PRACTICE / 04",
    title: "Creativity",
    subtitle: "Technology is a material. Experience is the point.",
    body: "我用游戏、互动网页和视觉实验去测试一个问题：一个故事如何通过操作，被真正经历。",
    detail: "进入 CloseUp，查看显示器中的创意输出。",
    tags: ["DESIGN", "STORY SYSTEMS", "VISUAL EXPERIMENTS"],
  },
  interests: {
    kicker: "MORE INTERESTS / 05",
    title: "More Interests",
    subtitle: "让不同兴趣彼此碰撞，形成新的世界。",
    body: "剑道、摄影、绘画、游戏叙事与世界观搭建，是工作之外持续影响我观察方式的几条线索。",
    detail: "它们不需要被解释完；先从一个轮廓、一件物品或一段故事开始。",
    tags: ["KENDO", "PHOTOGRAPHY", "PAINTING", "GAME NARRATIVE", "WORLDBUILDING"],
  },
  projects: [
    {
      slug: "bursting-milk-tea-shop",
      title: "爆浆奶茶店",
      type: "剧情驱动游戏",
      status: "已发布",
      date: "2024",
      format: "叙事 / 模拟经营",
      summary: "一间看起来平常的奶茶店，藏着关于人类与奶茶生物共生的恐怖故事。",
      tags: ["叙事", "模拟经营", "恐怖"],
      cover: "/content-media/bursting-milk-tea-shop.png",
      screenImage: "/content-media/bursting-milk-tea-shop.png",
      screenAccent: "#5ed2bf",
      link: { label: "TapTap 页面", url: "https://www.taptap.cn/app/781080?os=pc" },
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
      cover: "/content-media/save-lara.png",
      screenImage: "/content-media/save-lara.png",
      screenAccent: "#9ea7ff",
      link: { label: "GitHub 仓库", url: "https://github.com/rorschachandbat/2025BUAAGJ" },
    },
    {
      slug: "kitchen-symphony",
      title: "厨房交响曲·乱炖大危机",
      type: "多人合作游戏",
      status: "已发布",
      date: "2026",
      format: "协作 / 节奏挑战",
      summary: "把多人协作、节奏与不断升级的厨房混乱，变成一场需要默契收尾的乱炖挑战。",
      tags: ["多人合作", "节奏", "Game Jam"],
      cover: "/content-media/kitchen-symphony.png",
      screenImage: "/content-media/kitchen-symphony.png",
      screenAccent: "#f2ae70",
      link: { label: "在 GmHub 查看", url: "https://www.gmhub.com/game/9571" },
    },
  ] satisfies PortfolioProject[],
  conceptLab: [
    {
      title: "GHOSTFONT / 幽灵字体",
      summary: "视觉合规工程师林默在旧录像中发现失踪姐姐留下的 GhostFont，并必须决定人类应如何重新取得自由。",
      tags: ["AI 治理", "互动叙事", "选择后果"],
      cover: "/content-media/ghostfont.svg",
      link: "/content/entries/ghostfont/interactive.html",
    },
    {
      title: "知风夜跑",
      summary: "在一条校园夜路上交替迈步；当意义暂时缺席，行动本身是否仍能带人继续向前？",
      tags: ["互动叙事", "夜跑", "多结局"],
      cover: "/content-media/zhifeng-night-run.svg",
      link: "/content/entries/zhifeng-night-run/interactive.html",
    },
  ],
} as const;

export function getModuleContent(state: PortfolioState) {
  if (state === "personalIntro") return portfolioContent.personalIntro;
  if (state === "techStack") return portfolioContent.techStack;
  if (state === "projects") return {
    kicker: "SELECTED PROJECTS / 03",
    title: "Projects",
    subtitle: "Made to be experienced.",
    body: "三个项目，分别从叙事、策略和协作出发，测试玩家如何感受、思考与一起行动。",
    detail: "选择项目，工作站屏幕会同步切换。",
    tags: ["3 SELECTED WORKS"],
  };
  if (state === "creativityBase") return portfolioContent.creativity;
  return portfolioContent.interests;
}
