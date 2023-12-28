import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.umetrip.android.msky.huawei',
  name: '航旅纵横Pro',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[id="com.umetrip.android.msky.huawei:id/advert_tv_jump"]',
          snapshotUrls: 'https://i.gkd.li/import/13777378',
        },
      ],
    },
  ],
});
