import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.github.eprendre.tingshu',
  name: '我的听书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12783430',
    },
    {
      key: 1,
      name: '搜索结果底部广告',
      activityIds:
        'com.github.eprendre.tingshu.ui.search.AggregateSearchActivity',
      rules:
        '[id="com.github.eprendre.tingshu:id/banner_container"] >n FrameLayout > ImageView +2 FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12783466',
    },
  ],
});
