import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: '[id="com.kuaishou.nebula:id/splash_skip_text"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12519389',
    },
    {
      key: 1,
      name: '青少年弹窗',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: '[id="com.kuaishou.nebula:id/positive"][text^="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13196316',
    },
  ],
});
