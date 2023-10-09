import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.onethingcloud.android.MainActivity',
      matchLauncher: true,
      rules: '[desc^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12845723',
    },
  ],
});
