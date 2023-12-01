import { defineAppConfig } from '../types';

export default defineAppConfig({
id: 'com.tcps.xiangyangtravel',
  name: '襄阳出行',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.tcps.xiangyangtravel.mvp.ui.activity.StartPageActivity'],
      rules: [
        {
          matches: '[id$="/ad_count_view"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1701410902002'
          ],
        },
      ],
    },
  ],
});
