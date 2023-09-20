import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.weaver.emobile7',
  name: 'EMobile7',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'weaver.fw.com.MainActivity',
      rules: [
        {
          matches: '@[text="取消"] +(2) [text="更新"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673154'],
        },
      ],
    },
  ],
});
