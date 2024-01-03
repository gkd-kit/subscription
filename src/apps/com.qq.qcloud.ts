import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qq.qcloud',
  name: '腾讯微云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[id="com.qq.qcloud:id/gdt_ad_text"] + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12755789',
        },
        {
          key: 1,
          matches:
            '[text^="互动广告"] + @LinearLayout[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12755799',
        },
      ],
    },
  ],
});
