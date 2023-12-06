import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'world.letsgo.booster.android.pro',
  name: '快连 VPN',
  groups: [
    {
      name: '[ChangeMe]规则名称-2023-12-04 17:20:42',
      key: 0,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: [
            'world.letsgo.booster.android.pages.guide.GuideActivity',
          ],
          matches: ['Button[id="android:id/button1"]'],
          snapshotUrls: ['https://i.gkd.li/import/13544120'],
          exampleUrls: [
            'https://m.gkd.li/58279234/6c3cfb78-ac6e-40c0-a792-b5069100e2b1',
          ],
        },
      ],
    },
  ],
});
