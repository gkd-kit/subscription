import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhangkongapp.joke.bamenshenqi',
  name: '八门神器',
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
          name: '【穿山甲SDK】',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13391633',
        },
      ],
    },
  ],
});
