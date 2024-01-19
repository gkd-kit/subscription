import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@View[clickable=true][index=2] -2 * < FrameLayout[childCount=4] <<n [vid="flCSJAdContainer"]',
          snapshotUrls: 'https://i.gkd.li/import/13988957',
        },
      ],
    },
  ],
});
