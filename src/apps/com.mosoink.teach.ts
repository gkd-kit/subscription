import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mosoink.teach',
  name: '云班课',
  groups: [
    {
      key: 0,
      name: '首页-班课列表广告',
      activityIds: ['com.mosoink.teach.MainMenuActivity'],
      rules: [
        {
          matches:
            '[id=null][vid=null][name="android.view.ViewGroup"][text=null][clickable=true][focusable=true][visibleToUser=true][index=0]',
          snapshotUrls: 'https://i.gkd.li/import/13778179',
        },
        {
          matches: '[id$="/iv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13778123',
        },
      ],
    },
  ],
});
