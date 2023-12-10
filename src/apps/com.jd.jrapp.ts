import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.jrapp',
  name: '京东金融',
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
          matches: '[id="com.jd.jrapp:id/btn_jump"]',
          snapshotUrls: 'https://i.gkd.li/import/13054174',
        },
      ],
    },
    {
      key: 1,
      name: '通知提醒',
      quickFind: true,
      actionMaximum: 1,
      activityIds: [
        'com.jd.jrapp.bm.mainbox.main.MainActivity',
        'com.jd.jrapp.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
          matches:
            'TextView[text^="打开通知"] +2 [id="com.jd.jrapp:id/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13249998',
        },
        {
          activityIds: 'com.jd.jrapp.bm.common.web.ui.WebActivity',
          matches: 'View[text="开启并订阅通知"] < View + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13255656',
        },
      ],
    },
    {
      key: 2,
      name: '版本更新',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.jd.jrapp.bm.mainbox.main.MainActivity',
      rules: '@ImageButton[id="com.jd.jrapp:id/ib_close"] + RelativeLayout [text^="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/import/13628364',
    },
  ],
});
