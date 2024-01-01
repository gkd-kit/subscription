import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.wemeet.app',
  name: '腾讯会议',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13752865',
        },
      ],
    },
    {
      key: 1,
      name: '加时卡到账弹窗',
      desc: '自动点击关闭',
      rules: [
        {
          activityIds:
            'com.tencent.wemeet.sdk.meeting.premeeting.home.HomeOperateAlertActivity',
          matches: '[id="com.tencent.wemeet.app:id/dp"]',
          snapshotUrls: 'https://i.gkd.li/import/13804553',
        },
      ],
    },
  ],
});
