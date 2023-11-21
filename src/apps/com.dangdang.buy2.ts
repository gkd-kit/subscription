import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dangdang.buy2',
  name: '当当',
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
          matches: '@LinearLayout > TextView[text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13423387',
        },
      ],
    },
  ],
});
