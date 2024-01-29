import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      // 由于该软件包安装程序存在更新、安装重叠的情况，且安装\更新后和重叠时activityid都不同，
      // 尚不明确安装、更新、重叠三种情况混合时的activityid，故去掉activityIds字段
      key: 1,
      name: '功能类-自动安装/更新软件',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: 'LinearLayout[childCount=2] > [text="安装"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/14046939',
        },
        {
          key: 2,
          matches: 'LinearLayout[childCount=2] > [text="更新"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/14047571',
            'https://i.gkd.li/import/14047854', // 重叠情况的快照
          ],
        },
        {
          key: 3,
          matches: 'LinearLayout[childCount=2] > [text="完成"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/14047514',
            'https://i.gkd.li/import/14047969',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-安装未知应用设置',
      quickFind: true,
      activityIds: 'com.android.packageinstaller.InstallStaging',
      rules: [
        {
          key: 0,
          matches: [
            '[text*="禁止您的手机安装来自此来源的未知应用"]',
            '[text="设置"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/14080242',
        },
      ],
    },
  ],
});
