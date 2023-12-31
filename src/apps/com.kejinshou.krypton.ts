import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kejinshou.krypton',
  name: '氪金兽',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="com.kejinshou.krypton:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13800327',
    },
  ],
});
