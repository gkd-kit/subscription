import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.feiyu.morin',
  name: '魔音MORIN',
  groups: [
    {
      key: 0,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '腾讯广告',
          activityIds: 'com.feiyu.morin.view.main.MainActivity',
          matches:
            'ImageView - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/import/13521556',
        },
      ],
    },
  ],
});
