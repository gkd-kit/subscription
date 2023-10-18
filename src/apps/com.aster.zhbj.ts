import { defineAppConfig } from '../types';

export 默认 defineAppConfig({
  id: 'com.aster.zhbj',
  名字: '喵上漫画',
  groups: [
    {
      密钥: 0,
      名字: '开屏广告',
      activityIds: 'com.aster.comic.app.ad.view.mediation.MediationSplashAdActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12981243'
        }
      ]
    },
    {
      密钥: 1,
      名字: '应用内广告弹窗',
      desc: '点击右上角x',
      rules: [
        // 腾讯广告
        {
          密钥: 0,
          activityIds: 'com.bbk.launcher2.Launcher',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777325',
        },
        {
          密钥: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            'ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777329',
        },
        {
          密钥: 2,
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12872249',
        },

        // 字节广告
        {
          密钥: 10,
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches: '[desc^="webview-close"] > View',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12903062',
        },
        {
          密钥: 11,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image < View + View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12903072',
        },
      ],
    },
  ],
});
