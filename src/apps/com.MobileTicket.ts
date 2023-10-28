import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.MobileTicket.ui.dialog.SplashAdDialog','com.MobileTicket.ui.activity.MainActivity'],
      rules: '[id=`com.MobileTicket:id/tv_skip`]',
      snapshotUrls: 'https://i.gkd.li/import/13196243'
    },
  ],
});
