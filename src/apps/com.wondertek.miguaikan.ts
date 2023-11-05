import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wondertek.miguaikan',
  name: '咪咕视频爱看版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.shinemo.miguaikan.biz.splash.SplashActivity',
      rules: '[id="com.wondertek.miguaikan:id/splash_time"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13258889',
    },
  ],
});
