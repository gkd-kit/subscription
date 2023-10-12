import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.gl',
  name: '网易大神',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.netease.gl.serviceupdate.widget.DialogUpdate',
      rules:
        '@[id="com.netease.gl:id/iv_close"] +2 LinearLayout >n [id="com.netease.gl:id/btn_update"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12883135',
    },
  ],
});
