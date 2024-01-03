import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.lark',
  name: '飞书',
  groups: [
    {
      enable: false,
      key: 1,
      name: '桌面端登录确认',
      quickFind: true,
      activityIds:
        'com.ss.lark.android.passport.biz.feature.sso.suite.SuiteConfirmActivity',
      rules:
        '[text="飞书 桌面端登录确认"] +2 [id="com.ss.android.lark:id/login_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13494960',
    },
    {
      enable: false,
      key: 10,
      name: '自动查看原图',
      desc: '查看图片时自动点击【查看原图】',
      activityIds:
        'com.ss.android.lark.widget.photo.preview.PhotoPagerActivity',
      quickFind: true,
      rules: '[id="com.ss.android.lark:id/look_origin_icon"]',
      snapshotUrls: 'https://i.gkd.li/import/12840528',
    },
    {
      enable: false,
      key: 11,
      name: '自动发送原图',
      desc: '发送图片时自动勾选【原图】',
      activityIds: 'com.ss.android.lark.chatwindow.ChatWindowActivity',
      quickFind: true,
      rules:
        '@View[id$="original_photo"][checked=false] + [id="com.ss.android.lark:id/original_label"][text="原图"]',
      snapshotUrls: 'https://i.gkd.li/import/12840551',
    },
  ],
});
