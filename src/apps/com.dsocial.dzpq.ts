import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.dsocial.dzpq',
    name: '大众评球',
    groups: [
      {
        key: 1,
        name: '开屏广告',
        desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
        rules: [
          {
            activityIds: 'com.example.dzpq_flutter.ad.LingYeSplashActivity',
            matches: '[text^="跳过"]',
            snapshotUrls: 'https://i.gkd.li/import/13786926',
          },
        ],
      },
    ],
});
