import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cloudbae.lovenanning',
  name: '爱南宁',
  groups: [
    {
      enable: false, //是官方的宣传，默认关闭
      key: 0,
      name: '开屏',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.cloudbae.lovenanning:id/ad_skip"][text*="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13766538',
    },
  ],
});
