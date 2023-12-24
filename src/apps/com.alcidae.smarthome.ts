import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alcidae.smarthome',
  name: '海雀',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.danale.video.account.view.SplashActivity'],
      rules: [
        {
          matches: '[id="com.alcidae.smarthome:id/tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13762209',
        },
      ],
    },
  ],
});
