import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tima.carnet.m.main',
  name: '钛马星',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/22029832/5aa3f016-d33c-4821-91bd-f23235b04ad3',
            'https://i.gkd.li/import/12594568',
            'https://i.gkd.li/import/12594574',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '每日弹窗广告',
      activityIds: [
        'com.tima.carnet.m.main.lib.common.dialog.TimaLoadingDialog',
        'com.tima.carnet.m.main.app.main.NoticeActivity',
        'com.tima.carnet.m.main.app.main.MainActivity',
        'com.tima.carnet.m.main.LaunchActivity',
      ],
      rules: [
        {
          matches: [
            'CheckBox[id$="today_will_not_shown"] + ImageButton[clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12654432',
            'https://i.gkd.li/import/13507746',
            'https://i.gkd.li/import/13508074',
            'https://i.gkd.li/import/13508041',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '设备界面顶部广告',
      activityIds: ['com.tima.carnet.m.main.app.main.MainActivity'],
      rules: [
        {
          key: 1,
          matches:
            '[id="com.tima.carnet.m.main:id/fl_ad_banner"] >n Image[text!=null&&text!=""] < View +n View > Image',
          snapshotUrls: ['https://i.gkd.li/import/13508030'],
        },
        {
          key: 2,
          matches:
            '[id="com.tima.carnet.m.main:id/fl_ad_banner"] >n Image[text!=null&&text!=""] + View > Image',
          snapshotUrls: ['https://i.gkd.li/import/13508115'],
        },
        {
          key: 3,
          preKeys: [1, 2],
          matches: '[text="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/import/13508102'],
        },
        {
          key: 4, //有时存在加载不出来的情况
          preKeys: [1, 2],
          action: 'back',
          matches: 'ListView[childCount=0]',
          snapshotUrls: [
            'https://m.gkd.li/22029832/0f4dfa74-6012-47e5-8f8e-afdebe9b5149',
          ],
        },
      ],
    },
  ],
});
