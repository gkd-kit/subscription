import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jd.iots',
  name: '京喜小家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.jd.smart.activity.GuideActivity',
      rules: 'TextView[text*="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12779119',
    },
  ],
});
