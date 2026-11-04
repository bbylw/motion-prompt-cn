# motion-prompt

为「你让 AI 做的那些事」而准备的名称库。

每个名称都配有一段动态示例、一行含义说明，以及一个如何向 AI 提出需求的示例。涵盖动效运动、镜头运动、UI 组件、落地页效果与照片观感。

## 项目结构

```text
/
├── src/
│   ├── components/      # Astro 组件
│   │   ├── Footer.astro
│   │   ├── Icon.astro
│   │   ├── MotionPreview.astro   # Canvas 动态预览
│   │   └── Navbar.astro
│   ├── data/
│   │   └── packs.ts     # 192 个名称的完整数据
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro  # 落地页
│   │   └── docs.astro   # 文档页（完整名称库）
│   └── styles/
│       └── globals.css  # 设计系统
├── public/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 技术栈

- [Astro](https://docs.astro.build) — 静态站点生成
- TypeScript — 类型安全
- [Tailwind CSS](https://tailwindcss.com) — 样式
- [Bun](https://bun.sh) — 包管理器

## 命令

所有命令在项目根目录运行：

| 命令 | 说明 |
| :--- | :--- |
| `bun install` | 安装依赖 |
| `bun dev` | 启动开发服务器（localhost:4321） |
| `bun build` | 构建生产版本到 `./dist/` |
| `bun preview` | 本地预览构建结果 |

## 八组分类

| 编号 | 名称 | 英文 | 说明 |
| :--- | :--- | :--- | :--- |
| 001–024 | 动效运动 | Motion | 元素的入场、强调、退场与循环运动 |
| 025–048 | 镜头运动与转场 | Camera | 推轨、摇镜、变焦与镜头切换 |
| 049–072 | UI 组件名称 | UI | 按钮、菜单、卡片、导航、反馈 |
| 073–096 | 落地页与网页效果 | Landing Page | 滚动、视差、揭示、吸附、布局 |
| 097–120 | 照片观感与灯光风格 | Photo | 灯光、色调、氛围、胶片、观感 |
| 121–144 | 动效运动・第二弹 | Motion 2 | 更多元的动效与节奏变化 |
| 145–168 | 落地页与网页效果・第二弹 | Landing Page 2 | 更复杂的页面级效果与滚动交互 |
| 169–192 | 镜头运动与转场・第二弹 | Camera 2 | 更丰富的镜头语言与转场 |

## 使用方式

### 1. 打开名称库，挑选后发送给 AI

在 Claude Code 或 Codex 中安装 motion-prompt 技能后，只要提出请求即可打开本图库。你不需要记住名称或编号。

```sh
npx skills add showheyohtaki/motion-prompt
```

### 2. 查一下名称，然后告诉你的 AI

打开一份列表或图库，找到你想做的东西，在提示词中使用它的名称。再补充时长、强度和运动方式，结果会更接近你的设想。

示例提示词：`Bring the title in with a mask reveal from below, 0.6 s.`

### 3. 为你自己的领域或语言制作一个版本

`make-your-own/` 提供了可直接复制粘贴给编程 AI 的提示词、渲染视频的脚本，以及两个已完成示例。

## 许可证

MIT
