import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'client.android.yixiaotong.ui.WelcomeActivity',
      matchLauncher: true,
      rules:
        '[id="client.android.yixiaotong:id/rel_advlogo"] - * >n [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/13055542',
    },
  ],
});
