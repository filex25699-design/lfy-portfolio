import { siteConfig } from '@/config/site';
import { withBase } from '@/utils/paths';

export type ContactType = 'email' | 'wechat' | 'douyin' | 'social';

export interface ContactItem {
  type: ContactType;
  label: string;
  value: string;
  description: string;
  href?: string;
  qrImage?: string;
  isPublic: boolean;
}

export const contactItems: ContactItem[] = [
  {
    type: 'email',
    label: '网易邮箱',
    value: siteConfig.links.email,
    description: '用于求职沟通、项目交流与正式联系。',
    href: `mailto:${siteConfig.links.email}`,
    isPublic: true
  },
  {
    type: 'wechat',
    label: '微信',
    value: siteConfig.links.wechat,
    description: '用于进一步沟通。二维码图片放在统一资源路径，便于随时替换。',
    qrImage: withBase('/images/contact/wechat-qr.png'),
    isPublic: true
  },
  {
    type: 'douyin',
    label: '抖音',
    value: siteConfig.links.douyin,
    description: '用于个人内容创作、自媒体与长期品牌展示。',
    qrImage: withBase('/images/contact/douyin-qr.png'),
    isPublic: true
  }
];
