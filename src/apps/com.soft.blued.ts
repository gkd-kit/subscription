import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.soft.blued',
  name: 'Blued',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds: [
            'com.blued.android.core.ui.TerminalActivity',
            'com.soft.blued.ui.home.HomeActivity',
          ],
          matches:
            '[id="com.soft.blued:id/fl_main"] [id="com.soft.blued:id/img_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12777097',
            'https://i.gkd.li/import/13694950',
            'https://i.gkd.li/import/13699455', // activityIds: 'com.soft.blued.ui.home.HomeActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-会员购买弹窗',
      quickFind: true,
      resetMatch: 'app',
      activityIds: 'com.blued.android.core.ui.TransparentActivity',
      rules: '[vid="blued_ad_layout"] +n [vid="img_close"]',
      exampleUrls:
        'https://m.gkd.li/101449500/2a5e9e45-09c5-4b72-a6af-4d284c6532a2',
      snapshotUrls: 'https://i.gkd.li/import/13989423',
    },
    {
      key: 3,
      name: '全屏广告-首充弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.soft.blued.ui.home.HomeActivity',
      rules: '[vid="fl_main"] > [vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/14039501',
    },
  ],
});
