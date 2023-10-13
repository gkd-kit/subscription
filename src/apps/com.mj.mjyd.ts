import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mj.mjyd',
  name: '追漫大全',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
      rules: [
        '@ImageView < FrameLayout[childCount=1] <2 FrameLayout[childCount=6] >3 [text="立即下载"]',
        'ImageView -2 FrameLayout ImageView[depth=8 && index =0]',
      ],
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12877729',
        'https://gkd-kit.songe.li/import/12895086',
      ],
    },
  ],
});
