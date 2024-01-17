import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sgcc.evs.echarge',
  name: 'e充电',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-首页广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.evs.echarge.dev.ui.advertisement.SplashActivity',
          matches: '[id="com.sgcc.evs.echarge:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13958838',
        },
      ],
    },
  ],
});
