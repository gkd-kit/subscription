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
      rules: ['TextView[text^="跳过"][text.length<=3]'],
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
      name: '弹窗广告',
      desc: '会出现在搜题页面与我的页面',
      quickFind: true,
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
        'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
      ],
      rules: 'ImageView[id="com.zmzx.college.search:id/iv_close"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12867751',
        'https://gkd-kit.songe.li/import/12894813',
      ],
    },
  ],
});
