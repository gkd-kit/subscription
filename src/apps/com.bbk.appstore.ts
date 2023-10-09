import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.bbk.appstore.ui.AppStore'],
      rules: '[text ^= "跳过" ]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12847395',
    },
  ],
});
