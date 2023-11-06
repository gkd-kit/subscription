import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.sbyd.app',
  name: '轻松阅',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text="跳过"][text.length<10]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13261949',
        },
      ],
    },
    {
      key: 0,
      name: '弹窗',
      activityIds: 'io.sbyd.app.ui.book.read.ReadBookActivity',
      rules: [
        {
          matches: ['[text^="京东"]', '[_id=20]'],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13261949',
        },
      ],
    },
  ],
});
