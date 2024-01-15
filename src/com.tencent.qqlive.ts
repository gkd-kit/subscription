import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      name: '视频去广告',
      key: 1,
      desc: '视频去广告',
      rules: [
        {
          matches: [
            'FrameLayout[childCount=5] > ImageView[_id!=32]'
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13937993'
          ],
          exampleUrls: [
            'https://m.gkd.li/89734168/09e127af-0022-4ae7-9798-1e484da75f95'
          ],
          activityIds: [
            'com.tencent.qqlive.ona.activity.VideoDetailActivity'
          ]
        }
      ]
    }
  ]
}
  ],
});
