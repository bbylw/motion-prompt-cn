# Motion Prompt 中文站 · 项目说明

本站是 [showheyohtaki/motion-prompt](https://github.com/showheyohtaki/motion-prompt) 的简体中文展示站，线上地址：https://motion-prompt.ndjp.net/

根目录 `README.md` 保持为上游 README 的简体中文译文，用来介绍上游项目本身；**本文件才是本仓库的说明**。上游 README 更新时只需对照译文，项目自身的改动记录在这里，两者不混写。

## 定位与范围

- 两个内容页：落地页 `/` 与文档页 `/docs`，文档页展示全部 192 个名称（编号 `#001`–`#192`），支持关键词搜索与按 Pack 筛选。
- 每个名称的预览直接调用上游官方 Canvas 代码（`cells[i](ctx, w, h, u)`），不是另行绘制的示意图。
- 本站不提供技能 CLI、图库挑选流程或 `api/v1` 数据；这些属于上游仓库，README 中已有完整说明。

## 技术栈

| 项目 | 版本/工具 |
|---|---|
| 框架 | Astro 7（静态输出 `output: "static"`） |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`，CSS-first `@theme`） |
| 字体 | `@fontsource/space-grotesk`（display）、`@fontsource/instrument-sans`（body），仅 latin 子集，自托管 |
| 运行时/包管理 | Bun ≥ 1.4.4（CI 固定 1.4.4）；`dev`/`build`/`preview`/`check` 四个主脚本强制由 Bun 运行时执行，不需要 Node |
| 类型检查 | `bun --bun run astro check` + TypeScript 6 + `@astrojs/check` + `@types/bun`；锁文件里的 `@types/node` 只是 `bun-types` 与 Vite 的传递依赖（.d.ts 声明，不参与运行） |
| 无前端框架 | 无 React/Vue；交互均为原生脚本与 CSS |

## 常用命令

```sh
bun install                 # 安装依赖
bun run dev                 # 本地开发（也可按 AGENTS.md 用 astro dev --background）
bun run build               # 构建到 dist/
bun run preview             # 预览构建产物
bun run check               # 类型与模板校验（Bun 运行时）
bun run catalog             # 从官方数据重新生成 src/data/catalog.ts
bun run verify              # check + build，CI 与本地提交前的完整校验
```

`dev`、`build`、`preview`、`check` 脚本都带 `--bun`：它会忽略 Astro CLI 的 `#!/usr/bin/env node` shebang，强制由 Bun 运行时执行。因此类型检测、构建和开发服务器都不依赖 Node，`engines` 只声明 `bun >= 1.4.4`。注意 README 中「需要 Node.js 18 或更高版本」是上游技能 CLI 的要求，与本站的构建和类型检测无关。

## 目录结构

```text
.github/workflows/deploy.yml      单一工作流 CI & Deploy（校验 + 构建 + Pages 发布）
data/motion-prompt-catalog.js    上游官方 catalog 数据（源数据，不部署）
scripts/build-catalog.mjs        由上面的数据生成 src/data/catalog.ts
src/data/catalog.ts              生成产物：8 组 Pack、192 个元素（勿手改）
src/data/packs.ts                本站分类文案、使用方式、技能命令表
src/data/site.ts                 站点统计、编号范围、示例名、withBase/stripBase
src/pages/index.astro            落地页
src/pages/docs.astro             文档页（192 张卡片 + 搜索/筛选）
src/pages/404.astro              404 页
src/pages/robots.txt.ts          端点：robots.txt
src/pages/sitemap.xml.ts         端点：sitemap.xml
src/components/                  Navbar、Footer、Icon、MotionPreview、PreviewCanvas
src/layouts/BaseLayout.astro      页面骨架、元数据、canonical、OG 图
src/styles/globals.css            设计令牌、编辑式分节样式、reduced-motion 降级
public/CNAME                     自定义域，随每次部署携带
public/favicon.svg / .ico        品牌图标（ICO 含 16/32 两帧 PNG）
public/og-image.png / .svg       社交分享图（PNG 为 1200×630）
public/motion-prompt/            官方 runtime.js 与 8 组 packs/*.js
```

## 数据与渲染

**数据链路**：`data/motion-prompt-catalog.js`（上游 `assets/catalog.js` 的本地副本）→ `bun run catalog` → `src/data/catalog.ts`。生成文件标注了来源且禁止手改；CI 的 `verify` job 会重新生成并用 `git diff --exit-code` 检查是否漂移。页面上的总数、分组数、编号范围、示例名与跑马灯名称都由 `src/data/site.ts` 从这份数据派生，不要写死数字。

**Canvas 渲染**：`PreviewCanvas.astro` 是唯一的渲染器，Astro 每页只注入一份脚本。占位符进入视口附近才创建 `<canvas>`，按需动态加载对应 Pack，所有可见实例共享一个 `requestAnimationFrame` 循环；没有可见实例时循环停止，`prefers-reduced-motion` 下只绘制一帧静态画面。首页只加载 motion 一个 Pack，文档页按滚动位置逐个加载。

更新官方内容时：替换 `data/motion-prompt-catalog.js` 与 `public/motion-prompt/packs/*.js`，运行 `bun run catalog`，检查 `src/data/catalog.ts` 的 diff，再一起提交。元素代码首行署名依 MIT 许可证要求保留。

## 部署

- GitHub Pages（`build_type=workflow`），仓库 `bbylw/motion-prompt-cn`，`main` 分支推送或手动 `workflow_dispatch` 触发。
- 单一工作流 `.github/workflows/deploy.yml`：`verify` job 对所有 main 推送、PR 与手动运行做依赖安装、catalog 漂移检查、Bun 运行时的类型检查（`bun --bun run check`）；`publish` job 仅在 main 或手动触发时构建并发布，Pages 写权限、`github-pages` environment、`SITE_URL` 与 `concurrency: pages` 都只作用在该 job。
- 构建期注入 `SITE_URL=https://motion-prompt.ndjp.net`，使 canonical、OG 图、sitemap 与 robots 使用绝对地址；需要子路径部署时可再设置 `BASE_PATH`，站内链接统一经 `withBase()` 生成。
- 自定义域 `motion-prompt.ndjp.net`：DNS 为 4 条指向 GitHub Pages 官方 IP 的 A 记录，`public/CNAME` 随产物携带域名，Pages 侧已开启 `https_enforced`，HTTPS 证书状态为 approved。

## 设计与验收

深色中性底 + 单一朱红强调色，编辑式分节（编号眉题 + 发丝线），标题使用 `text-wrap: balance`；hover 位移只在指针设备生效并在 reduced-motion 下禁用。固定导航与粘性筛选栏均有 `scroll-margin-top` 补偿，锚点不会被遮住。

提交或部署前至少运行 `bun run verify`。浏览器回归要点：首页 6 个预览与文档页 192 个编号、搜索空结果与 rAF 停止、桌面/移动无横向溢出、所有文本对比度 ≥ 4.5:1（实测最低 5.33:1）、reduced-motion 静态帧、`/#usage` 与 `/docs#<pack>` 锚点位置。

## 维护约定

- 提交信息一律使用英文。
- 类型检测、构建与开发服务器统一用 Bun 运行时执行（`--bun`），不要用 `npx` / `node` 运行 Astro CLI。
- `README.md` 只放上游 README 的中文译文；本项目说明写在本文件。
- 所有链接指向上游仓库的绝对地址（本仓库不含 `packs/`、`assets/` 等上游目录）。
