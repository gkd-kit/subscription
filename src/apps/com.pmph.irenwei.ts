import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pmph.irenwei',
  name: '人卫',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '全屏广告-抽奖弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.pmph.main.ad.AdActivity',
          matches: '[id="com.pmph.irenwei:id/action_bar_root"] [id="com.pmph.irenwei:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13897421',
        },
      ],
    },
  ],
});
