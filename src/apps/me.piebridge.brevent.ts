import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'me.piebridge.brevent',
  name: '黑阈',
  groups: [
    {
      key: 1,
      name: '权限不足',
      activityIds: ['me.piebridge.brevent.ui.BreventActivity'],
      rules: [
        {
          matches: '[id=`android:id/button2`][text=`取消`]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13218439',
        },
      ],
    },
  ],
});
