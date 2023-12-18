import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id$="tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683145',
            'https://i.gkd.li/import/12683173', // activityId: 'com.miui.home.launcher.Launcher'
            'https://i.gkd.li/import/13702708',
          ],
        },
        {
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12683168',
            'https://i.gkd.li/import/12683211',
            'https://i.gkd.li/import/12748893',
          ],
        },
      ],
    },
  ],
});
