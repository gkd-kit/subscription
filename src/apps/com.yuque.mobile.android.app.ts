import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yuque.mobile.android.app',
  name: '语雀',
  groups: [
    {
      key: 0,
      name: '横幅提示',
      desc: '点x取消提示',
      matchLauncher: true,
      quickFind: true,
      activityIds:
        'com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity',
      rules: [
        {
          matches: 'TextView[text="了解更多"] - ViewGroup',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12911014',
        },
      ],
    },
    {
      key: 1,
      name: '自动原图',
      desc: '如果没有勾选原图, 则勾选',
      matchLauncher: false,
      quickFind: true,
      activityIds:
        'com.yuque.mobile.android.app.rn.activity.ReactNativeMainActivity',
      rules: [
        {
          matches: 'ViewGroup[desc="原图未勾选"] > ViewGroup > ViewGroup',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12911013',
        },
      ],
    },
  ],
});
