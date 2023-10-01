import { machine } from 'os';
import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.guwendao.gwd',
  name: '古文岛',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.guwendao.gwd.MainActivity',
      rules: '[text="应用升级提醒"] +n LinearLayout > [text="取消"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12776605',
    },
    {
      key: 2,
      name: '第三方 SDK 广告弹窗',
      activityIds: 'com.guwendao.gwd.MainActivity',
      rules: [
        {
          key: 0,
          matches: 'ImageView - FrameLayout > FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12776607',
        },
      ],
    },
  ],
});
