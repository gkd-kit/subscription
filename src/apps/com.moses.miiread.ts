import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.moses.miiread',
  name: '书迷',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10][visibleToUser=true]',
      snapshotUrls: 'https://i.gkd.li/import/13799556',
    },
  ],
});
