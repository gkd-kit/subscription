import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excean.gspace',
  name: 'OurPlay',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/import/13302895',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.excelliance.kxqp.splash.SplashActivity',
      rules: [
        {
          matches:
            'FrameLayout[childCount=2] > LinearLayout + FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13302890',
        },
      ],
    },
  ],
});
