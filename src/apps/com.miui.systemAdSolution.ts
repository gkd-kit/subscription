import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.systemAdSolution',
  name: 'miui系统广告',
  groups: [
    {
      key: 1,
      name: 'miui-为什么不希望看到这条推广',
      desc: '点击【不感兴趣】',
      activityIds: [
        'com.xiaomi.ad.feedback',
        'com.android.thememanager.module.detail.view.ThemeDetailActivity',
        'com.android.thememanager.ThemeResourceProxyTabActivity',
      ],
      rules: '[id="com.miui.systemAdSolution:id/no_interest"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13227328', // com.android.thememanager.module.detail.view.ThemeDetailActivity
        'https://i.gkd.li/import/13255751', // com.android.thememanager.ThemeResourceProxyTabActivity
      ],
    },
  ],
});
