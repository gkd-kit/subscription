import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.chuci.and.wkfenshen',
  name: '猴子分身',
  groups: [
    {
      key: 1,
      name: '购买会员弹窗',
      activityIds: 'cn.chuci.and.wkfenshen.ActMain',
      rules: [
        {
          quickFind: true,
          matches: [
            '[id="cn.chuci.and.wkfenshen:id/dialog_local_buy_btn"]',
            '[id="cn.chuci.and.wkfenshen:id/action_close"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13226988',
        },
      ],
    },
  ],
});
