import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wisedu.cpdaily',
  name: '今日校园',
  groups: [
    {
      key: 2,
      name: '版本更新',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: 'com.wisorg.wisedu.home.ui.HomeActivity',
      rules: '[id="com.wisedu.cpdaily:id/btn_update"] + [id="com.wisedu.cpdaily:id/tv_ignore"]',
      snapshotUrls: 'https://i.gkd.li/import/13643565',
    },
  ],
});
