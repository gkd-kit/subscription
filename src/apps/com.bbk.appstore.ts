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
          activityIds: 'com.bbk.appstore.upgrade.UpgradeNecessaryActivity',
          matches: '[id="com.bbk.appstore:id/upgrade_necessary_btn_high_new"]',
          snapshotUrls: 'https://i.gkd.li/import/13198101',
        },
        {
          activityIds: 'com.bbk.appstore.ui.AppStoreTabActivity',
          matches: '[id="com.bbk.appstore:id/common_dialog_netgtive_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13198234',
        },
        {
          activityIds: 'com.bbk.appstore.ui.AppStoreTabActivity',
          matches: '[id="com.bbk.appstore:id/quit_button"][text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13246971',
        },
      ],
    },
  ],
});
