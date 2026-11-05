export interface Pack {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  color: string;
  accent: string;
  bgColor: string;
  tags: string[];
}

export const packs: Pack[] = [
  {
    id: 'motion',
    name: '动效运动',
    subtitle: 'Motion',
    description: '深海军蓝底，配四种颜色。元素的入场、强调、退场与循环运动。',
    longDescription: '涵盖 UI 与视频中元素运动的基础语言：入场、强调、退场与循环。每个名称都配有动态示例、含义说明与可直接使用的提示词，帮助你精确描述想要的运动效果。',
    color: '#5eb1ff',
    accent: '#ff6b5e',
    bgColor: '#0f1b3d',
    tags: ['入场', '强调', '退场', '循环', '转场'],
  },
  {
    id: 'camera',
    name: '镜头运动与转场',
    subtitle: 'Camera',
    description: '浅灰底，配一种蓝色。推轨、摇镜、变焦与镜头切换。',
    longDescription: '从缓慢推轨到急速变焦，从匹配剪辑到一镜到底。这个分组覆盖了电影与视频制作中最常用的镜头语言，让你能像导演一样向 AI 描述镜头运动。',
    color: '#4a9eff',
    accent: '#4a9eff',
    bgColor: '#f0f0f0',
    tags: ['推轨', '摇镜', '变焦', '平移', '转场'],
  },
  {
    id: 'ui',
    name: 'UI 组件名称',
    subtitle: 'UI',
    description: '暖调米白底，配黑色和一种蓝色，由光标让各部件动起来。',
    longDescription: '从按钮、菜单到卡片与导航……这个分组覆盖了现代 UI 交互的核心模式。无论是设计稿还是前端实现，都能用这些名称精确沟通交互意图。',
    color: '#1a1a2e',
    accent: '#4a9eff',
    bgColor: '#faf7f2',
    tags: ['按钮', '菜单', '卡片', '导航', '反馈'],
  },
  {
    id: 'lp',
    name: '落地页与网页效果',
    subtitle: 'Landing Page',
    description: '淡灰色桌面上画出白色浏览器窗口，以朱红色作点缀。',
    longDescription: '滚动揭示、视差层叠、吸附堆叠、首屏缩放……这个分组覆盖了落地页与网页中最吸引人的滚动与交互效果，让你的页面在浏览器中真正动起来。',
    color: '#ff6b5e',
    accent: '#ff6b5e',
    bgColor: '#f5f5f5',
    tags: ['滚动', '视差', '揭示', '吸附', '布局'],
  },
  {
    id: 'photo',
    name: '照片观感与灯光风格',
    subtitle: 'Photo',
    description: '每张卡片都按其自身场景的颜色绘制，效果淡入再淡出。',
    longDescription: '黄金时刻、霓虹黑色、柔光漫射、硬光阴影……这个分组覆盖了摄影与视觉创作中最重要的灯光与色调风格，让你能精确描述想要的画面观感。',
    color: '#ffb454',
    accent: '#4ecdc4',
    bgColor: '#1a1a1a',
    tags: ['灯光', '色调', '氛围', '胶片', '观感'],
  },
  {
    id: 'motion2',
    name: '动效运动・第二弹',
    subtitle: 'Motion 2',
    description: '深海军蓝底，配四种颜色。更多元的动效与节奏变化。',
    longDescription: '更有物理感的节奏与复合运动……第二弹在基础动效之上，加入了更多物理感、节奏变化与复合运动，适合更精细的动效需求。',
    color: '#4ecdc4',
    accent: '#ffb454',
    bgColor: '#0f1b3d',
    tags: ['节奏', '弹性', '路径', '叠加', '循环'],
  },
  {
    id: 'lp2',
    name: '落地页与网页效果・第二弹',
    subtitle: 'Landing Page 2',
    description: '淡灰色桌面上的白色浏览器窗口，更多页面级效果。',
    longDescription: '分屏揭示、滚动遮罩、页面剥离、网格级联……第二弹聚焦于更复杂的页面级效果与滚动交互，适合打造令人印象深刻的网页体验。',
    color: '#5eb1ff',
    accent: '#ff6b5e',
    bgColor: '#f5f5f5',
    tags: ['页面', '滚动', '分屏', '遮罩', '布局'],
  },
  {
    id: 'camera2',
    name: '镜头运动与转场・第二弹',
    subtitle: 'Camera 2',
    description: '浅灰底，配一种蓝色。更丰富的镜头语言与转场。',
    longDescription: '环绕弧线、快速变焦、匹配切换、镜头扫掠……第二弹在基础镜头语言之上，加入了更多复合运动、速度变化与创意转场，适合更专业的视频制作。',
    color: '#4a9eff',
    accent: '#4a9eff',
    bgColor: '#f0f0f0',
    tags: ['镜头', '转场', '速度', '方向', '焦点'],
  },
];

export interface UsageMethod {
  number: number;
  title: string;
  description: string;
  steps: string[];
  code?: string;
  icon: string;
}

export const usageMethods: UsageMethod[] = [
  {
    number: 1,
    title: '打开名称库，挑选后发送给 AI',
    description:
      '在 Claude Code 或 Codex 中安装 motion-prompt 技能后，只要提出请求即可打开本图库。你不需要记住名称或编号。',
    steps: [
      '向你的 AI 说：Open the motion-prompt library.',
      '图库会在浏览器中打开。在想要的示例上按「Pick」，数量不限。',
      '按「Send to AI」，你的选择就会发送给 AI。',
      '回到它那里，说明你想做什么。',
    ],
    code: 'npx skills add showheyohtaki/motion-prompt',
    icon: 'library',
  },
  {
    number: 2,
    title: '查一下名称，然后告诉你的 AI',
    description:
      '打开一份列表或图库，找到你想做的东西，在提示词中使用它的名称。再补充时长、强度和运动方式，结果会更接近你的设想。',
    steps: [
      '在列表中查找想要的名称或编号。',
      '在提示词中使用该名称。',
      '补充时长、强度和运动方式。',
      '发送给编程 AI、视频生成模型，或写进需求简报。',
    ],
    code: 'Bring the title in with a mask reveal from below, 0.6 s.',
    icon: 'search',
  },
  {
    number: 3,
    title: '为你自己的领域或语言制作一个版本',
    description:
      'make-your-own/ 提供了可直接复制粘贴给编程 AI 的提示词、渲染视频的脚本，以及两个已完成示例。',
    steps: [
      '选择适合你目标的提示词模板。',
      '把提示词交给编程 AI。',
      'AI 会为你生成同类的名称示例。',
      '领域不限于视频：灯光、声音、UI、摄影、烹饪、建筑均可。',
    ],
    icon: 'sparkles',
  },
];

export interface SkillCommand {
  command: string;
  description: string;
}

export const skillCommands: SkillCommand[] = [
  { command: 'pick / pick --pack camera', description: '打开图库，打印随「Send to AI」发来的内容' },
  { command: 'search typewriter text', description: '为一个场景查找元素（英文或日文关键词）' },
  { command: 'list / list --pack motion', description: '所有分组的概览，或逐个元素列出某个分组' },
  { command: 'get 12 #045', description: '打印这些编号的规格，然后打印代码（一次最多 8 个）' },
  { command: 'kit motion', description: '某一分组的共享代码' },
  { command: 'prompt 12', description: '某个元素的可复制提示词' },
  { command: 'info', description: '显示数据来源、数据量以及缓存位置' },
];
