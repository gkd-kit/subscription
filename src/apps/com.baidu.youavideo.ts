import { defineAppConfig } from '../types';

export default defineAppConfig({
// 订阅使用 JSON5 语法, 根节点可以是数组也可以是对象
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.baidu.youavideo.app.ui.SplashActivity'],
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12597925',
          ],
        },
      ],
    },
   {
      key: 2,
      name: '软件升级提醒',
      activityIds: ['com.baidu.youavideo.home.view.HomeActivity'],
      rules: [
        {
          matches: '[id="com.baidu.youavideo:id/tv_description"] +3 [id="com.baidu.youavideo:id/img_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12597916',
          ],
        },
      ],
    },
  ],
});


