import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tbc.android.defaults',
  name: '云端学习',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.tbc.android.defaults.MainActivity'],
      rules: [
        {
          matches:
            '[id="com.tbc.android.defaults:id/ivLoginAdImg"] + [id="com.tbc.android.defaults:id/tvLoginAdSkip"][text="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12685253'],
        },
      ],
    },
  ],
});
