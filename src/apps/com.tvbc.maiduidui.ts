import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tvbc.maiduidui',
  name: '埋堆堆',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '青少年模式弹窗',
      desc: '点击我知道了',
      rules: [
        {
          activityIds: 'com.tvbc.maiduidui.MainHomeActivity',
          matches: '[text="开启青少年模式"] + [text="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13847804',
        },
      ],
    },
  ],
});
