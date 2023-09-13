import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ai.obc.cbn.app',
  name: '中国广电',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      rules: [
        {
          matches: '[text*="跳过"]',
          snapshotUrls:
            'https://gkd-kit.gitee.io/import/22029832/3d58f8d5-bb6a-464a-88f7-5a27c5e0854c',
        },
      ],
    },
  ],
});
