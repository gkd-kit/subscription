import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.bqkkxb2023.read.tt',
  name: '笔趣阁开心版',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'View[childCount=7] > [text="反馈"] -4 View[index=0]',
          exampleUrls:
            'https://m.gkd.li/57941037/87ef6fc5-f105-490b-9312-b6e0a8c13f35',
          snapshotUrls: 'https://i.gkd.li/import/14060595',
        },
      ],
    },
  ],
});
