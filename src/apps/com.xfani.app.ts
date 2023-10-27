import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xfani.app',
  name: '稀饭动漫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xfani.app.MainActivity',
      matchLauncher: true,
      rules: 'TextView[text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13188526',
    },
  ],
});
