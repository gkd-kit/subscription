import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mygolbs.mybussy',
  name: '顺义公交',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13704565',
    },
  ],
});