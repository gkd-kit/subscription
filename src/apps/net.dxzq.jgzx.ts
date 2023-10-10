import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.dxzq.jgzx',
  name: '东兴198',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'net.dxzq.jgzx.activity.LoginPage',
      rules: [
        {
          matches: '[text *= "跳过" && text.length <7]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12852136',
        },
      ],
    },
  ],
});