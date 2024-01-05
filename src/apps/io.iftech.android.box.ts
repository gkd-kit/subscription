import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'io.iftech.android.box',
  name: '小组件盒子',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'io.iftech.android.box.main.HomeActivity',
      rules: '[text*="新版本"] +(2) [text="取消"]',
      snapshotUrls: 'https://i.gkd.li/import/12706195',
    },
    {
      key: 2,
      name: '第三方 SDK 广告',
      rules: [
        {
          name: '穿山甲',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@Image[text=""] < View +(n) View >(2) TextView[text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/12706209',
        },
        {
          name: '优量汇',
          activityIds: 'io.iftech.android.box.main.HomeActivity',
          matches: 'ImageView - FrameLayout > ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/12706209',
        },
        {
          name: '百青藤',
          activityIds: 'com.anythink.basead.ui.ATPortraitTranslucentActivity',
          matches:
            '[id="io.iftech.android.box:id/anythink_myoffer_btn_close_id"]',
          snapshotUrls: 'https://i.gkd.li/import/12706228',
        },
        {
          name: '百青藤',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12706236',
        },
        {
          name: '百青藤',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView',
          snapshotUrls: 'https://i.gkd.li/import/12706240',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '会员限时优惠弹窗',
      activityIds: 'io.iftech.android.box.main.HomeActivity',
      rules:
        '@[id="io.iftech.android.box:id/ivClose"] + [text^="限时"][text$="特惠"]',
      snapshotUrls: 'https://i.gkd.li/import/12706226',
    },
  ],
});
