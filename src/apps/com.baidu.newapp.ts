import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.newapp',
  name: '文心一言',
  groups: [
    {
      key: 1,
      name: '升级提示',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text="立即更新"] + [text="暂不升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13360280',
        },
      ],
    },
  ],
});
