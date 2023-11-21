import {defineAppConfig} from '../types';

export default defineAppConfig({
  id: 'com.netease.xyqcbg',
  name: '梦幻藏宝阁',
  groups: [
    {
      enable: false,
      key: 1,
      name: '开屏广告跳过',
      activityIds: 'com.netease.cbg.activities.LoadingActivity',
      rules: '[id="com.netease.xyqcbg:id/tv_cbg_launch_skip"]',
    },
    {
      enable: false,
      key: 2,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      name: '回流福利窗口跳过',
      rules: '[id="com.netease.xyqcbg:id/iv_close"]',
    },
  ],
});
