export type TerminalLineType = "prompt" | "command" | "output" | "success" | "warning" | "blank";

export interface TerminalLine {
  type: TerminalLineType;
  text?: string;
}

export interface TerminalEventTemplate {
  id: string;
  lines: readonly TerminalLine[];
  minDelay?: number;
  maxDelay?: number;
  outputPause?: number;
  weight?: number;
}

export interface TerminalPanelContent {
  id: string;
  title: string;
  initialLines: readonly TerminalLine[];
  events: readonly TerminalEventTemplate[];
  minEventDelay: number;
  maxEventDelay: number;
}

const prompt = { type: "prompt", text: "ze@portfolio ~/workspace" } as const;

const developmentEvents: readonly TerminalEventTemplate[] = [
  {
    id: "vite-hmr",
    lines: [
      { type: "output", text: "hmr update /src/app.ts" },
      { type: "success", text: "✓ module refreshed in {{duration}}" },
    ],
  },
  {
    id: "route-request",
    lines: [
      prompt,
      { type: "command", text: "curl --silent /projects" },
      { type: "output", text: "GET /projects 200" },
    ],
  },
  {
    id: "typescript-check",
    lines: [
      prompt,
      { type: "command", text: "npm run typecheck" },
      { type: "success", text: "✓ TypeScript check passed" },
    ],
  },
  {
    id: "compile",
    lines: [
      { type: "output", text: "compiling /src/scene/camera.ts" },
      { type: "success", text: "✓ compiled in {{duration}}" },
    ],
  },
  {
    id: "production-build",
    lines: [
      prompt,
      { type: "command", text: "npm run build" },
      { type: "success", text: "build complete in {{duration}}" },
    ],
    minDelay: 1800,
    maxDelay: 3600,
  },
];

const gitEvents: readonly TerminalEventTemplate[] = [
  {
    id: "git-status",
    lines: [
      prompt,
      { type: "command", text: "git status" },
      { type: "output", text: "On branch develop" },
      { type: "success", text: "working tree clean" },
    ],
  },
  {
    id: "git-fetch",
    lines: [
      prompt,
      { type: "command", text: "git fetch origin" },
      { type: "output", text: "remote refs checked" },
      { type: "success", text: "develop is up to date" },
    ],
  },
  {
    id: "git-log",
    lines: [
      prompt,
      { type: "command", text: "git log --oneline -3" },
      { type: "output", text: "portfolio scene polish" },
      { type: "output", text: "terminal runtime update" },
      { type: "output", text: "camera states verified" },
    ],
  },
  {
    id: "git-branch",
    lines: [
      { type: "output", text: "branch: develop" },
      { type: "success", text: "working tree clean" },
    ],
  },
  {
    id: "git-commit-check",
    lines: [
      prompt,
      { type: "command", text: "git diff --stat" },
      { type: "output", text: "no unstaged changes" },
    ],
    minDelay: 1600,
    maxDelay: 3400,
  },
];

const toolsEvents: readonly TerminalEventTemplate[] = [
  {
    id: "codex-ready",
    lines: [
      prompt,
      { type: "command", text: "codex" },
      { type: "output", text: "workspace loaded" },
      { type: "success", text: "ready" },
    ],
  },
  {
    id: "three-scene",
    lines: [
      { type: "output", text: "[three] scene loaded" },
      { type: "success", text: "5 roots found" },
    ],
  },
  {
    id: "blender-mcp",
    lines: [
      prompt,
      { type: "command", text: "blender-mcp inspect" },
      { type: "output", text: "asset hierarchy ready" },
      { type: "success", text: "content planes excluded" },
    ],
  },
  {
    id: "gltf-check",
    lines: [
      { type: "output", text: "[asset] portfolio_scene.glb" },
      { type: "success", text: "loaded in {{duration}}" },
    ],
  },
  {
    id: "shader-compile",
    lines: [
      prompt,
      { type: "command", text: "compile npr pipeline" },
      { type: "success", text: "outline and hatch passes ready" },
    ],
  },
  {
    id: "asset-cache",
    lines: [
      { type: "output", text: "[cache] terminal textures ready" },
      { type: "success", text: "scene assets available" },
    ],
    minDelay: 1700,
    maxDelay: 3500,
  },
];

export const techTerminalPanels: readonly TerminalPanelContent[] = [
  {
    id: "development",
    title: "development",
    initialLines: [
      prompt,
      { type: "command", text: "npm run dev" },
      { type: "success", text: "VITE ready in 421ms" },
      { type: "output", text: "Local: http://localhost:5173/" },
    ],
    events: developmentEvents,
    minEventDelay: 900,
    maxEventDelay: 2400,
  },
  {
    id: "version-control",
    title: "version control",
    initialLines: [
      prompt,
      { type: "command", text: "git status" },
      { type: "output", text: "On branch develop" },
      { type: "success", text: "working tree clean" },
    ],
    events: gitEvents,
    minEventDelay: 1400,
    maxEventDelay: 3200,
  },
  {
    id: "tools",
    title: "tools",
    initialLines: [
      prompt,
      { type: "command", text: "codex" },
      { type: "output", text: "workspace loaded" },
      { type: "success", text: "ready" },
    ],
    events: toolsEvents,
    minEventDelay: 1000,
    maxEventDelay: 2900,
  },
];
