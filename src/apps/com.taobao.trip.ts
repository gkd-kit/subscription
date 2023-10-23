import {defineAppConfig} from '../types';

export default defineAppConfig(
    {
      id: 'com.taobao.trip',
      name: '飞猪',
      groups: [
        {
          key: 1,
          name: '开屏广告',
          activityIds: ['com.taobao.trip.splash.ui.ImageSplashActivity'],
          rules: [
            {
              matches: '[text="跳过广告"]',
              snapshotUrls: 'https://gkd-kit.gitee.io/import/13065579',
            },
          ],
        },
      ],
    });