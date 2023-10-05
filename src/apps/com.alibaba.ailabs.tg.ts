import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.alibaba.ailabs.tg',
  name: '天猫精灵',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alibaba.ailabs.tg.splash.WelcomeActivity',
      rules: '[id="com.alibaba.ailabs.tg:id/fl_ad"] >n [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12814080',
    },
  ],
});
