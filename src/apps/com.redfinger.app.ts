import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.redfinger.app',
  name: '红手指云手机',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          key: 0,
          matches:
            '[id="com.redfinger.app:id/anythink_myoffer_splash_skip_area"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1703162936110',
        },
        {
          quickFind: true,
          key: 1,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13166289',
            'https://i.gkd.li/import/13188631',
            'https://i.gkd.li/import/13166298',
          ],
        },
        {
          key: 2,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13188645',
        },
      ],
    },
  ],
});
