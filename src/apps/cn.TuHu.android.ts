import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.TuHu.android',
  name: '途虎养车',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.TuHu.android:id/rl_activity_welcome_jump"]',
      snapshotUrls: 'https://i.gkd.li/import/12846408',
    },
  ],
});
