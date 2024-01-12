import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.packageinstaller',
  name: '原生软件包安装程序（Google）',
  groups: [
    {
      enable: false,
      key: 1,
      name: '自动安装应用',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: ['com.android.packageinstaller.PackageInstallerActivity', 'com.android.packageinstaller.DeleteStagedFileOnResult'],
          matches: '@[clickable=true] > [text="安装"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13914644',
            'https://i.gkd.li/import/13914647',
          ],
        },
        {
          key: 1,
          preKeys: 0,
          activityIds: 'com.android.packageinstaller.InstallSuccess',
          matches: '@[clickable=true] > [text="完成"]',
          snapshotUrls: 'https://i.gkd.li/import/13914923',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '自动更新应用',
      quickFind: true,
      rules: [
        {
          key: 0,
          activityIds: ['com.android.packageinstaller.PackageInstallerActivity', 'com.android.packageinstaller.DeleteStagedFileOnResult'],
          matches: '@[clickable=true] > [text="更新"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13914644',
            'https://i.gkd.li/import/13914647',
          ],
        },
        {
          key: 1,
          preKeys: 0,
          activityIds: 'com.android.packageinstaller.InstallSuccess',
          matches: '@[clickable=true] > [text="完成"]',
          snapshotUrls: 'https://i.gkd.li/import/13914923',
        },
      ],
    },
    {
      enable: false,
      key: 3,
      name: '自动取消安装应用',
      activityIds: ['com.android.packageinstaller.PackageInstallerActivity', 'com.android.packageinstaller.DeleteStagedFileOnResult'],
      rules: [
        {
          matches: '@[clickable=true] > [text="取消"]',
          snapshotUrls: 'https://i.gkd.li/import/13914647',
        },
      ],
    },
  ],
});
