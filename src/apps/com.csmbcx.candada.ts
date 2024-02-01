import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.csmbcx.candada',
  name: '餐大大',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="flContainer"] >n View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/14079762',
    },
  ],
});
