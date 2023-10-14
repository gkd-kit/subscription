import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.cainiao.wireless.homepage.view.activity.AdsActivity',
      rules: [
        {
          matches: '[id="com.cainiao.wireless:id/homesplash_close_fullscreen"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12724823'],
        },
        {
          matches: '@LinearLayout > [text*="跳过"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12901758'],
        },
      ],
    },
  ],
});
