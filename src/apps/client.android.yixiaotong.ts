import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'client.android.yixiaotong',
  name: '乐校通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/13055542',
    },
    {
      key: 1,
      name: '应用内广告弹窗',
      activityIds:
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      rules: [
        // 腾讯广告
        {
          key: 0,
          matches:
            'ImageView - FrameLayout > ImageView +2 FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13055837',
        },

        // 快手广告
        {
          key: 2,
          activityIds:
            'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
          matches:
            '[id="client.android.yixiaotong:id/ksad_tk_view"] >n ViewGroup + ViewGroup > @ViewGroup > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13060116',
        },
      ],
    },
    {
      key: 2,
      name: '应用内广告卡片',
      activityIds:
        'client.android.yixiaotong.v3.ui.appcontrol.bath.BathDetailActivity',
      rules: 'ImageView - FrameLayout - FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13055542',
    },
  ],
});
