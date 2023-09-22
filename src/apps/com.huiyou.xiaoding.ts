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
          matches: '[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12699825',
        },
        {
          matches: '[id$="ksad_splash_circle_skip_view"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12699825'],
        },
      ],
    },
    {
      key: 0,
      name: '开屏广告2',
      activityIds: ['com.huiyou.xiaoding.launcher.LauncherActivity'],
      rules: [
        {
          matches: '[text="Skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12699822',
        },
        {
          matches: '[id$="skip_parent_view"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12699822'],
        },
      ],
    },
    {
      key: 0,
      name: '开屏广告3',
      activityIds: ['com.huiyou.xiaoding.launcher.LauncherActivity'],
      rules: [
        {
          matches: '[text="跳过 "]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12699790',
        },
        {
          matches: '[name="android.widget.TextView"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12699790'],
        },
      ],
    },
  ],
});
