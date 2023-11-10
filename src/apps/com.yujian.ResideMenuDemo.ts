import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yujian.ResideMenuDemo',
  name: '雨见',
  groups: [
    {
      enable: false,
      key: 1,
      name: '更新提示',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[id="com.yujian.ResideMenuDemo:id/btn_selectOther"]',
      snapshotUrls: 'https://i.gkd.li/import/13224234',
    },
  ],
});
