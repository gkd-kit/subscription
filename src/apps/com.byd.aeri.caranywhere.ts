import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.byd.aeri.caranywhere',
  name: '比亚迪王朝',
  groups: [
    {
      key: 1,
      enable: false,
      name: '跳过自动更新',
      activityIds: ['com.byd.aeri.splash.module_splash.activity.TabManager'],
      rules: [
        {
          key: 1,
          matches:
            '[id="com.byd.aeri.caranywhere:id/tv_dialog_title"][text="版本更新提示"]',
        },
        {
          matches: '[id="com.byd.aeri.caranywhere:id/tv_cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13348383', //获取链接的方法在上一步有说明
          preKeys: [1],
        },
      ],
    },
  ],
});
