import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xhorse.assembly',
  name: 'Xhorse',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.xhorse.assembly:id/tv"]',
          snapshotUrls: 'https://i.gkd.li/import/13758067',
        },
      ],
    },
  ],
});
