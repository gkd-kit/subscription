import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pingan.paces.ccms',
  name: '平安口袋银行',
  groups: [
    {
      key: 1,
      name: '全屏广告-首页-权益/抽奖弹窗',
      quickFind: true,
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.pingan.launcher.activity.LauncherActivity',
      rules:
        '[text!="" || text!=null] < [vid="alertHeader"] < [vid="allViewstub"] + [vid="horizontalBottomIcon"] >2 [vid="bottom_close_image"]',
      snapshotUrls: [
        'https://i.gkd.li/import/14107110',
        'https://i.gkd.li/import/14107111',
      ],
    },
  ],
});
