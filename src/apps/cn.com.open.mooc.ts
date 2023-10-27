import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.open.mooc',
  name: '慕课网',
  groups: [
    {
      key: 1,
      name: '首页-10周年活动',
      activityIds: ['com.imooc.component.imoocmain.splash.MCSplashActivity'],
      rules: [
        {
          matches: '[id="cn.com.open.mooc:id/stepOver"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/13185441'],
        },
      ],
    },
  ],
});
