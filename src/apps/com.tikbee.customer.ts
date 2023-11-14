import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tikbee.customer',
  name: '閃蜂',
  groups: [
    {
      key: 1,
      name: '開屏廣告',
      matchTime: 10000,
      quickFind: true,
      activityIds: 'com.tikbee.customer.mvp.view.UI.StartUpActivity',
      rules: '[id="com.tikbee.customer:id/skip_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13350836',
    },
  ],
});
