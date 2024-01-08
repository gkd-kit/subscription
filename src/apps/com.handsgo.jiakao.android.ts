import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.handsgo.jiakao.android',
  name: '驾考宝典',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.handsgo.jiakao.android:id/closeLayout`]', // 缺少快照
    },
    {
      key: 1,
      name: '悬浮广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          matches:
            '@[id="com.handsgo.jiakao.android:id/ivDelete"] + [id="com.handsgo.jiakao.android:id/ivRemote"]',
          snapshotUrls: 'https://i.gkd.li/import/13475994',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            '[desc^="logoad"] > [text="广告"]',
            '[desc^="webview-close"] > View[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13476039',
        },
        {
          key: 1,
          name: '课程广告',
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          quickFind: true,
          matches:
            '[id="com.handsgo.jiakao.android:id/adsdk__ids_cta_layout"] - * > [id="com.handsgo.jiakao.android:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13523033',
        },
        {
          key: 2,
          name: '摇一摇广告',
          quickFind: true,
          activityIds: 'com.handsgo.jiakao.android.main.activity.MainActivity',
          matches: '[id="com.handsgo.jiakao.android:id/topCloseLayout"] > [id="com.handsgo.jiakao.android:id/close"]',
          snapshotUrls: 'https://i.gkd.li/import/13855635',
        },
      ],
    },
    {
      key: 3,
      name: '评论区广告',
      quickFind: true,
      rules: [
        {
          activityIds: [
            'com.handsgo.jiakao.android.practice_refactor.activity.PracticeActivity',
            'com.handsgo.jiakao.android.main.activity.MainActivity',
          ],
          matches: '[id="com.handsgo.jiakao.android:id/adsdk__ids_ad_third_bind_area"] > * > * > [id="com.handsgo.jiakao.android:id/adsdk__ids_component_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13848864',
            'https://i.gkd.li/import/13857697',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '横幅广告',
      rules: [
        {
          quickFind: true,
          activityIds: [
            'com.handsgo.jiakao.android.main.activity.MainActivity',
            'com.handsgo.jiakao.android.practice_refactor.activity.PracticeActivity',
          ],
          matches: '[id="com.handsgo.jiakao.android:id/topRightContainer"] > [id="com.handsgo.jiakao.android:id/adsdk__ids_component_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13855690',
            'https://i.gkd.li/import/13853240',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '请求开启通知权限弹窗',
      activityIds: [],
      quickFind: true,
      rules:
        '[text="开启专属学习资料推送"] + [id="com.handsgo.jiakao.android:id/closeIv"]',
      snapshotUrls: 'https://i.gkd.li/import/13520296',
    },
  ],
});
