import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihonor.phoneservice',
  name: '我的荣耀',
  groups: [
    {
      enable: false,
      key: 10,
      name: '请求位置权限提示信息',
      activityIds: 'com.hihonor.phoneservice.main.MainActivity',
      rules:
        '[text^="开启定位权限"] + [id="com.hihonor.phoneservice:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12783134',
    },
  ],
});
