import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.qqlive.ona.activity.SplashHomeActivity',
      rules: [
        {
          matches:
            'TextView[text*="互动广告"] < LinearLayout < FrameLayout + FrameLayout > TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700227',
        },
        {
          matches: 'TextView[text="广告"] LinearLayout + TextView[text="跳过"]',
        },
        {
          matches: '@[text="跳过"] - LinearLayout > [text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700122',
        },
        {
          matches:
            '@[text="跳过"] < FrameLayout - FrameLayout >(2) [text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700541',
        },
      ],
    },
    {
      key: 1,
      name: '关闭青少年弹窗',
      activityIds: [
        'com.tencent.qqlive.ona.update.trunk.client.TrunkUpdateActivity',
        'com.tencent.qqlive.ona.activity.SplashHomeActivity',
      ],
      rules:
        'TextView[text*="青少年模式"] +n TextView[id="com.tencent.qqlive:id/arg"][text="我知道了"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700145',
    },
    {
      key: 2,
      name: '更新弹窗',
      activityIds: [
        'com.tencent.qqlive.ona.update.trunk.client.TrunkUpdateActivity',
      ],
      rules:
        '@[text="暂不升级"] - LinearLayout > FrameLayout > [text="立即升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700486',
    },
    {
      key: 3,
      name: '首页-顶部广告卡片',
      desc: '自动点击“不感兴趣”',
      activityIds: ['com.tencent.qqlive.ona.activity.SplashHomeActivity'],
      rules: [
        {
          matches:
            'FrameLayout - RelativeLayout > RelativeLayout > FrameLayout + ImageView[clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12700299',
            'https://gkd-kit.gitee.io/import/12700302',
          ],
        },
        {
          matches: '[text="关闭广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12700518'],
        },
      ],
    },
    {
      key: 4,
      name: '片头广告',
      desc: '自动点击 跳过广告',
      activityIds: ['com.tencent.qqlive.ona.activity.VideoDetailActivity'],
      rules: [
        {
          matches: '[text="跳过广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12700407'],
        },
        {
          matches:
            '@ImageView < FrameLayout < FrameLayout +(2) LinearLayout >(3) [text$="跳过广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12700433'],
        },
      ],
    },
    {
      key: 5,
      name: '个人中心-广告卡片',
      desc: '自动点击“不感兴趣”',
      activityIds: ['com.tencent.qqlive.ona.activity.SplashHomeActivity'],
      rules:
        'ViewGroup > TextView + LinearLayout[childCount=2] + ImageView[clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700175',
    },
    {
      key: 19, // 配合应用内其他广告卡片使用，反馈界面的规则都是一样的
      name: '广告反馈卡片',
      desc: '自动点击 不感兴趣 -> 确定',
      rules: [
        {
          key: 1,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
          ],
          matches:
            '[text="关闭这条广告的原因"] +(2) RecyclerView > [text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700303',
        },
        {
          preKeys: [1],
          key: 2,
          activityIds: [
            'com.tencent.qqlive.qaduikit.common.dialog.feedback.variable.QAdFeedbackVariableDislikeItemDialog',
          ],
          matches:
            '[text="关闭这条广告的原因"] + [text="确认"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700210',
        },
      ],
    },
    {
      key: 20,
      name: '请求开启推送通知弹窗',
      desc: '自动点击“以后再说”',
      activityIds:
        'com.tencent.qqlive.ona.update.trunk.client.TrunkUpdateActivity',
      rules: 'LinearLayout > @[text="以后再说"] + [text="好的"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700139',
    },
  ],
});
