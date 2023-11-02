import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wifitutu',
  name: 'WiFi万能钥匙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角跳过',
      rules: [
        {
          activityIds: 'com.wifitutu.ui.launcher.LauncherActivity',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12992451',
        },
      ],
    },
  ],
});
