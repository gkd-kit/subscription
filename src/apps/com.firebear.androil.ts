import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          key: 1,
          activityIds: 'com.firebear.androil.app.splash.SplashActivity',
          matches:
            '[id="com.firebear.androil:id/adContainerLay"] [text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12712742',
        },
        {
          key: 2,
          activityIds: 'com.firebear.androil.app.splash.SplashActivity',
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12826634',
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
