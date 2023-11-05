import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fan.app',
  name: '十六番旅行',
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
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13258011',
        },
        {
          key: 1,
          matches: '@Image < View - View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13258016',
        },
      ],
    },
    },
  ],
});
