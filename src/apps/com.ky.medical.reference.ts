import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ky.medical.reference',
  name: '用药参考',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.ky.medical.reference.activity.InitActivity',
      rules: '[id= "com.ky.medical.reference:id/btn_go"][text ^= "关闭"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12918049',
    },
  ],
});
