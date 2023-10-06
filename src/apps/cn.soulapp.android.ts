import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['cn.soulapp.android.ad.ui.HotAdActivity'],
      rules: [
        {
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12833280',
        },
      ],
    },
    {
    	key: 1,
    	name: '青少年模式弹窗',
    	activityIds: ['cn.soulapp.android.component.square.widget.dialog.d'],
      rules: [
        {
          matches: '[id="cn.soulapp.android:id/btn_sure"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12834093',
        },
      ],
    },
  ],
});
