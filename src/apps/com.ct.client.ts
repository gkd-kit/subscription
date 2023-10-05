import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.ct.client.activity.MainActivity',
        'com.miui.home.launcher.Launcher',
        'com.ct.client.activity.SplashActivity',
      ],
      rules: '[id="com.ct.client:id/tvSkip"||id="com.ct.client:id/btSkip"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12508958',
        'https://gkd-kit.songe.li/import/12819736',
      ],
    },
    {
      key: 1,
      name: '用户引导',
      enable: false,
      activityIds: 'com.ct.client.activity.UserGuideActivity',
      rules: '[id="com.ct.client:id/tvSkip"]',
      snapshotUrls: ['https://gkd-kit.songe.li/import/12508971'],
    },
  ],
});
