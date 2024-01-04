import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'moc.nauxuoyoaixoaix.www',
  name: '晓晓优选',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      rules: [
        {
          activityIds: 'moc.nauxuoyoaixoaix.www.ui.activity.SplashActivity',
          matches: '[text^="扭动手机"] <<9 FrameLayout +2 View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13820450',
        },
      ],
    },
  ],
});
