import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.keke.ysh1.tz08051h',
  name: '可可影视',
  groups: [
    {
      key: 1,
      name: '开屏提示',
      activityIds: [
        'com.salmon.film.main.ui.MainActivity',
      ],
      rules: [
        {
          matches: 'TextView[text="可可影视"] < LinearLayout >n @TextView[text*="知道了"]',
          quickfind: true,
          snapshotUrls: 'https://i.gkd.li/import/13548412',
        },
      ],
    },
  ],
});
