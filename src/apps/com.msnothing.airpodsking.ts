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
      rules: ['[id="com.byted.pangle:id/tt_splash_skip_btn"]', '[text="跳过"]'],
      snapshotUrls: [
        'https://i.gkd.li/import/12908449',
        'https://i.gkd.li/import/13607847',
      ],
    },
  ],
});
