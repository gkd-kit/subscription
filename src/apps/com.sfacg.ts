import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.sf.ui.launcher.LauncherActivity',
      rules: [
        {
          matches: '[id="com.sfacg:id/tv_jump"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13185579',
        },
      ],
    },
  ],
});
