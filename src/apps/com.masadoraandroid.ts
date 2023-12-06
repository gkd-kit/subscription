import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.masadoraandroid',
  name: 'masadora',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.masadoraandroid.ui.start.StartActivity'],
      rules: [
        {
          matches: '[id="com.masadoraandroid:id/skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13578688',
        },
      ],
    },
  ],
});
