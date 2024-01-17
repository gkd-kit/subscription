import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hanlingyoushang.pei',
  name: '佩奇影视',
  groups: [
    {
      key: 1,
      quickFind: true,
      name: '通知提示-首页',
      rules: [
        {
          matches: 'View[desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13950839',
        },
        {
          matches:
            'FrameLayout[id="android:id/content"] >5 @ImageView[name="android.widget.ImageView"]',
          snapshotUrls: 'https://i.gkd.li/import/13952257',
        },
      ],
    },
  ],
});
