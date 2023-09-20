import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.netease.mail.ad.launch.ui.SplashAdActivity',
      rules: 'TextView[text*="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12667519',
    },
    {
      key: 1,
      name: '广告卡片',
      rules: [
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '@LinearLayout > TextView[text="广告"]',
          // need snapshot
        },
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '@FrameLayout > TextView[text="删除"]',
          // need snapshot
        },
      ],
    },
  ],
});
