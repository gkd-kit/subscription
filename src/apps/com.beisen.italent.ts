import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.beisen.italent',
  name: '北森italent',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'com.beisen.hybrid.platform.engine.window.RootWebWindowActivity',
      ],
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13554892',
        },
      ],
    },
  ],
});
