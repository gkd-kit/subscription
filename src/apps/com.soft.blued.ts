import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.soft.blued',
  name: 'Blued',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          name: '字节广告SDK',
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13699446',
        },
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/12777070',
        },
      ],
    },
    {
      key: 1,
      name: '交友页面-广告卡片',
      quickFind: true,
      activityIds: [
        'com.blued.android.core.ui.TerminalActivity',
        'com.soft.blued.ui.home.HomeActivity',
      ],
      rules:
        '[id="com.soft.blued:id/ad_container"] >n [id="com.soft.blued:id/img_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12777097',
        'https://i.gkd.li/import/13699455', // activityIds: 'com.soft.blued.ui.home.HomeActivity',
      ],
    },
  ],
});
