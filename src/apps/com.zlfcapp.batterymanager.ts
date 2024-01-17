import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zlfcapp.batterymanager',
  name: '电池容量检测管理',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.zlfcapp.batterymanager:id/splash_container"] View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13960341',
        },
      ],
    },
  ],
});
