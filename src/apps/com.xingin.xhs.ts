import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text="跳过"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12739065', // com.xingin.xhs.index.v2.IndexActivityV2
        'https://gkd-kit.gitee.io/import/13197784', // com.xingin.matrix.detail.activity.DetailFeedActivity
      ],
    },
    {
      key: 1,
      name: '通知权限弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      matchLauncher: true,
      activityIds: [
        'com.xingin.xhs.index.v2.IndexActivityV2',
        'com.xingin.xhs.notification.NotificationAuthorizationTranslucentActivity',
      ],
      rules: [
        {
          matches: '@ImageView <2 FrameLayout >2 [text^="打开通知"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13195753', //com.xingin.xhs.index.v2.IndexActivityV2
            'https://gkd-kit.gitee.io/import/13222356', //com.xingin.xhs.notification.NotificationAuthorizationTranslucentActivity
            'https://gkd-kit.gitee.io/import/13256145', //com.huawei.android.launcher.unihome.UniHomeLauncher
          ],
        },
        {
          matches: '@ImageView <2 FrameLayout - [text^="打开通知"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13250418',
        },
      ],
    },
    {
      key: 2,
      name: '更新弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules:
        '@ImageView[clickable=true] <2 FrameLayout < LinearLayout >2 [text="立即安装"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13246890',
    },
  ],
});
