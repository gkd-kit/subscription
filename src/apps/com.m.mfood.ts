import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.m.mfood',
  name: 'mFood',
  groups: [
    {
      key: 1,
      name: '浮窗廣告',
      quickFind: true,
      activityIds: 'com.zdyl.mfood.ui.home.MainActivity',
      rules: '[id="com.m.mfood:id/close"]',
      snapshotUrls: 'https://i.gkd.li/import/13350787',
    },
  ],
});
