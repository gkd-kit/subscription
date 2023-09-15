import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.babytree.apps.pregnancy',
  name: '宝宝树孕育',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: [
        'com.babytree.apps.pregnancy.video.splash.SplashVideoTransitionActivity',
        'com.babytree.apps.pregnancy.MainActivity',
      ],
      rules: [
        {
          matches:
            '[id="com.babytree.apps.pregnancy:id/ilr"||id="com.babytree.apps.pregnancy:id/dla"&&text*="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12614755',
            'https://gkd-kit.gitee.io/import/12614757',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '弹出广告(偶发)',
      rules: [
        {
          matches: '[id="com.babytree.apps.pregnancy:id/bzm"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12614834',
        },
      ],
    },
    {
      key: 3,
      name: '首页右侧悬浮广告(偶发)',
      rules: [
        {
          matches: '[id="com.babytree.apps.pregnancy:id/cx5"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12614838',
        },
      ],
    },
  ],
});
