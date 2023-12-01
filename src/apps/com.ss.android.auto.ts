import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.auto',
  name: '懂车帝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc="跳过广告"]',
      snapshotUrls: 'https://i.gkd.li/import/12605327',
    },
    {
      enable: false,
      key: 1,
      name: '信息流广告',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules: [
        {
          key: 0,
          name: '点击x按钮',
          matches:
            '[text="广告"] < LinearLayout + @FrameLayout[clickable=true][id!=null] > TextView[text.length=1][id=null][clickable=false]',
          // 貌似快照存在延迟导致屏幕与节点不对应
          snapshotUrls: 'https://i.gkd.li/import/12660816',
        },
        {
          preKeys: 0,
          key: 1,
          matches: 'RelativeLayout > [text="不感兴趣"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12711589',
        },
        {
          preKeys: 1,
          key: 0,
          matches: '@ViewGroup > LinearLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13519924',
        },
      ],
    },
    {
      key: 2,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="以后再说"] - * >2 [text$="升级"]',
      snapshotUrls: 'https://i.gkd.li/import/12711631',
    },
    {
      key: 3,
      name: '首页直播推荐窗口',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules:
        '@ImageView[clickable=true][id!=null] - RelativeLayout >4 [id="com.ss.android.auto:id/at1"][text="特价抢购"]',
      snapshotUrls: 'https://i.gkd.li/import/12798338',
    },
    {
      key: 4,
      name: '文章底部广告',
      activityIds:
        'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
      rules:
        '@ImageView[clickable=true] <2 RelativeLayout[childCount=4][id!=null] > TextView[text="广告"][id!=null]',
      snapshotUrls: 'https://i.gkd.li/import/12811597',
    },
    {
      key: 5,
      name: '评论区广告',
      activityIds: [
        'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
        'com.ss.android.auto.ugc.video.activity.UgcLongPostActivity',
        'com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity',
      ],
      rules:
        'RelativeLayout[childCount=5][id=null] > @ImageView[clickable=true][id!=null] - LinearLayout[childCount=2][id!=null] > TextView[text="广告"][id!=null]',
      snapshotUrls: [
        'https://i.gkd.li/import/12811459',
        'https://i.gkd.li/import/12825865',
        'https://i.gkd.li/import/12900666',
      ],
    },
    {
      key: 6,
      name: '请求推送通知弹窗',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules:
        '@TextView[clickable=true && text.length =1] + [text ^="打开推送通知"]',
      snapshotUrls: 'https://i.gkd.li/import/12840664',
    },
  ],
});
