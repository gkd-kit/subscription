import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tt.turbo',
  name: '甜糖',
  groups: [
    {
      key: 0,
      matchLauncher: true,
      name: '开屏广告',
      activityIds: 'com.tt.turbo.MainActivity',
      rules: 'View[desc^="跳过"][desc.length=4]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13200355',
    },
  ],
});
