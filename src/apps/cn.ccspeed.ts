import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.ccspeed',
  name: 'CC加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13334790',
    },
    {
      key: 1,
      name: '悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'cn.ccspeed.app.MainActivity',
          quickFind: true,
          matches:
            '[id="cn.ccspeed:id/float_layout"] > @ImageView + [id="cn.ccspeed:id/iv_float"]',
          snapshotUrls: 'https://i.gkd.li/import/13546075',
        },
      ],
    },
  ],
});
