import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hypergryph.skland',
  name: '森空岛',
  groups: [
    {
      key: 1,
      name: '青少年模式弹窗',
      activityIds: ['com.hypergryph.skland.MainActivity'],
      rules: [
        {
          matches: '[id="com.hypergryph.skland:id/confirmTv"]',
          snapshotUrls: 'https://i.gkd.li/import/13197012',
        },
      ],
    },
  ],
});
