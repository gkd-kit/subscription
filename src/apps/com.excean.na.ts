import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excean.na',
  name: '99手游加速器',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '局部广告-卡片广告',
      desc: '点击X',
      rules: [
        {
          activityIds: 'com.excelliance.kxqp.ui.activity.GameLaunchActivity',
          matches: '[id="com.excean.na:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/import/13931051',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      desc: '点击X',
      rules: [
        {
          name: '腾讯广告SDK',
          activityIds: 'com.excelliance.kxqp.ui.MainActivity',
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: [
            'https://i.gkd.li/import/13930990',
            'https://i.gkd.li/import/13932190',
          ],
        },
      ],
    },
  ],
});
