import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.packageinstaller',
  name: '原生软件包安装程序（Google）',
  groups: [
    {
      enable: false,
      key: 1,
      name: '功能类-自动安装应用',
      activityIds: [
        'com.android.packageinstaller.PackageInstallerActivity',
        'com.android.packageinstaller.DeleteStagedFileOnResult',
      ],
      rules: [
        {
          matches: '[text="安装"]',
          snapshotUrls: 'https://i.gkd.li/import/13914644',
        },
        {
          matches: '[id$="/button1"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13914644',
            'https://i.gkd.li/import/13914647',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '功能类-自动更新应用',
      activityIds: [
        'com.android.packageinstaller.PackageInstallerActivity',
        'com.android.packageinstaller.DeleteStagedFileOnResult',
      ],
      rules: [
        {
          matches: '[text="更新"]',
          snapshotUrls: 'https://i.gkd.li/import/13914647',
        },
        {
          matches: '[id$="/button1"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13914647',
            'https://i.gkd.li/import/13914644',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '功能类-自动取消安装应用',
      activityIds: [
        'com.android.packageinstaller.PackageInstallerActivity',
        'com.android.packageinstaller.DeleteStagedFileOnResult',
      ],
      rules: [
        {
          matches: '[text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13914647',
        },
        {
          matches: '[id$="/button2"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13914644',
            'https://i.gkd.li/import/13914647',
          ],
        },
      ],
    },
  ],
});
