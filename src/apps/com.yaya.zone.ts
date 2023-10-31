import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yaya.zone',
  name: '叮咚买菜',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'cn.me.android.splash.activity.SplashActivity',
      rules: [
        {
          matches: '[id="com.yaya.zone:id/tv_skip"][text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13215214',
        },
      ],
    },
  ],
});
