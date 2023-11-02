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
    {
      key: 1,
      name: '首页-WiFi列表广告',
      activityIds: ['com.wifitutu.ui.main.MainActivity'],
      rules: [
        {
          matches: ['View < [desc^="dislike"]'],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13233916',
        },
        {
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13234048',
        },
        {
          matches: '[text="无法关闭"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13234048',
        },
      ],
    },
  ],
});
