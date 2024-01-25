import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.mil.junhao',
  name: '中国军号',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: '[vid="splash_adv_ship"]',
      snapshotUrls: 'https://i.gkd.li/import/13806892',
    },
    {
      key: 1,
      name: '功能类-首页右侧浮窗',
      activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
      rules:
        '[vid="fragment_containerx"] > FrameLayout > ImageView[index=2][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13806894',
    },
    {
      key: 2,
      name: '功能类-意见反馈浮窗',
      activityIds: 'com.mediacloud.app.nav2.AppHome21Style',
      rules: '[vid="float_feedback"] > ImageView[index=2][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13806896',
    },
  ],
});
