import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.youtube',
  name: 'youtube',
  groups: [
    {
      key: 0,
      name: '视频播放-跳过广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[id=`com.google.android.youtube:id/skip_ad_button`]',
      snapshotUrls: [
        'https://i.gkd.li/import/12565261',
        'https://i.gkd.li/import/13024980', // matchLauncher
      ],
    },
    {
      key: 1,
      name: '视频播放-赞助商广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      matchLauncher: true,
      rules: 'ImageView[desc="更多选项"] + @ImageView[desc="关闭广告面板"]',
      snapshotUrls: 'https://i.gkd.li/import/12877346',
    },
    {
      key: 2,
      name: '首页-会员广告',
      activityIds:
        'com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity',
      matchLauncher: true,
      rules:
        'ImageView < @Button < ViewGroup +3 Button[desc*="YouTube Premium"]',
      snapshotUrls: 'https://i.gkd.li/import/12877357',
    },
    {
      key: 3,
      name: '视频播放-跳过广告(英文)',
      rules: [
        {
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[id="com.google.android.youtube:id/skip_ad_button"]',
          exampleUrls:
            'https://m.gkd.li/33296184/6f4099c6-7173-436e-add5-edf445402556',
          snapshotUrls: 'https://i.gkd.li/import/13757181',
        },
      ],
    },
    {
      key: 4,
      name: '视频播放-关闭合集(Mix)',
      rules: [
        {
          activityIds:
            'com.google.android.apps.youtube.app.watchwhile.MainActivity',
          matches: '[id="com.google.android.youtube:id/close_button"]',
          exampleUrls:
            'https://m.gkd.li/33296184/6c9cb33c-f6b1-4ea6-96da-e159ee0dc0d6',
          snapshotUrls: 'https://i.gkd.li/import/13757298',
        },
      ],
    },
  ],
});
