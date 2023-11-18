import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.ukids.client.phone',
    name: '小小优趣',
    groups: [
      {
        key: 1,
        name: '首页-弹窗广告',
        exampleUrls: [
          'https://i.gkd.li/import/13400238',
        ],
        activityIds: [
          'com.huawei.android.launcher.unihome.UniHomeLauncher',
         'com.ukids.client.phone.parent.ParentClientHomeActivity',
        ],
        rules: [
          {
            matches: '[id="com.ukids.client.phone:id/dialog_dismiss_btn_two"]',
            snapshotUrls: ['https://i.gkd.li/import/13400238',]
          },
        ],
      },
    ],
  });
