import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wn.app.np',
  name: 'NP管理器',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      rules: [
        {
          activityIds: 'player.normal.np.activity.SplashActivity',
          matches: '@LinearLayout > TextView[text^=\'跳过\']',
          snapshotUrls: [
            'https://i.gkd.li/import/13400234',
            'https://i.gkd.li/import/13400250',
            'https://i.gkd.li/import/13400257',
          ],
        },
      ],
    },
  ],
});
