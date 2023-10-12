import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dmzjsq.manhua',
  name: '动漫之家社区',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.miui.home.launcher.Launcher',
      rules: 'ImageView - FrameLayout ImageView[depth=7 && index =0]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/2878085',
    },
  ],
});
