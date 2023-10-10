import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flyersoft.seekbooks',
  name: '搜书大师',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.miui.home.launcher.Launcher', 'com.flyersoft.seekbooks.ActivityMain'],
      rules: [
        {
          matches: '[text="跳过" || text="跳过 "]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12857275',
        },
      ],
    },
  ],
});
