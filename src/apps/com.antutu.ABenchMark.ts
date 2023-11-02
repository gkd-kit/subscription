import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.antutu.ABenchMark',
  name: '安兔兔评测',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.antutu.ABenchMark:id/ksad_splash_circle_skip_left_view"]',
      snapshotUrls: 'https://i.gkd.li/import/13233875',
    },
  ],
});
