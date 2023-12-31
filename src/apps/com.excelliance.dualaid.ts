import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excelliance.dualaid',
  name: '双开助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[id="com.excelliance.dualaid:id/tv_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/13800245',
    },
  ],
});
