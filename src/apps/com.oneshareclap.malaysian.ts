import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oneshareclap.malaysian',
  name: '水果派',
  groups: [
    {
      key: 1,
      name: '启动页广告',
      desc: '跳过启动页广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.oneshareclap.malaysian.activity.SplashActivity',
          matches: '[text="关闭广告"]',
          exampleUrls: 'https://m.gkd.li/12692556/78e10270-b55e-41b4-b369-f9bd7bf38a74',
          snapshotUrls: 'https://i.gkd.li/import/14099458',
        },
      ],
    },
  ]
});
