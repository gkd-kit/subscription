import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: "com.changba",
  name: "唱吧",
  groups: [
    {
      key: 0,
      name: "开屏广告",
      desc: "跳过开屏广告",
      rules: [
        {
          activityIds: "com.changba.module.advertise.splash.AdSplashActivity",
          matches: "[id$='com.changba:id/ad_timer']",
          snapshotUrls: "https://i.gkd.li/import/13373946"
        }
      ]
    },
  ],
});
