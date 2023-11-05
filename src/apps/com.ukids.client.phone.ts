import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.ukids.client.phone',
    name: '小小优趣',
    groups: [
      {
        key: 1,
        name: '首页-弹窗广告',
        exampleUrls: [
          'https://gkd-kit.gitee.io/snapshot/1699155648226',
        ],
        activityIds: [
          'com.huawei.android.launcher.unihome.UniHomeLauncher',
         'com.ukids.client.phone.parent.ParentClientHomeActivity',
        ],
        rules: [
          {
            matches: '[id="com.ukids.client.phone:id/dialog_dismiss_btn_two"]',
            snapshotUrls: ['https://gkd-kit.gitee.io/snapshot/1699155648226','https://gkd-kit.gitee.io/snapshot/1699157531129',]
          },
        ],
      },
    ],
  });
