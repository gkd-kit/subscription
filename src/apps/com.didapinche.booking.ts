import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: [
            'https://i.gkd.li/import/13988957',
            'https://i.gkd.li/import/13989178',
          ],
        },
      ],
    },
  ],
});
