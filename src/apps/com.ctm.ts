import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ctm',
  name: 'CTM Buddy',
  groups: [
    {
      key: 0,
      name: '開屏廣告',
      matchTime: 10000,
      quickFind: true,
      activityIds: 'com.blankj.utilcode.util.UtilsTransActivity',
      rules: '[id="com.ctm:id/tv_skip_adv"]',
      snapshotUrls: 'https://i.gkd.li/import/13350472',
    },
    {
      key: 1,
      name: '浮窗廣告',
      quickFind: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350575',
    },
    {
      key: 2,
      name: '底部橫幅廣告',
      quickFind: true,
      activityIds: 'com.ctm.home.page.MainActivity',
      rules: '[id="com.ctm:id/btn_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350612',
    },
  ],
});
