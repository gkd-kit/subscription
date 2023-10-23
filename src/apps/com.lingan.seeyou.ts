import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lingan.seeyou',
  name: '美柚',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.meetyou.crsdk.CROpenScreenNewActivity'],
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13065769',
        },
      ],
    },
  ],
});
