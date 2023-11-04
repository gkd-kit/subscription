import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhl.bmi',
  name: '乐看视频',
  groups: [
    {
      key: 2,
      name: '推荐-广告弹窗',
      activityIds: 'com.zhl.bmi.MainActivity',
      rules: 'ImageView[depth=5] <n FrameLayout >2 FrameLayout[index=2] > ImageView',
      snapshotUrls: [
        'https://i.gkd.li/import/13255787',
        'https://i.gkd.li/import/13255786',
       ],
    },
  ],
});
