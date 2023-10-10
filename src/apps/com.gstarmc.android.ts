import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gstarmc.android',
  name: 'CAD看图王',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.stone.app.ui.activity.AppSplashActivity',
      rules: [
        {
          matches: '[id *= "id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12855855',
        },
      ],
    },
  ],
});
