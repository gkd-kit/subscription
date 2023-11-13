import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.welove520.welove',
  name: '微爱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击左上角【跳过】',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.welove520.welove:id/ksad_splash_circle_skip_view"]',
      snapshotUrls: 'https://i.gkd.li/import/13325131',
    },
  ],
});
