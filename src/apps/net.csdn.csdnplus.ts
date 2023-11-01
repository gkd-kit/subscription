import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id*="_skip_"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673680',
            'https://gkd-kit.gitee.io/import/12838461',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      quickFind: true,
      activityIds: [
        'net.csdn.csdnplus.activity.MainActivity',
        'net.csdn.csdnplus.activity.SetActivity',
      ],
      rules: [
        {
          matches:
            '[id="net.csdn.csdnplus:id/update"] -2 [id="net.csdn.csdnplus:id/cancel"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12673693',
            'https://gkd-kit.gitee.io/import/12673654',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '信息流广告',
      quickFind: true,
      activityIds: ['net.csdn.csdnplus.activity.MainActivity'],
      rules: [
        {
          key: 1,
          matches: '[text="广告"] + [id="net.csdn.csdnplus:id/iv_more"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673738'],
        },
        {
          key: 2,
          matches: '@LinearLayout >n [text="重复推荐该广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12673787'],
        },
      ],
    },
    {
      enable: false,
      key: 10,
      quickFind: true,
      name: '请求推送通知弹窗',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: {
        matches: [
          '[text="开启推送通知"]',
          '[id="net.csdn.csdnplus:id/iv_close"]',
        ],
        snapshotUrls: ['https://gkd-kit.gitee.io/import/12673638'],
      },
    },
  ],
});
