import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babycloud.hanju',
  name: '韩小圈',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'com.babycloud.hanju.ui.activity.HanjuHomeActivity',
      ],
      rules: [
        {
           matches: '[text*="跳过"][text.length<=5]',
           snapshotUrls: 'https://gkd-kit.gitee.io/import/13234983',
        }
      ],
    },
  ],
});
