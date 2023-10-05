import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.auto',
  name: '懂车帝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules: '[desc="跳过广告"][id!=null]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12605327',
    },
    {
      key: 1,
      name: '首页推荐卡片广告',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules: [
        {
          key: 0,
          matches:
            '[text="广告"] < LinearLayout + @FrameLayout[clickable=true][id!=null] > TextView[text.length=1][id=null][clickable=false]',
          // 貌似快照存在延迟导致屏幕与节点不对应
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12660816',
        },
        {
          preKeys: 1,
          matches:
            '[text$="精准屏蔽"] + [text="不感兴趣"][id!=null][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12711589',
        },
      ],
    },
    {
      key: 2,
      name: '升级弹窗',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules:
        '@TextView[text="以后再说"] - FrameLayout >2 TextView[text="立即\n升级"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12711631',
    },
    {
      key: 3,
      name: '首页直播推荐窗口',
      activityIds: 'com.ss.android.auto.activity.SplashActivity',
      rules: '[id="com.ss.android.auto:id/ahg"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12798338',
    },
    {
      key: 4,
      name: '文章底部广告',
      activityIds:
        'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
      rules:
        'TextView[text="广告"] - ImageView[id="com.ss.android.auto:id/d4m"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12811597',
    },
    {
      key: 5,
      name: '评论区广告',
      activityIds:
        'com.ss.android.article.base.feature.detail2.view.NewDetailActivity',
      rules:
        'TextView[text="广告"] <2 LinearLayout + ImageView[id="com.ss.android.auto:id/bzq"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12811459',
    },
  ],
});
