import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jdcar.jch',
  name: '京东养车',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      rules: [
        {
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches:
            'ImageView[desc="启动图广告"][clickable=true] < RelativeLayout[vid="splash_ad_layout"] + View[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13815107',
        },
      ],
    },
  ],
});
