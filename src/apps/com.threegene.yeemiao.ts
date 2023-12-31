import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.threegene.yeemiao',
  name: '小豆苗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13799635',
    },
  ],
});
