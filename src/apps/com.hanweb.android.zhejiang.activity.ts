import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hanweb.android.zhejiang.activity',
  name: '浙里办',
  groups: [
    {
      enable: false, // 政务app，首页涉及民生政策宣传及服务快捷入口，默认关闭
      key: 0,
      name: '开屏宣传',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12913138',
        'https://i.gkd.li/import/13530315',
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '@[id="com.hanweb.android.zhejiang.activity:id/iv_cancel"] -2 * >2 [text="发现新版本"]',
      snapshotUrls: 'https://i.gkd.li/import/13402048',
    },
  ],
});
