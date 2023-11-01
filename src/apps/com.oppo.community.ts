import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oppo.community',
  name: 'OPPO 社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length=4]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13224994',
        },
      ],
    },
  ],
});
