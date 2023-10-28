import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qq.reader.activity.SplashActivity',
      rules: '[id="com.qq.reader:id/splash_container"] + [text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12811930',
    },
    {
      key: 2,
      name: '青少年弹窗',
      matchLauncher: true,
      rules: 'TextView[text="QQ阅读青少年模式"] +3 TextView[text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13194867',
    },
  ],
});
