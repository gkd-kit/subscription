import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shanghaionstar',
  name: '安吉星',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.shanghaionstar:id/jump_view"]',
      snapshotUrls: 'https://i.gkd.li/import/13071523',
    },
  ],
});
