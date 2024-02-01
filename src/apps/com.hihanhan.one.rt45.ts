import { defineAppConfig } from '../types';

export default defineAppConfig({
   id: 'com.hihanhan.one.rt45',
  name: '一个',
  groups: [
    {
      key: 1,
      name: '启动广告',
      desc: '跳过启动广告',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.hihanhan.one.ui.page.home.main.MainActivity',
          matches: '[id="com.hihanhan.one.rt45:id/ivClose"]',
          exampleUrls: 'https://m.gkd.li/12692556/44e6ee1f-28cf-4290-8419-dc5af57747c6',
          snapshotUrls: 'https://i.gkd.li/import/14099393',
        },
      ],
    },
  ]
});
