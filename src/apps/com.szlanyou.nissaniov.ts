import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.szlanyou.nissaniov',
  name: '东风日产',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13797008',
    },
  ],
});
