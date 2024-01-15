import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '@[text="以后再说"] + [text="立即更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13228520',
    },
    {
      key: 2,
      quickFind: true,
      name: '青少年模式',
      desc: '点击我知道了',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="android:id/buttonPanel"] >2 [text="知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13934995',
        },
      ],
    },
  ],
});
