import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pandabus.yinchuan',
  name: '银川行',
  groups: [
    {
      key: 1,
      name: '开屏摇一摇广告',
      activityIds: [
        'com.pandabus.yinchuan.ui.activity.GuideActivity',
      ],
      rules: [
        {
          matches: '[id="com.pandabus.yinchuan.ui.activity.GuideActivity"]',
          snapshotUrls: 'https://i.gkd.li/import/13884400',
        },
      ],
    },
  ],
});
