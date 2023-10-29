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
        {
          key: 0,
          matches: '[id="cn.com.yunma.school.app:id/skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13175275',
        },
        {
          key: 1,
          matches:
            '[id="cn.com.yunma.school.app:id/anythink_myoffer_splash_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13198129',
        },
      ],
    },
  ],
});
