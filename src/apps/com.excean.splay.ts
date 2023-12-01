import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.excean.splay',
  name: 'OurPlay加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12684539',
        'https://i.gkd.li/import/12684565',
        'https://i.gkd.li/import/12684579',
        'https://i.gkd.li/import/13486087',
        'https://i.gkd.li/import/13486740',
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: ['com.excelliance.kxqp.gs.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="com.excean.splay:id/positive"][text="立即更新"] + [id="com.excean.splay:id/negative"][text="忽略"]',
          snapshotUrls: ['https://i.gkd.li/import/12684551'],
        },
      ],
    },
  ],
});
