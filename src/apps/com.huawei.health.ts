import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.health',
  name: '华为运动健康',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.huawei.health.MainActivity'],
      rules: [
        {
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12667766'],
        },
      ],
    },
  ],
});
