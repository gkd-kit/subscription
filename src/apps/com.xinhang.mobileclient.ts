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
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds: 'com.xinhang.mobileclient.home.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches: 'View[desc^="close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13024867',
        },
        {
          key: 1,
          matches: 'View > View > TextView + TextView[text=""]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13024869',
        },
      ],
    },
  ],
});
