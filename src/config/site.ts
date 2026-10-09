import { withBase } from '@/utils/paths';

export const siteConfig = {
  brand: {
    name: 'LFY',
    chineseName: '李逢源',
    resumeName: '李锋',
    title: '游戏策划 / AI 实践者 / 内容创作者',
    philosophy: '用产品思维设计体验，用 AI 探索可能，用创作记录成长。',
    intro:
      '拥有约一年休闲游戏策划经验，具有物联网工程本科背景，参与过出海休闲游戏项目。关注活动系统、付费系统、核心玩法体验、规则设计与需求文档，也持续探索 AI 编程、Agent 工作流和个人内容创作。'
  },
  assets: {
    avatar: withBase('/images/profile/avatar.png'),
    resumePdf: withBase('/resume/li-feng-game-designer.pdf')
  },
  links: {
    email: 'w29321203@126.com',
    github: 'TODO',
    bilibili: 'TODO',
    xiaohongshu: 'TODO',
    douyin: '1909834522',
    wechat: 'Lfy_1698',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.love.waits.story.tiles.makeover.puzzle.match'
  },
  nav: [
    { label: '首页', href: withBase('/') },
    { label: '关于我', href: withBase('/about/') },
    { label: '作品集', href: withBase('/projects/') },
    { label: '简历', href: withBase('/resume/') },
    { label: '兴趣创作', href: withBase('/creative/') },
    { label: '联系', href: withBase('/contact/') }
  ]
} as const;

export type SiteConfig = typeof siteConfig;
