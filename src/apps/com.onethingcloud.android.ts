import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.onethingcloud.android.MainActivity',
      rules: 'View[desc*="跳过"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12788073'],
    },
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.miui.home.launcher.Launcher',
      rules: 'View > ImageView + ImageView + ImageView',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12788086'],
    },
  ],
});
