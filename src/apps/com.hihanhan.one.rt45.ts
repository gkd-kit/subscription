import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hihanhan.one.rt45',
  name: '一个',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      quickFind: true,
      rules: '[vid="ivClose"]',
      snapshotUrls: 'https://i.gkd.li/import/14099393',
    },
  ],
});
