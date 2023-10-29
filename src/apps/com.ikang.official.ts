import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ikang.official',
  name: '爱康约体检查报告',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.ikang.official.ui.AdvertActivity'],
      rules: [
        {
          matches: '[id="com.ikang.official:id/llAdvertCountdown"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13197061',
        },
      ],
    },
  ],
});
