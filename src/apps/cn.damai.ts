import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="cn.damai:id/homepage_advert_pb"]',
      snapshotUrls: 'https://i.gkd.li/import/12472623',
    },
  ],
});
