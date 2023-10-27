import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cgbchina.xpt',
  name: '广发银行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cgb.mobilebank.sit.launcher.module.main.activity.IndexActivity_',
      rules: '[text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/13189690']
    },
  ],
});
