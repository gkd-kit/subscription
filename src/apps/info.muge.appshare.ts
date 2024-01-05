import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: '[vid="tp_splash_container_id"] >n FrameLayout[childCount=4] > View',
      snapshotUrls: 'https://i.gkd.li/import/13842826',
    },
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'info.muge.appshare.view.app.detail.AppDetailActivity',
          matches: [
            '[id="info.muge.appshare:id/adContainer"] >n FrameLayout > ImageView - FrameLayout[childCount=1] > ImageView[childCount=0]',
            '[id="info.muge.appshare:id/adContainer"] >n FrameLayout[desc*="dislike"]', //新规则
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13761259',
            'https://i.gkd.li/import/13712716',
            'https://i.gkd.li/import/13758909', //新规则
          ],
        },
      ],
    },
  ],
});
