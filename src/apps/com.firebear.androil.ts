import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.firebear.androil.app.splash.SplashActivity',
      rules: [
        {
          matches: '[id=`com.byted.pangle.m:id/tt_splash_skip_btn`]',
          action: 'clickCenter',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12712742',
        },
        {
          matches: 'TextView[text*="跳过"]',
          action: 'clickCenter',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12762525',
        },
      ],
    },
    {
      key: 1,
      name: '升级弹窗',
      activityIds: 'com.firebear.androil.app.home.MainActivity',
      rules: '[id=`com.firebear.androil.app.home.MainActivity`]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12755032',
    },
  ],
});
