import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ziipin.homeinn',
  name: '首旅如家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[id="com.ziipin.homeinn:id/jump_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13771991',
    },
  ],
});
