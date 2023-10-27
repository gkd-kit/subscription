import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bilibili.app.in',
  name: 'bilibili',
  groups: [
    {
      key: 5,
      name: '评论区-满意度评价',
      quickFind: true,
      activityIds: 'com.bilibili.video.story.StoryVideoActivity',
      rules:
        '[text="对当前的评论区满意吗？"] + [id="com.bilibili.app.in:id/close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13115189',
    },
    {
      key: 6,
      name: 'APP评分',
      quickFind: true,
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules:
        '[id="com.bilibili.app.in:id/cancel"][text="下次再说"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13180746',
    },
  ],
});
