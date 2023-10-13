import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mj.mjyd',
  name: '追漫大全',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      quickFind: true,
      activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
      rules:
        '@ImageView < FrameLayout[childCount=1] <2 FrameLayout >3 [text="立即下载"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12877729',
        'https://gkd-kit.songe.li/import/12895086',
      ],
    },
  ],
});
