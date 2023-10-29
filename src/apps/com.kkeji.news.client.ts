import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kkeji.news.client',
  name: '快科技',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.kkeji.news.client.start.ActivitySplashMy',
      rules: [
        {
          matches: '[id="com.kkeji.news.client:id/tv_counter"]',
          snapshotUrls: 'https://i.gkd.li/import/13197536',
        },
      ],
    },
  ],
});
