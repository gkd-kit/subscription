import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.caing.news',
  name: '财新',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: '@TextView[text*=\'跳过广告\']',
      activityIds:
        'com.caixin.android.component_launcher.LauncherContainerActivity',
      snapshotUrls: 'https://i.gkd.li/import/13484755',
    },
  ],
});
