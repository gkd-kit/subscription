import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules: '[text="广告"] - @FrameLayout > [text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/12739065',
    },
    {
      key: 1,
      name: '申请开启通知',
      activityIds: 'com.xingin.xhs.index.v2.IndexActivityV2',
      rules: '[text ^="打开通知"] <2 LinearLayout + ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13195753',
    },
  ],
});
