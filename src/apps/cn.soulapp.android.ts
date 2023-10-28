import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.soulapp.android',
  name: 'Soul',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      activityIds: [
        'cn.soulapp.android.ad.ui.HotAdActivity',
        'cn.soulapp.android.component.startup.main.MainActivity',
      ],
      rules: [
        {
          action: 'clickCenter', //action=clickNode会造成点击失败，疑似GKD v1.41前版本问题
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12833280',
            'https://gkd-kit.gitee.io/import/12850094',
          ],
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
    {
      key: 2,
      name: '广场页卡片广告',
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="cn.soulapp.android:id/sl_ad_root"] >n [id="cn.soulapp.android:id/fl_tag_container"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12838000',
        },
      ],
    },
  ],
});
