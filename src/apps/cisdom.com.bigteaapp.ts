import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cisdom.com.bigteaapp',
  name: '大茶肆',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
      rules: '@[id="cisdom.com.bigteaapp:id/close"] + * > [text$="抽奖送大礼"]',
      snapshotUrls: 'https://i.gkd.li/import/13228579',
    },
  ],
});
