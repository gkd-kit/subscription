import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.live',
  name: '点淘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.taobao.live:id/splash_jump_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13206942',
    },
  ],
});
