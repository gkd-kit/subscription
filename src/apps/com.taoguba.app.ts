import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taoguba.app',
  name: '淘股吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="com.taoguba.app:id/txt_onclick"][text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13774322',
    },
  ],
});
