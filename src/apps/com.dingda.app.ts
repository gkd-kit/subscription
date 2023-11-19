import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dingda.app',
  name: '叮嗒出行',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: [
            '[id!=null][id="com.byted.pangle:id/tt_splash_skip_btn"]', // 不能 quickFind
            '[text="跳过 "&&name="android.widget.TextView"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13290327',
            'https://i.gkd.li/import/13403575',
          ]
        },
      ],
    },
  ],
});
