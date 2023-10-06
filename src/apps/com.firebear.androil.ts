import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.firebear.androil.app.splash.SplashActivity',
        'com.miui.home.launcher.Launcher',
      ],
      rules: [
        {
          matches: '[id="com.firebear.androil:id/adContainerLay"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12712742'],
        },
        {
          name: '这个广告偶尔是com.miui.home.launcher.Launcher启动的',
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12780668'],
        },
        {
          matches: 'TextView[text*="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12780814'],
        },
      ],
    },
    {
      key: 1,
      name: '第三方 SDK 广告',
      rules: [
        {
          key: 0,
          name: '穿山甲',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@Image < View + View >2 TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12754919',
        },
      ],
    },
    {
      key: 2,
      name: '升级弹窗',
      activityIds: 'com.firebear.androil.app.home.MainActivity',
      rules:
        '@[id="com.firebear.androil:id/dismissNtfImgView"] < RelativeLayout - [id="com.firebear.androil:id/contentLay"] >3 TextView[text^="升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12755032',
    },
  ],
});
