import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'top.onepix.timeblock',
  name: '块时间',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '开屏广告',
      desc: '点击跳过',
      rules: [
        {
          activityIds: 'top.onepix.timeblock.activities.splash.SplashActivity',
          matches: '@[text^="跳过"] +3 RelativeLayout [text^="点击跳转"]',
          snapshotUrls: 'https://i.gkd.li/import/13828665',
        },
      ],
    },
  ],
});
