import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'xin.banghua.beiyuan0',
  name: '小贝乐园平台',
  groups: [
    {
      key: 1,
      name: '小贝乐园开屏广告',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: 'xin.banghua.beiyuan0.chat.ADActivity',
          matches: 'TextView[text*="跳过"]',
          exampleUrls:
            'https://m.gkd.li/58279234/eaa5ddd9-734a-40fe-9295-f89e1984ac8c',
          snapshotUrls: 'https://i.gkd.li/import/13596389',
        },
      ],
    },
  ],
});
