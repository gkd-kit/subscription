import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ecellsz.watch.guard',
  name: '乐康守护',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="splash_container"] >n View[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/14039510',
    },
  ],
});
