import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhouyu.music',
  name: '微音乐',
  groups: [
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds: 'com.zhouyu.music.activities.MainActivity',
      rules:
        '@TextView[id=null][clickable=true] + View > View > View [text="广告"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/13062330',
    },
  ],
});
