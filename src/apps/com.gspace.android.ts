import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gspace.android',
  name: 'Gspace',
  groups: [
    {
      key: 0,
      name: '跳过开屏广告',
      activityIds: [
        'com.gspace.android.ui.activity.SplashActivity',
        'com.gspace.android.util.ShortcutHandleActivity',
      ],
      rules: 'FrameLayout[clickable=true] > TextView[text*="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12668986',
        'https://gkd-kit.gitee.io/import/12668985',
      ],
    },
  ],
});
