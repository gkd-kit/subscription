import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.emagsoftware.gamehall',
  name: '咪咕快游',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.emagsoftware.gamehall.ui.activity.splash.SplashActivity',
      rules: '[id="cn.emagsoftware.gamehall:id/splash_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13258853',
    },
  ],
});
