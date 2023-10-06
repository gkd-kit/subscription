import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.browser',
  name: '小米浏览器',
  groups: [
    {
      key: 0,
      name: '个性推荐获得更丰富内容',
      activityIds: ['com.android.browser.BrowserActivity'],
      rules: [
        {
          matches: '[id="com.android.browser:id/apv"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12829403',
        },
      ],
    },
  ],
});
