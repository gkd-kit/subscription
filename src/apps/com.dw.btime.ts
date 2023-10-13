import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dw.btime',
  name: '亲宝宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules:
        'TextView[text="向上滑动"] <2 LinearLayout + FrameLayout > Button[text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12889257',
    },
    {
      key: 1,
      name: '应用内弹窗',
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules:
        'ImageView[desc="亲宝宝"] < FrameLayout -2 ImageView[clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12889448',
    },
    {
      key: 2,
      name: '应用内横幅',
      activityIds: 'com.dw.btime.MainHomeTabActivity',
      rules:
        'RelativeLayout[childCount=4] > RelativeLayout[childCount=2] + ImageView[id="com.dw.btime:id/old_baby_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12889450',
    },
  ],
});
