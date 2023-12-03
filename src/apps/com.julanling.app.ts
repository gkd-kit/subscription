import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.julanling.app',
  name: '安心记加班',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.julanling.app:id/adsail_skipView"]',
      snapshotUrls: 'https://i.gkd.li/import/13537961',
    },
  ],
});
