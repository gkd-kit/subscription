import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'sina.mobile.tianqitong',
  name: '天气通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'LinearLayout[childCount=2]',
      snapshotUrls: 'https://i.gkd.li/import/13628049',
    },
  ],
});
