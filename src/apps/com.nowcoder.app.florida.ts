import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.nowcoder.app.florida',
    name: '牛客',
    groups: [
      {
        key: 1,
        name: '开屏广告',
        desc: '点击跳过',
        activityIds: 'com.nowcoder.app.ad.platform.first_party.view.SplashAdV2Activity',
        quickFind: true,
        rules: [
          {
            matches: '[id="com.nowcoder.app.florida:id/tv_skip"][text$="跳过"]',
            snapshotUrls: 'https://i.gkd.li/import/13806902',
          },
        ],
      },
      {
        key: 2,
        name: '首页弹窗',
        desc: '点击关闭',
        activityIds: 'com.nowcoder.app.florida.activity.home.MainV2Activity',
        rules: [
          {
            matches: '[name="android.widget.ImageView"][clickable=true]',
            snapshotUrls: 'https://i.gkd.li/import/13806903',
          },
        ],
      },
    ],
  });
