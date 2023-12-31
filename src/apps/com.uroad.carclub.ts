import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.uroad.carclub',
  name: 'ETC车宝',
  groups: [
    {
      key: 1,
      name: '[我的]-卡片式广告',
      rules: [
        {
          activityIds: 'com.uroad.carclub.main.activity.MainActivity',
          matches: '[id="com.uroad.carclub:id/ad_container_fl"] View[childCount=4] > TextView[index=2][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13800067',
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      rules: [
        {
          activityIds: 'com.uroad.carclub.splash.SplashActivity',
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13800082',
        },
      ],
    },
  ],
}
