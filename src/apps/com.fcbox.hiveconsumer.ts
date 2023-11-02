import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fcbox.hiveconsumer',
  name: '丰巢',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'kt.com.fcbox.hiveconsumer.app.business.advert.XWSplashActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.fcbox.hiveconsumer:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13226664', //获取链接的方法在上一步有说明
        },
        // {
        //   matches: '[text*="跳过"][text.length<=5]',
        //   snapshotUrls: 'https://gkd-kit.gitee.io/import/13234598',
        // }
      ],
    },
  ],
});
