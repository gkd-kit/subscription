import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.taobao.idlefish:id/advert_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12668670',
        'https://i.gkd.li/import/13049015',
      ],
    },
  ],
});
