import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hanweb.android.zhejiang.activity',
  name: '浙里办',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.alibaba.gov.android.welcome.activity.DefaultWelcomeActivity',
      rules: 
        '[id="com.hanweb.android.zhejiang.activity:id/gov_splash_tv_count_down"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12913138',
    },
  ],
});