import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.craftvpn.craft',
  name: '小牛加速器',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击X',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '@View[index=0][clickable=true] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/import/13914788',
        },
      ],
    },
  ],
});
