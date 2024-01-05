import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules:
        '[id="android:id/content"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView[index=0]',
      snapshotUrls: [
        'https://i.gkd.li/import/13830354',
        'https://i.gkd.li/import/13842716',
        'https://i.gkd.li/import/13842966',
      ],
    },
  ],
});
