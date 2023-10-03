import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches:
            '[id="android:id/tabhost"] >(3) [text="跳过广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12684954'],
        },
        {
          key: 1,
          name: '开屏广告',
          matches: 'FrameLayout[desc*=\'广告\']',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12754759'],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.ss.android.mine.BaseSettingActivity'],
      rules: [
        {
          matches: '[text="升级版本"] + [desc="关闭"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12685000'],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      activityIds: ['com.ss.android.article.news.activity.MainActivity'],
      rules: [
        {
          matches: '[text^="开启通知"] + LinearLayout > [text="暂不开启"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12706699'],
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '竖屏视频广告',
      desc: '检测到广告时，点击右上角[更多]图标按钮,出现菜单,点击不感兴趣',
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
        {
          key: 0,
          name: '点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text*="头条优惠券"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12679280',
            'https://gkd-kit.gitee.io/import/12733282',
            'https://gkd-kit.gitee.io/import/12763251',
            'https://gkd-kit.gitee.io/import/12763252',
          ],
        },
        {
          key: 1,
          name: '点击右上角[更多]图标按钮-抖音直播',
          matches:
            '@ImageView[clickable=true][desc="更多"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$="广告"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12733281'],
        },
        {
          preKeys: [0, 1],
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12679277',
        },
      ],
    },
    {
      enable: false,
      key: 12,
      name: '信息流广告',
      desc: '点击右上角x按钮,点击不感兴趣',
      activityIds: 'com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity',
      rules: [
        {
          name: '点击右上角x按钮',
          key: 0,
          matches:
            'FlattenUIText[text^="广告"][text.length=4] -n UIView[desc*="不感兴趣"][clickable=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12733098',
            'https://gkd-kit.gitee.io/import/12790324',
          ],
          exampleUrls: [
            'https://github.com/gkd-kit/subscription/assets/44717382/1ea572a3-1fcc-49c7-a3d6-c9de4e7a1f63',
          ],
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          matches:
            '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12733152', ''],
        },
      ],
    },
    {
      enable: false,
      key: 13,
      name: '信息流-抖音直播广告',
      desc: '点击右上角x按钮,点击不感兴趣',
      activityIds: 'com.ss.android.article.news.activity.MainActivity',
      rules: [
        {
          name: '点击右上角x按钮',
          key: 0,
          matches:
            'LynxFlattenUI[text*="来自抖音"][text.length=6] -n UIView[desc="不感兴趣"][clickable=true]',
          action: 'clickCenter',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12755264',
        },
        {
          name: '点击不感兴趣',
          preKeys: 0,
          matches:
            '@ViewGroup[clickable=true] > ImageView + TextView[text="不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12755265',
        },
      ],
    },
  ],
});
