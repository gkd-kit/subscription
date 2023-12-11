import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.enflick.android.TextNow',
  name: 'TextNow',
  groups: [
    {
      key: 1,
      name: '设为默认应用提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.enflick.android.TextNow:id/btn_dismiss"][text="Not Now"]',
          snapshotUrls: 'https://i.gkd.li/import/13630460',
        },
        {
          preKeys: 0,
          matches: '[id="android:id/button2"][text="SKIP"]',
          snapshotUrls: 'https://i.gkd.li/import/13630463',
        },
      ],
    },
  ],
});
