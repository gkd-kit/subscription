import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.magicalstory.AppStore',
  name: '奇妙应用',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.magicalstory.AppStore.ad.SplashActivity',
      rules: 'TextView[text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13191546',
    },
  ],
});
