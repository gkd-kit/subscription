import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.github.catvod.app',
  name: '猫影视',
  groups: [
    {
      key: 1,
      name: '功能类-应用协议弹窗',
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.github.catvod.app.MainActivity',
      rules: '[desc*="本软件仅供学习"] + [desc="同意"]',
      snapshotUrls: 'https://i.gkd.li/import/13938918',
    },
  ],
});
