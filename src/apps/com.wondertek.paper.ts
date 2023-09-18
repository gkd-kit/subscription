import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wondertek.paper',
  name: '澎湃新闻',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['cn.thepaper.paper.ui.splash.welcome.LaunchActivity'],
      rules: [
        {
          matches: '[id="android:id/text1"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12644536',
        },
      ],
    },
  ],
});
