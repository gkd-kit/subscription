import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinaunicom.bol.cloudapp',
  name: '联通云盘',
  groups: [
    {
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          matches: '@[text="取消"] < * + * > [text="立即下载"]',
          snapshotUrls: 'https://i.gkd.li/import/13998612',
        },
      ],
    },
  ],
});
