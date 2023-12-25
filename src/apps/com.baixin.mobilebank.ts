import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baixin.mobilebank',
  name: '百信银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@[id="com.baixin.mobilebank:id/ad_jump_layout"] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13765072',
        },
      ],
    },
  ],
});
