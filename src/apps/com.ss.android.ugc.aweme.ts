import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '关闭青少年弹窗',
      rules: 'Button[text=`开启青少年模式`] + * > Button[text!=null]',
    },
    {
      key: 1,
      name: '关闭用户推荐',
      rules: [
        {
          activityIds:
            'com.google.android.material.bottomsheet.BottomSheetDialog',
          matches:
            '[id="com.ss.android.ugc.aweme:id/desc"][text="减少此类推荐"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12520962',
        },
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: [
            '[text="换一个"] - FrameLayout[clickable=true] > ImageView[clickable=true]',
            '[text="你可能感兴趣"] < LinearLayout + [text="隐藏"][clickable=true]',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12520943',
            'https://gkd-kit.gitee.io/import/12675396',
          ],
        },
        {
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[text="朋友推荐"] +(2) FrameLayout > [desc="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12675129',
        },
        {
          activityIds:
            'com.ss.android.ugc.aweme.friends.ui.RawAddFriendsActivity',
          matches:
            '[text="朋友推荐"] < LinearLayout + FrameLayout > [desc="关闭"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12675245',
        },
      ],
    },
    {
      key: 2,
      activityIds: [
        'com.ss.android.ugc.aweme.main.MainActivity',
        'com.miui.home.launcher.Launcher',
      ],
      name: '关闭朋友推荐弹窗',
      rules: '[text="朋友推荐"] +2 [id="com.ss.android.ugc.aweme:id/close"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12525387',
        'https://gkd-kit.gitee.io/import/12525389',
      ],
    },
    {
      key: 3,
      name: '关闭更新弹窗',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: '@[text="以后再说"] +2 [text="立即升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12534016',
    },
    {
      enable: false,
      key: 10,
      name: '请求开启通知提示信息',
      desc: '指定点击“暂不”',
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules:
        '@[text="暂不"][focusable=true] < LinearLayout - LinearLayout >(2) [text="开启朋友通知"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12675129',
    },
  ],
});
