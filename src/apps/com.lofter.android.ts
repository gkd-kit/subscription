import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lofter.android',
  name: 'LOFTER',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.lofter.android.global.splash.HomeActivity',
      rules: '[text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/snapshot/1698416352260',
      'https://i.gkd.li/snapshot/1698416058591']
    },
  ],
});
