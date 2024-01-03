import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmsoft.forwatch',
  name: '子腾园',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds: 'com.zmapp.fwatch.activity.NativeAdActivity',
          quickFind: true,
          matches:
            '@[id="com.zmsoft.forwatch:id/ad_close"] - * >n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13545995',
        },
      ],
    },
  ],
});
