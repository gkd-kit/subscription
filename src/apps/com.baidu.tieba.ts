import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      //quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '【跳过+倒计时】型',
          matches: 'TextView[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775906',
            'https://i.gkd.li/import/12566191',
            'https://i.gkd.li/import/12870916',
            'https://i.gkd.li/import/13233500',
          ],
        },
        {
          key: 1,
          name: '【圆圈跳过】型-来自穿山甲SDK',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13322227',
        },
        {
          key: 2,
          name: '【x+关闭】型',
          matches:
            'TextView[text="广告"] - @LinearLayout[clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13168386',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '信息流广告',
      desc: '像正常内容的广告,关闭时弹窗选原因',
      activityIds: [
        'com.baidu.tieba.pb.pb.main.PbActivity',
        'com.baidu.tieba.frs.FrsActivity',
        'com.baidu.tieba.tblauncher.MainTabActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告【x】',
          matches: [
            // 'TextView[text$="广告"]',
            'RelativeLayout > TextView[clickable=true][text$="广告"]',
            // 'LinearLayout[childCount=1] > @FrameLayout[clickable=true][childCount=1][visibleToUser=true] > ImageView',
            'LinearLayout[childCount=1] > @FrameLayout[clickable=true][childCount=1] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12775930',
            'https://i.gkd.li/import/12840951',
            'https://i.gkd.li/import/12775913', // 此3条应算卡片式广告
            'https://i.gkd.li/import/13043133', // 此3条应算卡片式广告
            'https://i.gkd.li/import/13054256', // 此3条应算卡片式广告
            'https://i.gkd.li/import/12775916',
            'https://i.gkd.li/import/12775892', // 指定点击目标为具备 clickable=true 属性的 @FrameLayout，防止在这个快照误触点击收藏
          ],
        },
        {
          preKeys: 0,
          name: '关闭原因-【不感兴趣】',
          matches:
            '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
          snapshotUrls: 'https://i.gkd.li/import/12775914',
        },
      ],
    },
    {
      key: 3,
      name: '首页-推荐-列表顶部卡片式广告',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13060892',
        },
      ],
    },
    {
      key: 7,
      name: '升级弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.baidu.tieba.UpdateDialog',
      rules: '[text="稍后再说"]',
      snapshotUrls: 'https://i.gkd.li/import/12496934',
    },
    {
      enable: false,
      key: 8,
      name: '帖子底部内容推荐卡片',
      desc: '关闭时弹窗选原因',
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules: [
        {
          key: 0,
          matches:
            'LinearLayout > RelativeLayout > ImageView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12775882',
        },
        {
          preKeys: 0,
          name: '关闭原因-不感兴趣',
          matches:
            '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
          snapshotUrls: 'https://i.gkd.li/import/12775914',
        },
      ],
    },
    {
      key: 9,
      name: '应用内广告弹窗',
      matchLauncher: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '点击右上角x关闭',
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          matches:
            'View[childCount=3] > @View[clickable=true][childCount=1] > Image',
          snapshotUrls: [
            'https://i.gkd.li/import/13060891', // activityIds: com.baidu.tbadk.browser.TBWebContainerActivity
            'https://i.gkd.li/import/13222361', // childCount=1否则误触这里
          ],
        },
        {
          key: 1,
          name: '点击正下方x关闭',
          activityIds: [
            'com.baidu.tieba.frs.FrsActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
            '@TextView[clickable=true && text=null] - FrameLayout TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13168383', // activityIds: com.baidu.tieba.tblauncher.MainTabActivity
            'https://i.gkd.li/import/13322120', // activityIds: com.miui.home.launcher.Launcher
          ],
        },
      ],
    },
    {
      key: 10,
      name: '悬浮小广告',
      matchDelay: 5000,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '首页右侧悬浮广告',
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            '@ImageView[clickable=true] - TextView[text="广告"] < RelativeLayout + ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13115167',
            'https://i.gkd.li/import/13327933', // 原规则在此误触
          ],
        },
        {
          key: 1,
          name: '评论区左侧悬浮广告',
          quickFind: true,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches: 'LinearLayout[childCount=2] > @ImageView + [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13296280',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '吧内-悬浮卡通-进吧逛逛',
      actionMaximum: 1,
      resetMatch: 'activity',
      rules:
        '[text="看到这了，进吧逛逛呗"] < LinearLayout + LinearLayout ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13322337',
    },
  ],
});
