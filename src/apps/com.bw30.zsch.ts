import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bw30.zsch',
  name: '四川航空',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.bw.zsch.home.PrivacyPolicyActivity',
        'com.miui.privacy.common.PermissionAlertActivity',
        'com.bw.zsch.FirstDataLoadActivity',
      ],
      rules: 'TextView[text^="跳过"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12882959',
        'https://gkd-kit.songe.li/import/12882967',
        'https://gkd-kit.songe.li/import/12882991',
      ],
    },
  ],
});
