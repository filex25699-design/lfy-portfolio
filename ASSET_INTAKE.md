# 素材投放说明

把待整理素材放进项目根目录下的 `_incoming/` 文件夹。该文件夹已加入 `.gitignore`，不会作为网站公开资源，也不建议提交到 Git。

推荐结构：

```text
_incoming/
  profile/
    avatar/
    real-photo-private/
  contact/
    wechat/
    douyin/
  resume/
  creative/
    poems/
    calligraphy/
    badminton/
    music/
    life/
  projects/
    love-waits/
    competitor-research/
    personal-concepts/
```

规则：

- 可公开图片、二维码、PDF 由我整理后复制到 `public/`。
- 真实照片、内部工作 PDF、未脱敏资料不要放进 `public/`。
- 如果某个文件是否公开不确定，先放在 `_incoming/`，由我们确认后再接入页面。
- 文件名可以先保持原样，我会按用途重新命名到稳定路径。
