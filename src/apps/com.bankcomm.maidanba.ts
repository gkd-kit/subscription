import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bankcomm.maidanba',
  name: '买单吧',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[text="立即升级"] -2 [text="以后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/14107346',
    },
  ],
});
