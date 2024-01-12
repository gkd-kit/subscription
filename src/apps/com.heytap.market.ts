import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
      rules: [
        {
          action: 'back',
          matches:
            '[id="com.heytap.market:id/tv_titile"][text="发现软件商店新版本"]',
          snapshotUrls: 'https://i.gkd.li/import/13455965',
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.heytap.cdo.client.cards.page.main.maintab.MainTabActivity',
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13919483',
        },
      ],
    },
  ],
});
