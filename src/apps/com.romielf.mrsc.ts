import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.romielf.mrsc',
  name: '每日赛车',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      activityIds: 
        'com.hihonor.android.launcher.unihome.UniHomeLauncher',
      rules: 
        '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
    },
    {
      name: '新闻页面摇一摇广告',
      key: 1,
      activityIds: 
        'com.romielf.mrsc.MainActivity',
      rules: [
        {
          matches: '[width=33][height=33]',
          delay: 500,
          snapshotUrls: 'https://gkd-kit.gitee.io/snapshot/1695111432334',
        },
        {
          matches: '[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/snapshot/1695116516651',
        },
      ],
    },
  ],
});