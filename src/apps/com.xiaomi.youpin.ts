import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.youpin',
  name: '小米有品',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.xiaomi.youpin.activity.YouPinMainTabActivity'],
      rules: [
        {
          matches: '[id="com.xiaomi.youpin:id/yp_splash_jump_image"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12836717'],
        },
      ],
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds: ['com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity'],
      rules: [
        {
          matches: 'Image[index= 0]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12836727'],
        },
      ],
    },
    {
      key: 2,
      name: '版本升级弹窗',
      activityIds: ['com.xiaomi.youpin.globalpopwindow.popwindow.PopWindowActivity'],
      rules: [
        {
          matches: '[id="com.xiaomi.youpin:id/ypd_alert_close_area"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12836775'],
        },
      ],
    },
  ],
});