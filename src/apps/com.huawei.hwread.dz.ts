import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.hwread.dz',
  name: '华为阅读',
  groups: [
   {
    key: 0,
    name: '华为阅读开屏广告',
    desc: '之前的格式好像不一样，这个action需要改为clickCenter，通过id包含skip匹配',
    quickFind: true,
    matchTime: 10000,
    actionMaximum: 1,
    resetMatch: 'app',  
    rules: [
      {
        activityIds: 'com.huawei.reader.launch.impl.splash.SplashScreenActivity',
        matches: '@TextView[id*="skip"]',
        exampleUrls: 'https://m.gkd.li/12554855/d04f323a-ae28-44db-8a5c-6514e5600a22',
        snapshotUrls: 'https://i.gkd.li/import/13784963',
        action:'clickCenter'
      },
    ],
  },
  ],
});
