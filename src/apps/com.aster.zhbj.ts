import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.aster.zhbj',
  name: '喵上漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角跳过',
      rules: [
        {
          activityIds: 'com.aster.comic.app.ad.view.mediation.MediationSplashAdActivity',
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12981243',
        },
      ],
    },
    {
      key: 1,
      name: '应用内广告弹窗',
      desc: '点击右上角x',
      rules: [
        // 腾讯广告
        {
          key: 0,
          activityIds: 'com.bbk.launcher2.Launcher',
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777325',
        },
        {
          key: 1,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches:
            'ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12777329',
        },
        {
          key: 2,
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12984767',
        },

        // 字节广告
        {
          key: 10,
          activityIds: 'com.aster.comic.app.view.MainActivity',
          matches: '[desc^="webview-close"] > View',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12903062',
        },
        {
          key: 11,
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
