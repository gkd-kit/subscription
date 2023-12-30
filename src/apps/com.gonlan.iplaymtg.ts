import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gonlan.iplaymtg',
  name: '旅法师营地',
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
          matches: '[id="com.gonlan.iplaymtg:id/ad_jump_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/13792352',
        },
      ],
    },
  ],
});
