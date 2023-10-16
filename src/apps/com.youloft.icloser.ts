import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youloft.icloser',
  name: '心动日常',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.youloft.icloser.splash.AdSplashActivity',
      matchLauncher: true,
      rules: '[id="com.youloft.icloser:id/sdk_container"] >n [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12918018',
    },
  ],
});
