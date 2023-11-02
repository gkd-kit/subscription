import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cf.dubaji',
  name: '毒霸姬',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.cf.dubaji.module.main.MainActivity',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.cf.dubaji:id/dlg_action_positive"][text="立即更新"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/import/13198107',
        },
      ],
    },
  ],
});
