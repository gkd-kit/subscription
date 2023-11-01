import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.ygkj.chelaile.standard:id/cll_splash_ad_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13062992',
        },
        {
          key: 1,
          matches:
            '[id="com.ygkj.chelaile.standard:id/cll_ad_container"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13228351',
        },
      ],
    },
    {
      key: 1,
      name: '应用内广告卡片',
      activityIds: 'dev.xesam.chelaile.app.module.func.SplashActivity',
      rules:
        'ImageView[id^="com.ygkj.chelaile.standard:id/cll_all_pic_close"][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13062991',
        'https://i.gkd.li/import/13062984',
      ],
    },
  ],
});
