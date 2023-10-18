import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xtuone.android.syllabus',
  name: '超级课程表',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.xtuone.android.friday.InitActivity',
        'com.xtuone.android.friday.AdvertisementWallActivity',
      ],
      rules: [
        {
          key: 0,
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"||id="com.xtuone.android.syllabus:id/ignore_top"||text^="跳过"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12840730',
            'https://gkd-kit.gitee.io/import/12840736',
            'https://gkd-kit.gitee.io/import/12840737',
          ],
        },
        {
          key: 1,
          matches: '[id="com.byted.pangle.m:id/tt_splash_skip_btn"]',
          snapshotUrls: ['https://gkd-kit.songe.li/import/12909593'],
        },
      ],
    },
    {
      key: 1,
      name: '首页banner广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/treehole_banner_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12840733',
    },
    {
      key: 2,
      name: '课程表界面广告',
      activityIds: ['com.xtuone.android.friday.MainFragmentActivity'],
      rules: '[id="com.xtuone.android.syllabus:id/imgv_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12999642',
    },
  ],
});
