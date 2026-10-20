---
title: 追忆档案馆
---

## 项目简介

《追忆档案馆》是一款正在开发中的中等体量 Unity 独立游戏。玩家将在档案馆及其房间之间探索，通过拾取和整理物品、解开机关、应对怪物，并逐步推进日记、纸条和剧情内容。

项目还会继续扩展，所以我把更多精力放在代码结构和接口约定上，让后来加进来的功能不用每次都动一遍底层。

## 我的作用

我在项目中担任主程序，负责整体工程框架、核心系统的设计与整合，并为其他程序拆分任务、明确模块边界和交付接口。

- 设计并维护 `Framework / Gameplay` 分层，区分通用基础设施与具体玩法逻辑
- 搭建 `GameRoot + GameContext + System` 的运行结构，统一系统初始化、生命周期和 Tick 调度
- 设计 `EventBus`、配置、存档、场景流和 UI 等公共能力，降低跨模块直接引用
- 负责角色、背包、道具、战斗、怪物、交互、解密、剧情和文案等系统的整体拼装
- 将任务拆分给其他程序，约定数据结构、事件接口和模块职责，并负责最终整合
- 通过 ScriptableObject 配置、编辑器测试和场景验收，持续检查系统能否稳定接入实际玩法

## 工程架构

框架没有做得特别重，够用、好查、方便其他人接手就行。

```text
GameRoot
├── GameContext
├── Framework
│   ├── EventBus
│   ├── ConfigManager
│   ├── SaveManager
│   ├── SceneFlowManager
│   └── UIManager
└── Gameplay
    ├── Character / Inventory / Item
    ├── Combat / Monster
    ├── Interaction / Puzzle
    └── Story / Dialogue / Camera
```

## 当前状态

项目仍在开发中。核心框架、主要玩法系统的代码结构、配置资产、场景组织和部分测试已经建立，并在2026年7至9月参加了腾讯游戏创作大赛。团队计划在未来1至2年内把作品上架 Steam。
