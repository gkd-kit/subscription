import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.svm.hbyy',
  name: '比翼多开',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      activityIds: 'com.svm.core.lib.view.activity.BackgroundActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13185376',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
      activityIds: 'com.svm.core.pro.view.activity.MainActivityEx',
      rules: [
        {
          matches: [
            '[text="打开或下载第三方应用"]',
            'FrameLayout[childCount=3] + FrameLayout > ImageView',
          ],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13185377',
        },
      ],
    },
  ],
});
