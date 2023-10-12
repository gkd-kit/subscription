import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mj.mjyd',
  name: '追漫大全',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'li.songe.gkd.MainActivity',
      rules: 'ImageView -2 FrameLayout > ImageView[depth=7 && index =0]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12877729',
    },
  ],
});
