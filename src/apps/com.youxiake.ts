import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youxiake',
  name: '游侠客旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.youxiake.ui.main.MainActivity',
      matchLauncher: true,
      rules: [
        {
          matches:
            'LinearLayout > TextView[id="com.youxiake:id/start_skip_txt"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12891979',
        },
      ],
    },
  ],
});
