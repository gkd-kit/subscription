import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vmos.pro',
  name: 'VMOS Pro',
  groups: [
      {
        key: 0,
        name: '首页-弹窗广告',
        activityIds: ['com.vmos.pro.activities.main.MainActivity'],
        rules: [
         {
            matches: '[id="com.vmos.pro:id/iv_dismiss"]',
            snapshotUrls: 'https://i.gkd.li/import/13522307',
          },
        ],
      },
    ],
});
