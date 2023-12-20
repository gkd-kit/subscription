import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.ms.pages',
  name: '飞鸟听书',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +n View > View > TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13450787',
        },
      ],
    },
    {
      key: 2,
      name: '令牌广告',
      rules: [
        {
          key: 1,
          name: '获取令牌1-1',
          activityIds:
            'com.qq.e.ads.PortraitADActivity',
          matches:
            '@ImageView < FrameLayout -n LinearLayout > LinearLayout > TextView[text="奖励将于"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1702999100225',
        },
        {
          key: 2,
          name: '获取令牌1-2',
          activityIds:
            'com.qq.e.ads.PortraitADActivity',
          matches:
            '@TextView[text="放弃奖励离开"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1702999079883',
        },
        {
          key: 3,
          name: '获取令牌2-1',
          activityIds:
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches:
            '@TextView[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1702999061664',
        },
        {
          key: 4,
          name: '获取令牌2-2',
          activityIds:
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          matches:
            '@TextView[text="残忍离开"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1702999064622',
        },
        {
          key: 5,
          name: '获取令牌3-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@TextView[text="| 跳过"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1703003148378',
        },
        {
          key: 6,
          name: '获取令牌3-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Button[text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1703002610401',
        },
      ],
    },
  ],
});
