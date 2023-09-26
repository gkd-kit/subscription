import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.netease.cloudmusic.activity.MainActivity',
        'com.netease.cloudmusic.activity.LoadingActivity',
      ],
      rules: '[id="com.netease.cloudmusic:id/skipBtn"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12700920'],
    },
    {
      key: 1,
      name: '广告卡片',
      rules: [
        {
          activityIds:
            'com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet',
          matches: '[text="直接关闭"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/38517192/fea3449b-d642-4d75-929f-490421cc9080',
          ],
        },
        {
          activityIds: [
            'com.netease.cloudmusic.activity.MainActivity',
            'com.netease.cloudmusic.music.biz.comment.activity.CommentActivity',
          ],
          matches: '[id="com.netease.cloudmusic:id/adTagClose"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/38517192/a977b19d-2b3c-43df-ba01-63e7cbbb3908',
            'https://gkd-kit.gitee.io/import/12723229',
          ],
        },
      ],
    },
  ],
});
