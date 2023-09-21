import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gtgj.view',
  name: '高铁管家',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gtgj.view.LaunchActivity',
      rules: 'FrameLayout > TextView[text=`跳过`]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12684583'],
    },
  ],
});
