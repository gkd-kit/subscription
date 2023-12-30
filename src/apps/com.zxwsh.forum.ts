import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zxwsh.forum',
  name: '镇雄微生活',
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
          matches: '[id="com.zxwsh.forum:id/btn_pass"]',
          snapshotUrls: 'https://i.gkd.li/import/13758072',
        },
      ],
    },
  ],
});
