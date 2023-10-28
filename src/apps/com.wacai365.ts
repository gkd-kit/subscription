import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coloros.phonemanager',
  name: 'OPPO手机管家',
  groups: [
    {
      key: 3,
      name: '版本更新',
      quickFind: true,
      matchLauncher: true,
      rules: '@Button[text="取消"] < LinearLayout -2 LinearLayout [text="检测到新版本"]',
      rules: [
        {
          matches:[
            '[text="检测到新版本"]'，
            '[text="取消"]',
          ],
          snapshotUrls: 'https://i.gkd.li/import/13194979',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/13194979',
    },
  ],
});
