import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: 'ImageView[desc="miniLogoView"] + View[clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775410',
            'https://i.gkd.li/import/13426030',
          ],
        },
        {
          matches: '[desc*="跳过"][desc.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13468987',
        },
      ],
    },
  ],
});
