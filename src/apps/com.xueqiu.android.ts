import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xueqiu.android',
  name: '雪球',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.xueqiu.android.community.FakeAdActivity',
      rules: '[id="com.xueqiu.android:id/tv_skip"][text^="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12776009',
    },
    {
        "key": 1,
        "name": "首页广告",
        "desc": "",
        "rules": [
          {
            "activityIds": "com.xueqiu.android.mainnesting.view.MainNestingActivity",
            "matches": "[id='com.xueqiu.android:id/ad_close']",
            "exampleUrls": "https://m.gkd.li/33366298/d05d1eec-cda5-4d37-a494-8eef7b7871dd",
            "snapshotUrls": "https://i.gkd.li/import/13388227"
          }
        ]
      },
    {
      "key": 2,
        "name": "评论区广告",
        "desc": "",
        "rules": [
          {
            "activityIds": "com.xueqiu.android.community.StatusDetailActivity",
            "matches": "[id='com.xueqiu.android:id/ad_card_close']",
            "exampleUrls": "https://m.gkd.li/33366298/b223cc74-fd4f-45a2-89ab-4a18ddffc01c",
            "snapshotUrls": "https://i.gkd.li/import/13388361"
          }
        ]
    }
  ],
});
