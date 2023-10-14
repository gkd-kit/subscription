import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'ctrip.android.publicproduct.home.view.CtripHomeActivity',
      rules: [
        'LinearLayout[childCount=2] > TextView + TextView[text="跳过"||text="跳过广告"]',
      ],
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12472613',
        'https://gkd-kit.songe.li/import/12511071',
      ],
    },
  ],
});
