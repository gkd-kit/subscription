import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.samsung.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      enable: false,
      key: 1,
      name: '请求开启反恶意软件提示弹窗',
      activityIds: 'pl.solidexplorer.SolidExplorer',
      rules: [
        {
          key: 0,
          matches: ['[text^="是否打开反恶意软件"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/import/13233686',
        },
      ],
    },
    {
      key: 2,
      name: '三星安装软件跳过提示',
      activityIds: 'com.android.packageinstaller.activity.InstallerActivity',
      matchLauncher: true,
      rules: '[id="com.android.packageinstaller:id/cancel_btn"]',
      snapshotUrls: 'https://i.gkd.li/import/13421592',
    }
  ],
});
