import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lerist.fakelocation',
  name: 'Fake Location',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.stub.stub01.StartActivity',
      rules: [
        {
          matches: '[text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13608967',
        },
      ],
    },
  ],
});
