import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.zmzx.college.search.activity.init.InitActivity',
      rules: [
        '[id="com.zmzx.college.search:id/ksad_splash_root_container"]',
        'TextView[text*="跳过"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12867875',
        'https://gkd-kit.songe.li/import/12867970',
        'https://gkd-kit.songe.li/import/12881929',
      ],
    },
    {
      enable: false,
      key: 1,
      name: '首页-推送通知',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/siv_dialog_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12867853',
    },
    {
      key: 2,
      name: '我的-弹窗广告',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12867751',
    },
  ],
});
