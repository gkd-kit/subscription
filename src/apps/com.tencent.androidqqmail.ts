import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.androidqqmail',
  name: 'QQ邮箱',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.tencent.qqmail.launcher.desktop.LauncherActivity',
      rules: 'RelativeLayout > ImageView[id!=null] + ImageView[id!=null]',
      snapshotUrls: 'https://i.gkd.li/import/12775855',
    },
    {
      key: 0,
      name: '广告邮件-列表卡片广告',
      quickFind: true,
      activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
      rules: [
        {
          key: 0,
          name: '英文版邮箱广告-点击Ads',
          matches: ['[id="com.tencent.androidqqmail:id/advertise_view_ad"]'],
          snapshotUrls: 'https://i.gkd.li/import/12842757',
        },
        {
          name: '英文版邮箱广告-点击Not interested',
          preKeys: [0],
          matches: '@FrameLayout > TextView[text="Not interested"]',
          snapshotUrls: 'https://i.gkd.li/import/12842775',
        },
        {
          key: 1,
          name: '点击[广告]',
          matches:
            'LinearLayout > TextView + @LinearLayout[id!=null][clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12775857',
        },
        {
          key: 9,
          name: '点击[不感兴趣]',
          matches:
            '[text="赞助商提供的广告"] < FrameLayout + @FrameLayout > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/12775862',
        },
      ],
    },
    {
      key: 1,
      name: '开启通知提醒',
      enable: false,
      quickFind: true,
      activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
      rules: [
        {
          matches: '[text="立刻开启"] - [text="以后再说"]',
          snapshotUrls: ['https://i.gkd.li/import/13043069'],
        },
      ],
    },
  ],
});
