import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.nowcoder.app.florida',
    name: '牛客',
    groups: [
      {
        key: 1,
        quickFind: true,
        name: '开屏广告',
        desc: '自动点击跳过',
        rules: [
          {
            activityIds: 'com.nowcoder.app.ad.platform.first_party.view.SplashAdV2Activity',
            matches: '[text="广告"] -3 ImageView < ViewGroup > [text$="跳过"]',
            snapshotUrls: 'https://i.gkd.li/import/13806902',
          },
        ],
      },
    ],
  });
