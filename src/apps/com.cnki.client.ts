import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnki.client',
  name: '手机知网',
  deprecatedKeys: [0],
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.cnki.client.core.navigator.main.HomeActivity'],
      rules: '[id="com.cnki.client:id/update_undo"]',
      snapshotUrls: 'https://i.gkd.li/import/12854857',
    },
  ],
});
