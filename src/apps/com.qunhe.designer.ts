import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qunhe.designer',
  name: '酷家乐设计师',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.qunhe.designer.ui.main.MainActivity'],
      rules: [
        {
          matches: '[id="com.qunhe.designer:id/skip"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13226570', //获取链接的方法在上一步有说明
        },
        {
          matches: '[text*="跳过"][text.length<=5]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13234598',
        },
      ],
    },
  ],
});
