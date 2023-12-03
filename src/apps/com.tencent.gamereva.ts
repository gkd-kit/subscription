import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.gamereva',
  name: '腾讯先锋',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13538205',
    },
  ],
});
