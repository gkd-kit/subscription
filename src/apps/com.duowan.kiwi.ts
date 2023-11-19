import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    {
      key: 5,
      name: '直播间底部弹窗',
      activityIds: 'com.duowan.kiwi.liveroom.ChannelPage',
      rules:
        '[id="com.duowan.kiwi:id/miniapp_content_container"] FrameLayout > ViewGroup[childCount=2] > @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13401266',
    },
  ],
});
