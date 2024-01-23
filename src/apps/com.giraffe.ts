import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.giraffe',
  name: '安易加速器',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '点击X',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.speed.shadowsocks.ui.main.MainActivity',
          matches: '[id="com.giraffe:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/14000409',
        },
      ],
    },
  ],
});
