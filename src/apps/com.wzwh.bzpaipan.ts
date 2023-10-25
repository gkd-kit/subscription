import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wzwh.bzpaipan',
  name: '问真八字排盘',
  groups: [
    {
      key: 3,
      name: '全屏广告',
      quickFind: true,
      activityIds: 'com.qq.e.ads.PortraitADActivity',
      rules: 'ImageView[clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13162912',
    },
  ],
});
