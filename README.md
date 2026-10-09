# LFY Portfolio

个人品牌官网、游戏策划作品集、AI 实践展示与求职简历站点。

## 本地预览

```bash
npm install
npm run dev
```

默认本地地址通常是 `http://localhost:4321`。

## 复制本地素材

第一次预览图片、二维码和 PDF 前，在项目根目录运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\copy-assets.ps1
```

脚本会把本机素材复制到 `public/` 下的网站公开资源路径。

## 构建验证

```bash
npm run build
npm run preview
```

## 内容维护

- 个人信息：`src/config/site.ts`
- 项目数据：`src/data/projects.ts`
- 联系方式：`src/data/contact.ts`
- 技能分类：`src/data/skills.ts`
- 头像路径：`public/images/profile/avatar.png`
- 联系二维码：`public/images/contact/`
- 兴趣创作图片：`public/images/creative/`
- 诗集 PDF：`public/creative/fengyuan-poems.pdf`
- 简历 PDF：`public/resume/li-feng-game-designer.pdf`

缺失资料请保留 `TODO`，不要写未经核对的履历、数据或内部材料。

## GitHub Pages 免费部署

项目已包含 `.github/workflows/deploy.yml`。首次发布时：

1. 在 GitHub 创建仓库并将本项目推送到 `main` 分支。
2. 打开仓库 `Settings > Pages`。
3. 将 `Build and deployment > Source` 设为 `GitHub Actions`。
4. 打开 `Actions` 页面查看 `Deploy to GitHub Pages` 运行状态。
5. 部署完成后，网站地址通常为 `https://用户名.github.io/仓库名/`。

工作流会自动识别仓库名并配置 Astro 的 `site` 和 `base`，站内导航、图片、PDF 与二维码均兼容 GitHub Pages 子路径。以后推送到 `main` 分支会自动重新部署。

## Cloudflare Pages 备用部署

如后续改用 Cloudflare Pages，构建命令填写 `npm run build`，输出目录填写 `dist`。

