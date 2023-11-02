import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jc.avatar.mm',
  name: '萌妹',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.jc.avatar.mm.MainActivity',
      rules:
        'ImageView -2 FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13188475',
    },
  ],
});
