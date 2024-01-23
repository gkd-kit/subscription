import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.kmsoft.fvplayer',
  name: '快码万能播放器',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      activityIds: [
        'com.kmsoft.fvplayer.activity.MainActivity',
        'com.kmsoft.fvplayer.activity.PayActivity',
      ],
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          matches:
            '[id="android:id/content"] >n FrameLayout[index=2][childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/14019546',
        },
        {
          key: 1,
          name: '快手SDK',
          matches:
            '[vid="ksad_tk_view"] >n @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/14019547',
        },
      ],
    },
  ],
});
