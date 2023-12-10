import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="跳过"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/import/12774830',
    },
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.chinamobile.mcloud:id/bn_cancel"] + [id="com.chinamobile.mcloud:id/upgrade_title"]',
      snapshotUrls: 'https://i.gkd.li/import/12774833',
    },
  ],
});
