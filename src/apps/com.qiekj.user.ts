import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qiekj.user',
  name: '胖乖生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qiekj.user.MainActivity',
      matchLauncher: true,
      rules: [
        {
          key: 0,
          matches:
            '[id="com.qiekj.user:id/native_splash_view"] >n [text^="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12903088',
        },
        {
          key: 1,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/12903086',
        },
        {
          key: 2,
          matches:
            '[id="com.kwad.dy.sdk:id/ksad_splash_root_container"] >n ViewGroup > TextView + TextView + ImageView[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12903095',
        },
      ],
      
      
      key: 1,
      name: '首页广告',
      activityIds: [
        'com.qiekj.user.MainActivity',
        'com.bbk.launcher2.Launcher',
        'com.anythink.basead.ui.ATPortraitTranslucentActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity'
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[name=\"android.widget.ImageView\"][bottom=507||bottom=427]',
            '[name=\"android.view.ViewGroup\"][bottom=522][clickable=true]'
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/snapshot/1699186836571',
            'https://gkd-kit.gitee.io/snapshot/1699251680882'
          ]
        },
        {
          key: 1,
          matches: '[name=\"android.widget.ImageView\"][bottom=507||bottom=427]',
          snapshotUrls: 'https://gkd-kit.gitee.io/snapshot/1699188053991'
        },
        {
          key: 2,
          matches: '[id=\"com.qiekj.user:id/anythink_myoffer_btn_close_id\"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/snapshot/1699183282615']
        },
        {
          key: 3,
          matches: '[name=\"android.widget.Image\"][bottom=867||bottom=629||bottom=623]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/snapshot/1699252913559',
            'https://gkd-kit.gitee.io/snapshot/1699188879502'
          ]
        }
      ]
    },
  ],
});
