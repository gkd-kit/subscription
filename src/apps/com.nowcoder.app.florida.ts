import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.nowcoder.app.florida',
  name: '牛客',
  groups: [
    {
      name: '开屏广告',
      key: 1,
      rules: [
        {
          matches: ['View'],
          activityIds: [
            'com.nowcoder.app.florida.modules.splash.view.SplashActivity',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13855443',
        },
      ],
    },
  ],
});
