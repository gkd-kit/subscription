import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'org.daimhim.zzzfun',
  name: 'ZzzFun',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'org.daimhim.zzzfun.ui.home.video.VideoDetailsActivity',
      rules: 'ImageView -2 ImageView + FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13402608',
    },
  ],
});
