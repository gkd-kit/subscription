import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.twitter.android',
  name: 'X(推特)',
  groups: [
    {
      key: 1,
      name: '信息流广告',
      activityIds: 'com.twitter.app.main.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            '@[id="com.twitter.android:id/tweet_curation_action"] <2 LinearLayout + LinearLayout >n [text="视频将在广告后播放"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798795',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '@ViewGroup > [text^="屏蔽"]', // 点击“我不喜欢”会返回主页，应当点击“屏蔽”。https://github.com/gkd-kit/subscription/issues/609#issuecomment-1745172531
          snapshotUrls: 'https://gkd-kit.songe.li/import/12798810',
        },
      ],
    },
  ],
});
