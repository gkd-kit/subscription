import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.securitycenter',
  name: '安全服务',
  groups: [
    {
      key: 10,
      name: '自动继续安装',
      quickFind: true,
      activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
      rules: [
        {
          matches: '[text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/import/13269875',
        },
      ],
    },
  ],
});
