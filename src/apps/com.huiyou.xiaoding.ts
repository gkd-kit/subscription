import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huiyou.xiaoding',
  name: '校钉',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.huiyou.xiaoding.launcher.LauncherActivity'],
      rules: [
        {
          matches: '[id$="ksad_splash_circle_skip_view"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12699825'],
        },
        {
          matches: '[id$="skip_parent_view"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12699822'],
        },
        {
          matches: '[name="android.widget.TextView"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12699790'],
        },
      ],
    },
  ],
});
