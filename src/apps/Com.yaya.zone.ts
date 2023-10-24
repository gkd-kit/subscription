 import { defineAppConfig } from '../types';

export default defineAppConfig({  
  id: 'com.yaya.zone', 
  name: '叮咚买菜', 
  groups: [
    {
      key: 1, 
      name: '开屏广告',
      activityIds: ['cn.me.android.splash.activity.SplashActivity'],
      rules: [
        {
          matches: '[id="com.yaya.zone:id/tv_skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/snapshot/1698151049770',
        },
      ],
    },
  ],
});
