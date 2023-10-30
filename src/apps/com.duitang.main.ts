import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duitang.main',
  name: '堆糖',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      activityIds: ['com.duitang.main.activity.SplashActivity'],
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13202185',
        },
      ],
    },
    {
      name: '青少年模式',
      desc: '关闭青少年模式提醒弹窗',
      key: 1,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      rules: [
        {
          matches: '[text="进入青少年模式"] + [text="我知道了"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13202230',
        },
      ],
    },
    {
      name: '首页-推荐浏览广告',
      desc: '关闭推荐浏览页面广告',
      key: 2,
      activityIds: ['com.duitang.main.business.main.NAMainActivity'],
      rules: [
        {
          matches: '[id="com.duitang.main:id/adOptionEntry"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13202725',
        },
      ],
    },
  ],
});
