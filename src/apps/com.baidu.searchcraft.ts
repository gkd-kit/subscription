import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.searchcraft',
  name: '简单搜索',
  groups: [
    {
      key: 1,
      name: '信息流广告',
      rules: [
        {
          key: 0,
          name: '快手广告',
          activityIds: 'com.baidu.browser.search.LightSearchActivity',
          matches: '[desc="ad-logo"] + [id="logo-close-btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13520385',
        },
      ],
    },
  ],
});
