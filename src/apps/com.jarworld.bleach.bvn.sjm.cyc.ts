import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jarworld.bleach.bvn.sjm.cyc',
  name: '次元城动漫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13626948',
            'https://i.gkd.li/import/13626951',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '广告弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.jarworld.bleach.bvn.sjm.cyc.MainActivity',
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13626949',
        },
        {
          key: 1,
          activityIds: 'com.jarworld.bleach.bvn.sjm.cyc.MainActivity',
          matches:
            '[id="com.jarworld.bleach.bvn.sjm.cyc:id/ksad_container"] ViewGroup[childCount=1] > @ViewGroup[clickable=true][childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13626950',
        },
        {
          key: 2,
          activityIds: 'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches: [
            'WebView > View > View > [text="广告"]',
            'ViewGroup[childCount=2] > @ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13635410',
        },
      ],
    },
  ],
});
