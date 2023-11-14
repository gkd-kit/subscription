import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'bubei.tingshu',
  name: '懒人听书',
  groups: [
    {
      key: 1,
      name: '悬浮广告',
      rules: [
        {
          key: 0,
          name: '播放列表-右侧悬浮广告',
          quickFind: true,
          activityIds:
            'bubei.tingshu.listen.book.detail.activity.DetailActivity',
          matches: '[id="bubei.tingshu:id/closeIcon"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13348489',
        },
      ],
    },
  ],
});
