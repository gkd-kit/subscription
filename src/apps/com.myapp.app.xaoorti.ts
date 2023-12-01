import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.myapp.app.xaoorti',
  name: '天天视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.myapp.app.xaoorti:id/ksad_splash_circle_skip_view"]',
      snapshotUrls: 'https://i.gkd.li/import/13520474',
    },
  ],
});
