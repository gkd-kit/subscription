import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.giraffe',
  name: '安易加速器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: 'com.speed.shadowsocks.ui.main.MainActivity',
      rules: '[vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13998233',
    },
  ],
});
