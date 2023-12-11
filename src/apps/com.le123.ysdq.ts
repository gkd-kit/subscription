import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.le123.ysdq',
  name: '影视大全',
  groups: [
    {
      key: 1,
      name: '卡片式广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.elinkway.infinitemovies.ui.activity.NewMainActivity',
          quickFind: true,
          matches: '[id="com.le123.ysdq:id/ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/import/13635244',
        },
      ],
    },
  ],
});
