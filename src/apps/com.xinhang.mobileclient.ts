import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xinhang.mobileclient',
  name: '中国移动河南',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.xinhang.mobileclient.launcher.activity.LauncherActivity',
      matchLauncher: true,
      rules: '[id="com.xinhang.mobileclient:id/cdp_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13024858',
    },
  ],
});
