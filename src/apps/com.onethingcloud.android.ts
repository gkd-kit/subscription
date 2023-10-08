import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.onethingcloud.android.MainActivity',
      rules: 'View[desc ^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12841174',
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.onethingcloud.android.MainActivity',
      rules: 'ImageView[clickable=true][index=2]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12841171',
    },
  ],
});