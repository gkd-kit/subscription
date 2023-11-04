import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.videogo',
  name: '萤石云视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.videogo.login.LoadingActivity'],
      rules: [
        {
          matches: '[id="com.videogo:id/ad_skip_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/12565356',
        },
      ],
    },
    {
      key: 1,
      name: '主页广告',
      activityIds: ['com.videogo.main.MainTabActivity'],
      rules: [
        {
          matches: '[id="com.videogo:id/ad_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13255684',
        },
        {
          matches: '[id="com.videogo:id/ad_closead_nointerest"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13255697',
        },
      ],
    },
  ],
});
