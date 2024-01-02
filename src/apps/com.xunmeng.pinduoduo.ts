import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.MainFrameActivity'],
      rules: ['RelativeLayout > TextView[id!=null][text^="跳过"]'],
      snapshotUrls: ['https://i.gkd.li/import/12799632'],
    },
    {
      key: 1,
      name: '更新弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text*="新版本"] - ImageView < LinearLayout < LinearLayout + ImageButton[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642017',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@Image + Image +n [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13195645',
        },
      ],
    },
    {
      key: 2,
      name: '首页优惠弹窗',
      rules: [
        {
          key: 0,
          name: '首页优惠弹窗1',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'FrameLayout > FrameLayout > RelativeLayout[childCount=2] > @ImageView[id!=null][clickable=true][visibleToUser=true] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12642015',
        },
        {
          key: 1,
          name: '首页优惠弹窗2',
          activityIds: [], // 暂时用[]，后续补充activityIds
          matches:
            'View[id=null] > TextView + View > View +(4) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642019',
        },
        {
          key: 2,
          name: '首页优惠弹窗3',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView < ViewGroup[clickable=true][visibleToUser=true] < ViewGroup + ViewGroup >n [text="开心收下"]',
          snapshotUrls: 'https://i.gkd.li/import/13761182',
        },
      ],
    },
    {
      key: 3,
      name: '活动弹窗',
      rules: [
        {
          key: 0,
          name: '抽免单活动1',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text="免单特权"] < View < View +(5) View[clickable=true] > Image[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12642032',
        },
        {
          key: 1,
          name: '抽免单活动2',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text$="抽免单"] -(2) Image[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642038',
        },
        {
          key: 2,
          name: '下单后追加订单',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '@[text="关闭弹窗"][clickable=true] + [text$="下单成功"]',
          snapshotUrls: 'https://i.gkd.li/import/13308175',
        },
      ],
    },
    {
      key: 4,
      name: '红包弹窗',
      rules: [
        {
          key: 0,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup > ImageView + ViewGroup > ImageView +(2) FrameLayout > TextView[text="专属现金红包"]',
          snapshotUrls: 'https://i.gkd.li/import/12642023',
        },
        {
          key: 1,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          quickFind: true,
          matches:
            '@ImageView[clickable=true] < ViewGroup + ViewGroup >n [text="送你大额现金"]',
          snapshotUrls: 'https://i.gkd.li/import/13625441',
        },
        {
          key: 2,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text="百亿补贴"] > View > View > @View[clickable=true] +n [text^="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/import/13669963',
        },
      ],
    },
    {
      enable: false,
      key: 5,
      name: '多多买菜抽奖弹窗',
      activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
      rules: ['[id=null][text="关闭弹窗"][clickable=true]'],
      snapshotUrls: ['https://i.gkd.li/import/12642053'],
    },
    {
      key: 6,
      name: '多多视频悬浮窗广告',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
        '@TextView[id=null][clickable=true] + View > Image[text="webp"]',
      ],
      snapshotUrls: ['https://i.gkd.li/import/12642058'],
    },
    {
      enable: false,
      key: 7,
      name: '多多视频每日签到弹窗',
      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        '[text="领取今日现金"] <<n ViewGroup[index=2] -2 ViewGroup[clickable=true] >2 ImageView',
      ],
      snapshotUrls: ['https://i.gkd.li/import/13804494'],
    },
    {
      enable: false,
      key: 8,
      name: '商品详情页视频讲解窗口',
      activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
      rules: '[id="com.xunmeng.pinduoduo:id/iv_float_window_close"] > TextView',
      snapshotUrls: 'https://i.gkd.li/import/13178326',
    },
    {
      enable: false,
      key: 9,
      name: '多多视频每日自动签到',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,

      activityIds: ['com.xunmeng.pinduoduo.ui.activity.HomeActivity'],
      rules: [
        {
          key: 0,
          name: '自动签到',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="领取今日现金"]'],
          snapshotUrls: [
            'https://i.gkd.li/import/13201422', //com.xunmeng.pinduoduo.ui.activity.HomeActivity
            'https://i.gkd.li/import/13372677', //com.bbk.launcher2.Launcher
          ],
        },
        {
          key: 1,
          preKeys: [0],
          name: '在签到后关闭弹窗',
          action: 'clickCenter',
          matches: ['FrameLayout > TextView[text="明日继续来领"]'],
          snapshotUrls: 'https://i.gkd.li/import/13205634',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '多多视频-划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ImageView[desc="返回"] -3 ViewPager >19 TextView[text="正在直播"]',
          snapshotUrls: 'https://i.gkd.li/import/13446291',
        },
      ],
    },
    {
      key: 11,
      name: '多多视频-上滑看视频得现金弹窗',
      desc: '点击关闭',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '[text="上滑看视频得现金"] - [text="webp"]',
          snapshotUrls: 'https://i.gkd.li/import/13809053',
        },
      ],
    },
    {
      key: 12,
      name: '青少年模式',
      desc: '点击我知道了',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '[text="青少年模式"] < FrameLayout +5 ViewGroup [text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13809053',
        },
      ],
    },
  ],
});
