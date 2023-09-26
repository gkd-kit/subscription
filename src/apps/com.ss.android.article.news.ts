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
      desc: '点击右上角[更多]图标按钮,出现菜单,点击不感兴趣',
      activityIds: 'com.ss.android.ugc.detail.activity.TikTokActivity',
      rules: [
        {
          key: 0,
          name: '点击右上角[更多]图标按钮',
          matches:
            '@ImageView[clickable=true][desc="更多"] <3 RelativeLayout -2 RelativeLayout >4 FlattenUIText[desc="查看商品"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12679280',
        },
        {
          preKeys: 0,
          name: '点击不感兴趣',
          matches:
            '@LinearLayout[clickable=true] > RelativeLayout + TextView[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12679277',
        },
      ],
    },
  ],
});
