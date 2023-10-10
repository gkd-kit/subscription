import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jincheng.supercaculator',
  name: '全能计算器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jincheng.supercaculator.activity.MainActivity',
      rules: '[id = "com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12859492',
    },
  ],
});
