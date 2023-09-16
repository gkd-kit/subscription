import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.qidian.QDReader.ui.activity.SplashADActivity',
        'com.qidian.QDReader.ui.activity.SplashImageActivity',
      ],
      rules: 'Button[text^=`跳过`]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12508836'],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.qidian.QDReader.framework.widget.dialog.judian'],
      rules:
        'TextView[text$="新版本"] +(2) RelativeLayout >(4) TextView[text="以后再说"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640254'],
    },
    {
      key: 2,
      name: '青少年模式弹窗',
      activityIds: ['com.qidian.QDReader.bll.helper.z0'],
      rules:
        '[text$="青少年模式"] < [id="com.qidian.QDReader:id/btnEnterTeen"] + [id="com.qidian.QDReader:id/btnCancel"] >(2) [text="我知道了"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640241'],
    },
    {
      key: 3,
      name: '活动弹窗',
      activityIds: [
        'com.qidian.QDReader.ui.activity.MainGroupActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
      ],
      rules:
        '[id="com.qidian.QDReader:id/imgBKT"] + [id="com.qidian.QDReader:id/imgClose"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12640195',
        'https://gkd-kit.gitee.io/import/12640158',
      ],
    },
    {
      enable: false,
      key: 4,
      name: '系统推送提示信息',
      desc: '点击顶部提醒左侧x按钮',
      activityIds: ['com.afollestad.materialdialogs.MaterialDialog'],
      rules: '@[id="com.qidian.QDReader:id/ivClose"] + [text^="开启推送"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640242'],
    },
  ],
});
