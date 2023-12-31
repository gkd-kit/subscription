import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.suning.mobile.ebuy',
  name: '苏宁易购',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      rules: [
        {
          matches: [
            '@TextView[id="com.suning.mobile.ebuy:id/count_down_tv" || vid="count_down_tv"]'
          ],
          activityIds: [
            'com.suning.mobile.ebuy.host.MainActivity'
          ]
        }
      ]
    },
    {
      name: '[首页]-弹窗',
      key: 1,
      desc: '弹窗-开启消息通知',
      rules: [
        {
          matches: [
            '@ImageView[vid="img_close"]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13801457'
          ],
          activityIds: [
            'com.suning.mobile.ebuy.host.MainActivity'
          ]
        }
      ]
    }
  ]
}
);
