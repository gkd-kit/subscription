import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.daai.netcheck',
  name: '网络万用表',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'org.daai.netcheck.MainActivity',
      rules: [
        {
          matches: 'TextView[text*="点击跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12779230',
        },
      ],
    },
  ],
});
