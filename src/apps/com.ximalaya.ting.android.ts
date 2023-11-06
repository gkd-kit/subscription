import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[id="com.ximalaya.ting.android:id/xm_ad_host_count_down_click_lay"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12506207',
            'https://gkd-kit.gitee.io/import/12506273',
          ],
        },
        {
          matches:
            'TextView[text^="跳过"] < @LinearLayout +3 TextView[text^="跳转详情"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12877937'],
        },
      ],
    },
    {
      key: 0,
      name: '首页右侧浮动广告',
      quickFind: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: '[id="com.ximalaya.ting.android:id/main_ad_broadside_close_real"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12472620'],
    },
    {
      key: 1,
      name: '播放页面-播放控制区域的广告',
      quickFind: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
        {
          key: 0,
          name: '暂停按钮下方的广告',
          matches:
            '[id="com.ximalaya.ting.android:id/x_play_ad_banner_close_real"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506218',
        },
        {
          key: 1,
          name: '喜马小游戏广告',
          matches: '[id="com.ximalaya.ting.android:id/host_game_close_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/12927110',
        },
      ],
    },
    {
      key: 2,
      name: '播放页面-底部推荐列表-夹杂广告',
      desc: '点击关闭-点击屏蔽',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.ximalaya.ting.android.main.dialog',
          matches: '@[clickable=true] > [text="屏蔽"] + [text="关闭当前广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506269',
        },
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '[id="com.ximalaya.ting.android:id/main_mark_text"] + [id="com.ximalaya.ting.android:id/main_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12506225',
            'https://gkd-kit.gitee.io/import/12701414', // 关闭广告后，控件仍然存在但不可见，使用 visibleToUser=true 进行限定，防止关闭之后继续触发规则
          ],
        },
      ],
    },
    {
      key: 3,
      name: '播放页面-播放前广告',
      quickFind: true,
      activityIds: [
        'com.ximalaya.ting.android.host.activity.MainActivity',
        'com.ximalaya.ting.android.framework.view.dialog',
      ],
      rules: '[id="com.ximalaya.ting.android:id/main_play_ad_close_real"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12506250',
        'https://gkd-kit.gitee.io/import/12520626',
      ],
    },
    {
      key: 4,
      name: '首页-推荐列表广告',
      desc: '点击关闭-点击屏蔽',
      rules: [
        {
          activityIds:
            'com.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog',
          matches:
            '[id="com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_shield"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506258',
        },
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches: '[id="com.ximalaya.ting.android:id/xm_ad_close_real"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506253',
        },
        {
          activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
          matches:
            '[id="com.ximalaya.ting.android:id/main_ad_dynamic_lay"] >(4) ImageView + ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12701374',
        },
      ],
    },
    {
      key: 5,
      name: '关闭热播推荐广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules: [
        {
          matches: '[text="热播推荐"] + ImageView + ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12506270',
          // 点击后出现 com.ximalaya.ting.android.main.dialog 弹窗
        },
      ],
    },
    {
      key: 6,
      name: '关闭更新弹窗',
      quickFind: true,
      rules: '[id="com.ximalaya.ting.android:id/host_tv_update_later"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12506287',
    },
    {
      key: 7,
      name: '关闭青少年模式弹窗',
      quickFind: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12506209',
      rules: {
        matches: [
          '[text*="青少年模式"][id="com.ximalaya.ting.android:id/host_btn_set"]',
          '[id="com.ximalaya.ting.android:id/host_dialog_close"]',
        ],
      },
    },
    {
      key: 8,
      name: '评论区广告',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      quickFind: true,
      rules:
        '[id="com.ximalaya.ting.android:id/main_ad_close_real"][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/import/12869426',
    },
    {
      key: 9,
      enable: false,
      name: '我的-中间卡片式广告',
      desc: '点击图片中【x】,原因选【不感兴趣】',
      activityIds: [
        'com.ximalaya.ting.android.host.activity.MainActivity',
        'om.ximalaya.ting.android.adsdk.view.DislikeDialog.DislikeBottomDialog',
      ],
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.ximalaya.ting.android:id/main_close_layout"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13194838',
        },
        {
          preKeys: 0,
          matches:
            '[id="com.ximalaya.ting.android:id/xm_ad_main_ad_dislike_un_interest_title"][text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13194839',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '首页-专辑订阅推荐弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules:
        '[text="你可能感兴趣的专辑"] + [id="com.ximalaya.ting.android:id/main_iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13251713',
    },
    {
      key: 11,
      name: '弹窗广告',
      quickFind: true,
      activityIds: 'com.ximalaya.ting.android.host.activity.MainActivity',
      rules:
        '@[id="com.ximalaya.ting.android:id/host_close_firework"] +2 [id="com.ximalaya.ting.android:id/host_firework_ad_tag"]',
      snapshotUrls: 'https://i.gkd.li/import/13263421',
    },
  ],
});
