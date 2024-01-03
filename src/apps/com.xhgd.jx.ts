import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xhgd.jx',
  name: '柠檬解析',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches: 'FrameLayout[childCount=4] > FrameLayout[index=1]',
          snapshotUrls: 'https://i.gkd.li/import/13762226',
        },
      ],
    },
  ],
});
