import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[text*="跳过" && text.length<=10 || desc*="跳过" && desc.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12919282',
        'https://i.gkd.li/import/13324363',
      ],
    },
  ],
});
