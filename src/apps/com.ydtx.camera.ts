import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ydtx.camera',
  name: '元道经纬相机',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.ydtx.camera.activity.SplashActivitynew'],
      rules: [
        {
          matches: '[id="com.ydtx.camera:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13226708', //获取链接的方法在上一步有说明
        },
        {
          matches: '[text*="跳过"][text.length<=5]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13234627',
        },
      ],
    },
  ],
});
