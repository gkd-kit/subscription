import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '请求消息通知',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.bbk.appstore.upgrade.UpgradeNecessaryActivity',
        'com.bbk.appstore.ui.AppStoreTabActivity',
      ],
      rules: [
        {
          key: 0,
          activityIds: 'com.bbk.appstore.upgrade.UpgradeNecessaryActivity',
          matches: '[id="com.bbk.appstore:id/upgrade_necessary_btn_high_new"]',
          snapshotUrls: 'https://i.gkd.li/import/13198101',
        },
        {
          actionMaximumKey: 0,
          activityIds: 'com.bbk.appstore.ui.AppStoreTabActivity',
          matches: [
            '[text*="通知"]',
            '[text="取消"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13198234',
            'https://i.gkd.li/import/13246971',
            'https://i.gkd.li/import/13884356',
          ],
        },
      ],
    },
  ],
});
