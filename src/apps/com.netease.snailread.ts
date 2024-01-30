import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.snailread',
  name: '网易蜗牛读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '穿山甲SDK',
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/import/14095278',
        },
      ],
    },
  ],
});
