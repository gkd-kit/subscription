import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hanlingyoushang.pei',
  name: '佩奇影视',
  groups: [
    {
      key: 1,
      quickFind: true,
      enable: false,
      name: '首页广告提示',
      rules: [
        {
          name: '首页我知道了',
          matches: 'View[desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13950839',
        },
        {
          name: '广告右上角x',
          matches:
            'FrameLayout[id="android:id/content"] >5 @ImageView[name="android.widget.ImageView"]',
          snapshotUrls: 'https://i.gkd.li/import/13952257',
        },
        {
          name: '广告左上角x',
          matches:
            'ImageView[name="android.widget.ImageView"][depth=14][left=183]',
          snapshotUrls: 'https://i.gkd.li/import/13984995',
        },
      ],
    },
  ],
});
