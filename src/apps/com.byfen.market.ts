import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.byfen.market',
  name: '百分网游戏盒子',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13298944',
        },
        {
          key: 2,
          matches: '[text*="跳过"][text.length<=5]',
          snapshotUrls: 'https://i.gkd.li/import/13801584',
        },
      ],
    },
  ],
});
