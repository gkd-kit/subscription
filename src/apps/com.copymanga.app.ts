import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.copymanga.app.MainActivity'],
      rules: '[text *= "跳过" && text.length < 6]',
      snapshotUrls: ['https://gkd-kit.songe.li/import/12852509'],
    },
  ],
});
