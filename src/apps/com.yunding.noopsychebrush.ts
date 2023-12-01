import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yunding.noopsychebrush',
  name: 'Oclean Care',
  groups: [
      {
        key: 0,
        name: '开屏-5s广告',
        activityIds: ['com.yunding.noopsychebrush.activity.ad.AdvertisingActivity'],
        rules: [
         {
            matches: '[id="com.yunding.noopsychebrush:id/btn_skip"][text="跳过4S"]',
            snapshotUrls: 'https://i.gkd.li/import/13522288',
          },
        ],
      },
    ],
});
