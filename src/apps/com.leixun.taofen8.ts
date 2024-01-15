import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.leixun.taofen8',
  name: '淘粉吧',
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
            '[id="com.leixun.taofen8:id/fl_advert_container"] View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13937324',
        },
      ],
    },
  ],
});
