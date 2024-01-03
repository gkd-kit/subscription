import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver',
  name: 'TwiTake',
  groups: [
    {
      key: 3,
      name: '评分弹窗',
      desc: '自动点击 LATER 。',
      rules: [
        {
          activityIds:
            'downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver.MainActivity',
          matches:
            '[id="downloadtwittervideo.twitterdownloader.twittervideodownloader.twittersaver:id/tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13748858',
        },
      ],
    },
  ],
});
