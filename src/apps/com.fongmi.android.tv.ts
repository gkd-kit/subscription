import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fongmi.android.tv',
  name: '影视',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.fongmi.android.tv.ui.activity.MainActivity',
          matches: 
            '[id="com.fongmi.android.tv:id/buttonPanel"] >2 [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/14035154',
        },
      ],
    },
  ],
});
