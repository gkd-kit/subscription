import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.oppo.market',
  name: '一加软件商店',
  groups: [
    {
        key: 1,
        name: '开屏广告',
        activityIds: ['com.heytap.cdo.client.ui.activity.MainTabPageActivity'],
        rules: [
        {
            matches: '@LinearLayout > TextView[text="跳过"]',
            snapshotUrls: 'https://i.gkd.li/import/13211017'
        }
        ]
    }
  ]
});
