import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.ccspeed',
  name: 'CC加速器',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      enable: false,
      name: '加速页-分享抽奖浮窗',
      activityIds: 'cn.ccspeed.app.MainActivity',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'activity',
      actionMaximum: 1,
      rules: [
        {
          matches:
            'FrameLayout[id="cn.ccspeed:id/float_layout"] > ImageView - ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13539299',
        },
      ],
    },
  ],
});
