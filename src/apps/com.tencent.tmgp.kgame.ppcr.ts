import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.tmgp.kgame.ppcr',
  name: '全民泡泡超人',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchLauncher: true,
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.tencent.ysdkcore:id/com_tencent_ysdk_icon_h5_xx"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/13276317'],
        },
      ],
    },
  ],
});
