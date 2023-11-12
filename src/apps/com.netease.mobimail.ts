import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mobimail',
  name: '网易邮箱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '开屏广告-0',
          matches: '[id="com.netease.mobimail:id/ad_skip"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12667519',
            'https://i.gkd.li/import/13328425', // 限定 [clickable=true] 防止误触假的跳过按钮
          ],
        },
        {
          key: 1,
          name: '开屏广告-1',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12686093',
        },
        {
          key: 2,
          name: '开屏广告-2',
          matches:
            '[id="com.netease.mobimail:id/ad_placeholder"] >5 TextView[text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12686132',
        },
        {
          key: 3,
          name: '开屏广告-3',
          quickFind: true,
          matches:
            '[id="com.netease.mobimail:id/anythink_myoffer_splash_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13328441',
        },
      ],
    },
    {
      key: 1,
      name: '邮件列表页面广告条目',
      rules: [
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '[id="com.netease.mobimail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/import/12683488',
        },
        {
          activityIds: 'com.netease.mail.biz.main.MainITabActivity',
          matches: '[id="com.netease.mobimail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/import/12683511',
        },
      ],
    },
    {
      key: 2,
      name: '切回时的开屏广告',
      activityIds: 'com.netease.mail.biz.main.MainITabActivity',
      rules: '@LinearLayout > TextView[text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12685745',
    },
  ],
});
