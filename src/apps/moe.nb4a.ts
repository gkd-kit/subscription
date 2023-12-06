import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'moe.nb4a',
  name: 'NekoBox',
  groups: [
    {
      key: 0,
      name: '订阅更新完成',
      rules: [
        {
          activityIds: 'io.nekohasekai.sagernet.ui.MainActivity',
          matches: '[id="android:id/button1"][text="确定"]',
          snapshotUrls: 'https://i.gkd.li/import/13587661',
        },
      ],
    },
  ],
});
