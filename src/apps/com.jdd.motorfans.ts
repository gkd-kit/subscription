import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jdd.motorfans',
  name: '摩托范',
  groups: [
    {
      key: 1,
      name: '第三方 SDK 广告弹窗',
      activityIds: [
        'com.jdd.motorfans.MTMainActivity',
        'com.jdd.motorfans.modules.detail.DetailActivity2',
      ],
      rules: [
        {
          matches:
            '[id="com.jdd.motorfans:id/ad_content"] >n [id="com.jdd.motorfans:id/iv_close"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12733646',
            'https://gkd-kit.songe.li/import/12798654',
          ],
          exampleUrls:
            'https://user-images.githubusercontent.com/44717382/270852019-b0296eaa-a378-49b3-877b-acefca2a7d58.gif',
        },
        {
          matches: '@ImageView -n RelativeLayout > TextView[text*="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12826288'],
        },
      ],
    },
    {
      key: 2,
      name: '信息流广告',
      activityIds: ['com.jdd.motorfans.MTMainActivity'],
      rules: [
        {
          matches: '@ImageView <2 FrameLayout > LinearLayout > FrameLayout', //虽然在审查页面能匹配上，但是在“执行选择器”功能下一直处于搜索中，先添加后到真机测试
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12826382'],
        },
      ],
    },
  ],
});
