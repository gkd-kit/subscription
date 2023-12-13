import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coloros.gallery3d',
  name: '相册',
  groups: [
    {
      key: 1,
      name: '更新提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.coloros.gallery3d.app.MainActivity',
          matches: '[text="更新"] -2 [text="取消"]',
          exampleUrls:
            'https://m.gkd.li/47232102/0dae9f4b-8432-4cf4-b648-07ae17cdece2',
          snapshotUrls: 'https://i.gkd.li/import/13554797',
        },
      ],
    },
    {
      key: 6,
      name: '开启相册同步弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.coloros.gallery3d.app.MainActivity',
      rules: '[text="开启相册自动同步，保障相册数据安全"] + [text="忽略"]',
      snapshotUrls: 'https://i.gkd.li/import/13637185',
    },
  ],
});
