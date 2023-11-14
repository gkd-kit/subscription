import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'mo.gov.dsat.bis',
  name: '巴士報站',
  groups: [
    {
      key: 1,
      name: '歡迎頁',
      matchTime: 10000,
      quickFind: true,
      activityIds: 'com.gov.dsat.activity.WelcomeActivity',
      rules: '[id="mo.gov.dsat.bis:id/skipBtn"]',
      snapshotUrls: 'https://i.gkd.li/import/13350002',
    },
  ],
});
