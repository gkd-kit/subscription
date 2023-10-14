import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.banjixiaoguanjia.app',
  name: '班级小管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.zero.flutter_gromore_ads.page.AdSplashActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12904614',
    },
  ],
});
