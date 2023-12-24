import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.example.pptv',
  name: '人人视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13669401',
        },
        {
          key: 1,
          matches: '[id="com.example.pptv:id/view_count_shake"]',
          snapshotUrls: 'https://i.gkd.li/import/13761160',
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="我知道了"] - * > [text="未成年模式"]',
      snapshotUrls: 'https://i.gkd.li/import/13761159',
    },
  ],
});
