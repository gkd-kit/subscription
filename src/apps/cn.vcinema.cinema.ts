import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.vcinema.cinema',
  name: '南瓜电影',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="cn.vcinema.cinema:id/activity_splash_jump_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13758063',
        },
      ],
    },
  ],
});
