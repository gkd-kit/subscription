import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'world.letsgo.booster.android.pro',
  name: '快连VPN',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="close_update_tip"]',
      snapshotUrls: 'https://i.gkd.li/import/14066056',
    },
  ],
});
