import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lanjinger.choiassociatedpress',
  name: '财联社',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.lanjinger.choiassociatedpress',
      rules: '[id="com.lanjinger.choiassociatedpress:id/iv_skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13627807',
    },
  ],
});
