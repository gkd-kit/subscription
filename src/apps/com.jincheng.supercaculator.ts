import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jincheng.supercaculator',
  name: '全能计算器',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13261910',
        },
      ],
    },
    {
      key: 0,
      name: '弹窗广告',
      desc: '点击右上角x',
      rules: [
        {
          activityIds: 'com.jincheng.supercaculator.activity.MainActivity',
          matches: '@Image < View < View TextView[text = "反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12859523',
            'https://i.gkd.li/import/12859545',
          ],
        },
        {
          activityIds: 'com.jincheng.supercaculator.activity.SplashActivity',
          matches: ['[text^="京东"]', '[_id=20]'],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/13261870'],
        },
      ],
    },
  ],
});
