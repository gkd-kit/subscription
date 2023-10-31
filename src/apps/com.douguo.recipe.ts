import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.douguo.recipe',
  name: '豆果美食',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.douguo.recipe.MainActivity',
      rules: [
        {
          matches: '[id="com.douguo.recipe:id/ad_jump"] > [text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13215621',
        },
      ],
    },
  ],
});
