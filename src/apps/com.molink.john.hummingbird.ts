import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.molink.john.hummingbird',
  name: 'bebird',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.molink.john.hummingbird.activity.WellComeActivity',
      rules: 'RelativeLayout > TextView[text*="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12867595',
    },
  ],
});
