import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lanjinger.choiassociatedpress',
  name: '财联社',
  groups: [
    {
      key: 1,
      name: '首页-弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      quickFind: true,
      activityIds: 'com.lanjinger.choiassociatedpress.main.OperateActivity',
      rules: '@ImageView[id$="iv_back"][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13749206',
    },
  ],
});
