import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.able.wisdomtree',
  name: '知到',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds:
        'com.example.advertisement_business.advertisement.AdvertisementActivity',
      rules: [
        {
          matches: [
            'FrameLayout > @TextView[id="com.able.wisdomtree:id/tv_skip"][text^="跳过"]',
          ],
          snapshotUrls: 'https://gkd-kit.songe.li/import/12838048',
        },
      ],
    },
  ],
});
