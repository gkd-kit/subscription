import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.newsreader.activity',
  name: '网易新闻',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.netease.nr.biz.ad.newAd.AdActivity',
      rules: '[text="广告"] < LinearLayout - LinearLayout > [text="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12639864',
    },
    {
      key: 1,
      name: '版本更新弹窗',
      activityIds:
        'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
      rules: '[text$="版本更新了"] +(2) RelativeLayout > [text="稍后再说"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12639884',
    },
    {
      key: 2,
      name: '开启系统推送弹窗',
      activityIds:
        'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
      rules:
        '[text*="开启系统推送"] - ImageView < * < * < FrameLayout + FrameLayout >(3) Button[text="暂不开启"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12639800',
    },
    {
      key: 3,
      name: '开启系统推送提示信息',
      activityIds:
        'com.netease.newsreader.common.base.activity.SingleFragmentActivity',
      rules:
        '[text^="打开推送"] +(2) RelativeLayout > ImageView',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12639869',
    },
    {
      enable: false,
      key: 4,
      name: '首页信息流广告',
      desc: '点击广告卡片x关闭按钮-关闭反馈理由弹窗',
      activityIds: 'com.netease.nr.phone.main.MainActivity',
      rules: [
        {
          preKeys: [1],
          name: '首页信息流广告-反馈理由',
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12639752',
        },
        {
          key: 1,
          matches: 
            'FrameLayout[childCount=1] >5 TextView[text="广告"] +2 ImageView[clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12639751',
        },
      ],
    },
  ],
});
