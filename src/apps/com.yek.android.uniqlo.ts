import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yek.android.uniqlo',
  name: '优衣库',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yek.android.uniqlo.activity.WelcomeActivity',
      rules: 'TextView[text*="跳过"][text.length<=10]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13212257',
    },
    {
      key: 1,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.yek.android.uniqlo.uiux.Home.activity.HomeActivity',
      rules:
        'ImageView[id="com.yek.android.uniqlo:id/pop_close"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/13212320',
      ],
    },
  ],
});
