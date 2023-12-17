import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fxicrazy.sjml',
  name: '联掌门户',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      rules: [
        {
          activityIds: 'com.fxicrazy.sjml.ui.welcome.WelcomeActivity',
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          exampleUrls: 'https://m.gkd.li/51123503/cb6bc364-f517-406f-96ac-11386387100f',
          snapshotUrls: 'https://i.gkd.li/import/13695784',
        },
      ],
    },
    {
      key: 1,
      name: '通知权限弹窗',
      rules: [
        {
          activityIds: 'com.fxicrazy.sjml.ui.main.HomeTabActivity',
          matches: '[id="com.fxicrazy.sjml:id/bt_no"]',
          exampleUrls: 'https://m.gkd.li/51123503/2cc24a34-c589-466b-b1a7-7b7627b6ee10',
          snapshotUrls: 'https://i.gkd.li/import/13695790',
        },
      ],
    },
  ],
});
