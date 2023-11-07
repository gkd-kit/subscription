import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ruanmei.zuihuimai',
  name: '最会买',
  groups: [
    {
      key: 0,
      name: '开屏弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/import/13269864',
        },
      ],
    },
  ],
});
