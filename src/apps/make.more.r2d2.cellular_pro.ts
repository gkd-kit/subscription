import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'make.more.r2d2.cellular_pro',
  name: 'CellularPro',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13800689',
    },
  ],
});
