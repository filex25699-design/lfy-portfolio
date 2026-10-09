import { withBase } from '@/utils/paths';

export interface CreativeFeature {
  title: string;
  label: string;
  description: string;
  href?: string;
  image: string;
  cta: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: '书法' | '运动' | '音乐' | '诗集' | '生活';
  caption: string;
  featured?: boolean;
}

export const creativeLinks = {
  neteaseArtist: 'https://music.163.com/#/artist?id=49284257',
  poemsPdf: withBase('/creative/fengyuan-poems.pdf')
};

export const creativeFeatures: CreativeFeature[] = [
  {
    title: '网易云音乐人',
    label: 'Music',
    description: '原创音乐与个人表达的延展。作为兴趣身份展示，用于补充个人审美、内容创作和长期品牌线索。',
    href: creativeLinks.neteaseArtist,
    image: withBase('/images/creative/music-cover.png'),
    cta: '查看歌手主页'
  },
  {
    title: '《逢源诗集》',
    label: 'Writing',
    description: '原创诗歌作品集，展示文字表达、情绪捕捉和文案组织能力。是否开放 PDF 下载可后续再确认。',
    image: withBase('/images/creative/poems-cover.jpg'),
    cta: '诗集 PDF 待补充'
  },
  {
    title: '硬笔与毛笔书法',
    label: 'Calligraphy',
    description: '通过长期练习记录手感、结构和审美判断，也作为个人创作气质的一部分。',
    image: withBase('/images/creative/calligraphy-01.jpg'),
    cta: '浏览作品'
  },
  {
    title: '羽毛球与游戏',
    label: 'Hobby',
    description: '保持运动和游戏体验，既是兴趣，也帮助自己持续观察规则、反馈和节奏。',
    image: withBase('/images/creative/badminton-01.jpg'),
    cta: '查看兴趣'
  }
];

export const creativeGallery: GalleryImage[] = [
  {
    src: withBase('/images/creative/calligraphy-01.jpg'),
    alt: '春联书法作品',
    category: '书法',
    caption: '春联作品与节日书写',
    featured: true
  },
  {
    src: withBase('/images/creative/calligraphy-02.jpg'),
    alt: '书法练习场景',
    category: '书法',
    caption: '练字桌面与书写过程',
    featured: true
  },
  {
    src: withBase('/images/creative/calligraphy-03.jpg'),
    alt: '硬笔或毛笔字练习',
    category: '书法',
    caption: '单字结构与笔画练习'
  },
  {
    src: withBase('/images/creative/calligraphy-04.jpg'),
    alt: '书法纸张与文房工具',
    category: '书法',
    caption: '单字结构与笔画练习'
  },
  {
    src: withBase('/images/creative/calligraphy-05.jpg'),
    alt: '书法作品与笔墨工具',
    category: '书法',
    caption: '观字审美与作品记录'
  },
  {
    src: withBase('/images/creative/badminton-01.jpg'),
    alt: '羽毛球球拍',
    category: '运动',
    caption: '羽毛球：节奏、反应与身体状态',
    featured: true
  },
  {
    src: withBase('/images/creative/badminton-02.jpg'),
    alt: '羽毛球拍挂在球场围网上',
    category: '运动',
    caption: '球场与装备记录'
  },
  {
    src: withBase('/images/creative/billiards-01.jpg'),
    alt: '台球桌上的击球场景',
    category: '生活',
    caption: '台球：角度、判断与手感'
  },
  {
    src: withBase('/images/creative/calligraphy-06.jpg'),
    alt: '诗词手写练习',
    category: '诗集',
    caption: '手写诗词与文字表达'
  },
  {
    src: withBase('/images/creative/calligraphy-07.jpg'),
    alt: '篆书练习作品',
    category: '书法',
    caption: '篆书结构与字形练习'
  },
  {
    src: withBase('/images/creative/calligraphy-08.jpg'),
    alt: '手写文字片段',
    category: '诗集',
    caption: '手写摘句与文字气质'
  },
  {
    src: withBase('/images/creative/calligraphy-09.jpg'),
    alt: '行书练习作品',
    category: '书法',
    caption: '行书笔势与章法练习'
  }
];
