import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: '[id="com.smile.gifmaker:id/splash_skip_text"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12708602',
    },
    {
      key: 0,
      name: '关闭青少年弹窗',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules:
        '@[id=`com.smile.gifmaker:id/positive`] + [id=`com.smile.gifmaker:id/set_teenage_mode`]',
    },
  ],
});
