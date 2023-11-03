import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12847395',
    },
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
      rules: 
        '[id="com.bbk.appstore:id/upgrade_necessary_btn_high_new" || id="com.bbk.appstore:id/common_dialog_netgtive_btn" || "com.bbk.appstore:id/quit_button"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/13198101', //com.bbk.appstore.upgrade.UpgradeNecessaryActivity
        'https://gkd-kit.gitee.io/import/13198234', //com.bbk.appstore.ui.AppStoreTabActivity
        'https://gkd-kit.gitee.io/import/13246971', //com.bbk.appstore.ui.AppStoreTabActivity
      ],
    },
  ],
});
