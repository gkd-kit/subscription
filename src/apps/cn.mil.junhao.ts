import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'cn.mil.junhao',
    name: '中国军号',
    groups: [
      {
        key: 1,
        name: '开屏广告',
        desc: '点击跳过',
        rules: [
          {
            activityIds: 'com.txl.app.HomeActivity',
            matches: '[id="cn.mil.junhao:id/splash_adv_ship"]',
            snapshotUrls: 'https://i.gkd.li/import/13806892',
          },
        ],
      },
    ],
  });
