import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mfcloudcalculate.networkdisk',
  name: '123云盘',
  groups: [
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds: 'com.mfcloudcalculate.networkdisk.activity.AdFreeActivity',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      quickFind: true,
      rules:
        '[text*="关闭"][id="com.mfcloudcalculate.networkdisk:id/tv_ad_free_colse"]',
      snapshotUrls: 'https://i.gkd.li/import/13546173',
    },
    {
      key: 2,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_view"] > [id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13945127',
        },
      ],
    },
  ],
});
