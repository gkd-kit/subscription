import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coloros.phonemanager',
  name: 'OPPO手机管家',
  groups: [
    {
      key: 0,
      name: '版本更新',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@[text="取消"] < [id="com.coloros.phonemanager:id/buttonPanel"] > [text="更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13194979',
        },
      ],
    },
    {
      key: 1,
      name: '应用推荐',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.coloros.phonemanager:id/ad_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13440085',
        },
      ],
    },
  ],
});
