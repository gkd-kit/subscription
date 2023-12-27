import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flyersoft.seekbooks',
  name: '搜书大师',
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
          matches: '[text^="跳过"][text.length<5]',
          snapshotUrls: [
            'https://i.gkd.li/import/12857275',
            'https://i.gkd.li/import/13774901',
          ],
        },
      ],
    },
  ],
});
