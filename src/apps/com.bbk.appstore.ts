import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.bbk.appstore.ui.AppStore'],
      rules:
        '[id="com.bbk.appstore:id/launch_activity_root_layout"] >6 [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12847395',
    },
    {
      key: 1,
      name: '请求消息通知',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.bbk.appstore.upgrade.UpgradeNecessaryActivity',
          matches: '[id="com.bbk.appstore:id/upgrade_necessary_btn_high_new"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13198101',
        },
        {
          activityIds: 'com.bbk.appstore.ui.AppStoreTabActivity',
          matches: '[id="com.bbk.appstore:id/common_dialog_netgtive_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13198234',
          
        },
      ],
    },
  ],
});
