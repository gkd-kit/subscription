import {defineAppConfig} from '../types';

export default defineAppConfig({
  id: 'com.hoperun.intelligenceportal',
  name: '我的南京',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.hoperun.intelligenceportal_extends.LeaderLoginPreActivity',
      matchLauncher: true,
      rules: '[id="com.hoperun.intelligenceportal:id/cancel_button"]',
      snapshotUrls: 'https://i.gkd.li/import/13421553',
    },
  ],
});
