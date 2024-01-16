import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.delicloud.app.smartoffice',
  name: '得力e+',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@View[clickable=true] <2 FrameLayout <2 FrameLayout <<2 FrameLayout[id="com.delicloud.app.smartoffice:id/splash_container"]',
          snapshotUrls: ['https://i.gkd.li/import/13840775'],
        },
        {
          matches:
            '[id="com.delicloud.app.smartoffice:id/splash_container"] View[index=2]',
          snapshotUrls: 'https://i.gkd.li/import/13944086',
        },
      ],
    },
  ],
});
