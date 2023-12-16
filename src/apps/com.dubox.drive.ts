import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dubox.drive',
  name: 'TeraBox',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:[
        {
          matches: 'TextView[id="com.dubox.drive:id/tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/import/13200574',
        },
        {
        matches: [
          '[id="inmobi-ad"]',
          '[id="com.dubox.drive:id/ivClose"]',
        ],
        snapshotUrls: 'https://i.gkd.li/import/13688384',
      },
    ],
    },
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      activityIds: 'com.dubox.drive.ui.MainActivity',
      rules: 'ImageView[id="com.dubox.drive:id/ivClose"]',
      snapshotUrls: 'https://i.gkd.li/import/13200577',
    },
    {
      key: 2,
      name: '通知权限',
      quickFind: true,
      activityIds: 'com.dubox.drive.permission.view.PermissionDialogActivity',
      rules: '[text="Authorize"] - [id="com.dubox.drive:id/dialog_button_cancel"]',
      snapshotUrls: 'https://i.gkd.li/import/13688406',
    },
  ],
});
