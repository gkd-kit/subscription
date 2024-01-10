import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.pandabus.yinchuan',
  name: '银川行',
  groups: [
    {
      key: 1,
      name: '开屏摇一摇广告',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      enable: true,
      activityIds: ['com.pandabus.yinchuan.ui.activity.GuideActivity'],
      rules: [
        {
          matches: '[id="com.pandabus.yinchuan:id/tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13884598',
        },
      ],
    },
  ],
});
