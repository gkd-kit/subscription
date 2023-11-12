import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.videogo',
  name: '萤石云视频',
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
          name: '【跳过+倒计时】型',
          matches: '[id="com.videogo:id/ad_skip_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/12565356',
        },
        {
          key: 1,
          name: '【圆圈跳过】型',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13327309',
        },
      ],
    },
    {
      key: 1,
      name: '主页广告',
      quickFind: true,
      activityIds: ['com.videogo.main.MainTabActivity'],
      rules: [
        {
          key: 0,
          matches: '[id="com.videogo:id/ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13255684',
        },
        {
          preKeys: 0,
          matches: '[id="com.videogo:id/ad_closead_nointerest"]',
          snapshotUrls: 'https://i.gkd.li/import/13255697',
        },
      ],
    },
  ],
});
