import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.msnothing.airpodsking',
  name: 'Pods King',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.msnothing.ad.splash.HomeSplashActivity',
      matchLauncher: true,
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/12908449',
    },
    {
      key: 1,
      name: '开屏广告',
      rules: [
        {
          activityIds: 'com.msnothing.ad.splash.HomeSplashActivity',
          matches: '[text="跳过"]',
          exampleUrls:
            'https://m.gkd.li/48015717/1e2e3d8f-935f-431a-9bbd-27f217ad6912',
          snapshotUrls: 'https://i.gkd.li/import/13607847',
        },
      ],
    },
  ],
});
