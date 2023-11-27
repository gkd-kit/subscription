import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qingwatq.weather',
  name: '呱呱天气',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text$="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13476349',
    },
  ],
});
