import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnspeedtest.globalspeed',
  name: '全球网测',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.ruili.android.taierspeed.main.MainActivity',
      rules: [
        '[id="com.cnspeedtest.globalspeed:id/vision_btn_ok"][text="更新"] +2 [id="com.cnspeedtest.globalspeed:id/vision_btn_cancel"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642345',
    },
  ],
});
