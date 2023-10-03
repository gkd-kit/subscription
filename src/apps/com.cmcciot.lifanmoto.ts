import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmcciot.lifanmoto',
  name: '力帆摩托',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.cmiot.preinstall.ui.activity.SplashActivity'],
      rules: '[text*="跳过"]',
      snapshotUrls: ['com.cmiot.preinstall.ui.activity.SplashActivity'],
    },
  ],
});
