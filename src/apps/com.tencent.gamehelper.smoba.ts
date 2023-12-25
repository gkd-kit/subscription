import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.gamehelper.smoba',
  name: '王者营地',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][id="com.tencent.gamehelper.smoba:id/count_down"]',
      snapshotUrls: 'https://i.gkd.li/import/13766649',
    },
  ],
});
