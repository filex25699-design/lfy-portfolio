import { withBase } from '@/utils/paths';

export type ProjectCategory = 'commercial' | 'research' | 'ai' | 'concept';
export type ProjectStatus = '已上线' | '竞品分析' | '开发中' | '个人策划案' | 'TODO';

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
  role: string;
  summary: string;
  tags: string[];
  highlights: string[];
  verification: string;
  pdfUrl?: string;
  previewImage?: string;
  externalUrl?: string;
  externalLabel?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  commercial: '商业游戏项目',
  research: '竞品研究与系统拆解',
  ai: 'AI 实践项目',
  concept: '个人策划案'
};

export const projects: ProjectItem[] = [
  {
    slug: 'pass-tier-privilege-redesign',
    title: 'Pass 分层特权改版',
    subtitle: 'Love Waits: Tiles & Makeover 商业化系统',
    category: 'commercial',
    status: '已上线',
    featured: true,
    role: '游戏策划：需求梳理、权益分层、状态逻辑与异常流程设计',
    summary:
      '围绕 Pass 付费体验进行分层改版，覆盖付费档位、权益领取、升级补差、二次确认和购买状态处理。',
    tags: ['商业化系统', '付费档位', '权益分层', '异常流程'],
    highlights: [
      '梳理免费、低档、高档权益之间的领取和升级关系',
      '设计购买二次确认、升级补差、重复购买等关键状态',
      '以清晰流程减少用户理解成本和系统边界风险'
    ],
    verification: '已确认上线。首版仅展示公开可描述内容，PDF 作品集可在线预览。',
    pdfUrl: withBase('/projects/pdfs/pass-tier-privilege-redesign.pdf'),
    previewImage: withBase('/images/projects/pdf-previews/pass-tier-privilege-redesign.png'),
    externalUrl: 'https://play.google.com/store/apps/details?id=com.love.waits.story.tiles.makeover.puzzle.match',
    externalLabel: '查看上线产品'
  },
  {
    slug: 'level-satisfaction-optimization',
    title: '关卡爽感优化',
    subtitle: 'Love Waits: Tiles & Makeover 核心玩法体验',
    category: 'commercial',
    status: '已上线',
    featured: true,
    role: '游戏策划：反馈规则、判定逻辑和局内体验优化',
    summary:
      '围绕消除高光、Combo、Clear、极限操作、Hint 和自动收尾等局内反馈，提升关卡过程中的清晰度与爽感。',
    tags: ['核心玩法', '反馈设计', 'Combo', 'Hint'],
    highlights: [
      '定义高光反馈、连击和清场等体验节点',
      '考虑防刷机制与极限操作判定边界',
      '补全 Hint、自动收尾与局内提示的使用场景'
    ],
    verification: '已确认上线。无可靠公开指标时，不展示虚构收入、留存或转化结果。',
    pdfUrl: withBase('/projects/pdfs/level-satisfaction-optimization.pdf'),
    previewImage: withBase('/images/projects/pdf-previews/level-satisfaction-optimization.png'),
    externalUrl: 'https://play.google.com/store/apps/details?id=com.love.waits.story.tiles.makeover.puzzle.match',
    externalLabel: '查看上线产品'
  },
  {
    slug: 'gem-rush-coin-rush-iteration',
    title: 'Gem Rush / Coin Rush 迭代',
    subtitle: 'Love Waits: Tiles & Makeover 每日限时活动',
    category: 'commercial',
    status: '已上线',
    featured: true,
    role: '游戏策划：活动规则、进度目标、重置与结束状态设计',
    summary:
      '针对每日限时活动设计累计挑战进度、长短期奖励目标、活动重置、结束规则和跨天异常状态。',
    tags: ['活动系统', '奖励目标', '跨天状态', '限时活动'],
    highlights: [
      '拆解活动开启、进行中、结束、重置等状态',
      '设计累计挑战进度与奖励预览体验',
      '覆盖跨天、断线、异常领取等边界情况'
    ],
    verification: '已确认上线。PDF 作品集已接入在线预览。',
    pdfUrl: withBase('/projects/pdfs/gem-rush-coin-rush-iteration.pdf'),
    previewImage: withBase('/images/projects/pdf-previews/gem-rush-coin-rush-iteration.png'),
    externalUrl: 'https://play.google.com/store/apps/details?id=com.love.waits.story.tiles.makeover.puzzle.match',
    externalLabel: '查看上线产品'
  },
  {
    slug: 'game-experience-polish',
    title: '综合游戏体验优化',
    subtitle: 'Love Waits: Tiles & Makeover 多模块体验优化',
    category: 'commercial',
    status: '已上线',
    featured: true,
    role: '游戏策划：弹窗、提示、反馈和导航体验优化',
    summary:
      '围绕弹窗触发、局内操作提示、活动反馈、奖励预览和藏品页面导航，进行多处体验细节优化。',
    tags: ['体验优化', '弹窗策略', '奖励预览', '页面导航'],
    highlights: [
      '优化弹窗触发时机，减少流程打断感',
      '强化活动反馈、奖励预览和局内提示',
      '调整藏品页面导航路径，提升信息可达性'
    ],
    verification: '已确认上线。仅展示本人可公开描述的策划工作。',
    pdfUrl: withBase('/projects/pdfs/game-experience-polish.pdf'),
    previewImage: withBase('/images/projects/pdf-previews/game-experience-polish.png'),
    externalUrl: 'https://play.google.com/store/apps/details?id=com.love.waits.story.tiles.makeover.puzzle.match',
    externalLabel: '查看上线产品'
  },
  {
    slug: 'tile-busters-team-race-analysis',
    title: 'Tile Busters 团队比赛机制拆解',
    subtitle: '竞品研究：Tile Busters: Match 3 Tiles',
    category: 'research',
    status: '竞品分析',
    featured: true,
    role: '竞品分析：规则拆解、体验路径梳理和可借鉴点总结',
    summary:
      '对 Tile Busters 团队比赛机制进行系统拆解，用于训练活动系统分析、规则表达和体验判断能力。',
    tags: ['竞品研究', '团队比赛', '活动机制', '系统拆解'],
    highlights: [
      '明确标注为竞品分析作品',
      '不描述为本人在 Love Waits 中开发或上线的功能',
      '后续补充结构图、流程图和体验记录'
    ],
    verification: '竞品研究作品，已接入 PDF 在线预览。注意：此作品不描述为本人在 Love Waits 中上线的功能。',
    pdfUrl: withBase('/projects/pdfs/team-race-analysis.pdf'),
    previewImage: withBase('/images/projects/pdf-previews/team-race-analysis.png')
  },
  {
    slug: 'sky-pirates',
    title: 'Sky Pirates',
    subtitle: '团队协作搜集活动策划案',
    category: 'concept',
    status: '个人策划案',
    featured: true,
    role: '系统策划：活动规则、奖励解锁、状态机与异常流程设计',
    summary:
      '围绕团队 PvE 周期活动设计收集目标、奖励解锁、卡包系统联动和异常状态处理，用于展示完整活动方案表达能力。',
    tags: ['活动策划', '团队协作', '奖励解锁', '状态机'],
    highlights: [
      '定义活动开启、锁定、解锁、奖励发放与异常恢复流程',
      '结合卡包与奖励池设计多阶段目标',
      '输出可供研发理解的状态与流程说明'
    ],
    verification: '个人策划案，已接入 PDF 在线预览。上线状态以页面标注为准。',
    pdfUrl: withBase('/projects/pdfs/sky-pirates.pdf'),
    previewImage: withBase('/images/projects/pdf-previews/sky-pirates.png')
  },
  {
    slug: 'ai-agent-practice',
    title: 'AI Agent 学习与实践',
    subtitle: 'AI 辅助游戏策划与个人开发实验',
    category: 'ai',
    status: '开发中',
    featured: true,
    role: '个人实践：AI 编程、Agent 工作流和策划辅助实验',
    summary:
      '探索 Codex、ChatGPT、Dify 等工具在个人网站开发、策划文档整理、竞品分析和内容创作中的应用方式。',
    tags: ['AI Agent', 'Codex', 'ChatGPT', 'Dify'],
    highlights: [
      '用于记录真实学习过程和工具链实践',
      '未完成项目明确标注为开发中',
      '不夸大自动化能力或商业成果'
    ],
    verification: '开发中。后续补充实验记录、工作流截图和可复现案例。'
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
