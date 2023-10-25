import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.wacai365.HomeActivity',
      rules: '[id="com.wacai365:id/ksad_splash_circle_skip_view"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13162861',
    },
  ],
});
