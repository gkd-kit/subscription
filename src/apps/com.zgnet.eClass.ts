import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.zgnet.eClass.ui.SplashActivity'],
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"][text^="关闭"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12644260'],
        },
      ],
    },
  ],
});
