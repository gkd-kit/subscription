import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ximi.weightrecord',
  name: '体重小本',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13791084',
    },
  ],
});