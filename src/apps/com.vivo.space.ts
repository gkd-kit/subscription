import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vivo.space',
  name: 'vivo 官网',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.vivo.space:id/timer"]',
          snapshotUrls: 'https://i.gkd.li/import/13197585',
        },
        {
          matches: 'TextView[text="跳过"][text.length<=5]',
          snapshotUrls: 'https://i.gkd.li/import/13622769',
        },
      ],
    },
    {
      key: 3,
      name: '活动广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.vivo.space.ui.VivoSpaceTabActivity',
      rules: 'Image[text=""] + [text=""][clickable=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13218155',
        'https://i.gkd.li/import/13292907',
      ],
    },
  ],
});
