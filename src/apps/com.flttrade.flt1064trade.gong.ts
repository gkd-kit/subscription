import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flttrade.flt1064trade.gong',
  name: '影视工场',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc*="跳过"][desc.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13759438',
    },
  ],
});
