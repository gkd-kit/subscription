import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      activityIds: [
        'com.copymanga.app.MainActivity',
        'com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity',
      ],
      rules: [
        {
          matches: 'TextView[text!=null] - TextView[text^="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12504489',
            'https://gkd-kit.gitee.io/import/12504507',
          ],
        },
        {
          matches: 'ImageView + ViewGroup > TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12504492',
        },
      ],
    },
    {
      key: 1,
      name: '内部弹窗广告',
      matchLauncher: true,
      activityIds: ['com.copymanga.app.MainActivity'],
      rules: [
        {
          activityIds: 'com.kwad.components.ad.interstitial',
          matches: 'TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12504486',
        },
        {
          activityIds: 'com.kwad.components.ad.interstitial',
          matches: 'ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12504488',
        },
        {
          matches:
            'ImageView < FrameLayout < FrameLayout +2 FrameLayout > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12504501',
        },
        {
          matches: 'ImageView + FrameLayout + FrameLayout > ImageView',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12504520',
            'https://gkd-kit.gitee.io/import/12661019',
          ],
        },
        {
          matches:
            '@ImageView < FrameLayout[childCount=1] +2 FrameLayout[childCount=2] >2 TextView[text$="看看"][text^="去"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12504501',
        },
      ],
    },
    {
      key: 2,
      name: '加入书架按钮下面的广告',
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
        {
          name: '点击右上角x',
          matches: 'ImageView[id="com.copymanga.app:id/close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12504525',
        },
        {
          name: '点击右下角x',
          matches:
            'FrameLayout[childCount=3] > LinearLayout[childCount=1] + FrameLayout[childCount=1] > ImageView[id=null]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12851671',
        },
      ],
    },
    {
      key: 3,
      name: '关闭赞助提示',
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
        {
          matches: '@[desc="就这样吧"] + [desc^="赞助免广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12851627',
        },
      ],
    },
  ],
});
