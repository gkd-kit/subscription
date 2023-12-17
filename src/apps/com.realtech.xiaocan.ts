import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.realtech.xiaocan',
  name: '小蚕霸王餐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          quickFind: true,
          matches: '[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12843368',
            'https://i.gkd.li/import/13363222',
            'https://i.gkd.li/import/13363246',
          ],
        },
        {
          key: 2,
          matches: '[id = "com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/12854728',
        },
        {
          key: 3,
          matches:
            '[id="com.realtech.xiaocan:id/splash_ad_container"] >n FrameLayout[childCount=3] > FrameLayout + @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13694858',
        },
      ],
    },
  ],
});
