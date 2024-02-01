import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '全局规则不生效',
      actionMaximum: 1,
      resetMatch: 'app',
      matchTime: 10000,
      quickFind: true,
      rules: '[text*="跳过"][text.length<=5]',
      exampleUrls:
        'https://m.gkd.li/101449500/4c1e3df4-e0e8-49ec-a260-ed406b46168e',
      snapshotUrls: 'https://i.gkd.li/import/14120100',
    },
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
  ],
});
