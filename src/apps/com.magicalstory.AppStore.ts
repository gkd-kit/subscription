import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.magicalstory.AppStore.ad.SplashActivity',
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13185745',
        },
      ],
    },
    {
      key: 1,
      name: '下方横幅',
      activityIds: 'com.magicalstory.AppStore.search.searchActivity',
      rules: [
        {
          matches: [
            '[id="com.magicalstory.AppStore:id/banner"]',
            'FrameLayout[childCount=1] > ImageView',
          ],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13185746',
        },
      ],
    },
  ],
});
