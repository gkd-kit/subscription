import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.yunma.app.ui.start.SplashActivity',
      rules: [
        '[text^="跳过"]',
        '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/13175275',
        'https://gkd-kit.gitee.io/import/13177064',
        'https://gkd-kit.gitee.io/import/13179898',
      ],
    },
  ],
});
