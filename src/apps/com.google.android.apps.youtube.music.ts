import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.apps.youtube.music',
  name: 'YouTube Music',
  groups: [
    {
      key: 1,
      name: '播放界面广告',
      activityIds:
        'com.google.android.apps.youtube.music.activities.MusicActivity',
      rules: '[id="com.google.android.apps.youtube.music:id/skip_ad_text"]',
      snapshotUrls: 'https://i.gkd.li/import/13196056',
    },
  ],
});
