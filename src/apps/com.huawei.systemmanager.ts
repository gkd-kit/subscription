import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.systemmanager',
  name: '华为手机管家',
  groups: [
    {
      key: 1,
      name: '风险提示-继续使用',
      rules: [
        {
          matches: '[id="com.huawei.systemmanager:id/virus_checkbox"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1704046524559',
            'https://i.gkd.li/snapshot/1704044291821',
          ],
        },
        {
          matches: '[id="android:id/button2"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1704046524559',
            'https://i.gkd.li/snapshot/1704044291821',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '移入管控-取消',
      rules: [
        {
          matches: '[id="android:id/button2"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1704044583264',
          ],
        },
      ],
    },
  ],
});
