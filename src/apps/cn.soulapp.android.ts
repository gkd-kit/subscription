import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.soulapp.android',
  name: 'Soul',
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
          action: 'clickCenter', // 在极少数情况下, 即使节点是 clickable 的, APP 也不会响应节点点击事件, 此时需要手动设置 `clickCenter`
          matches: '[id="cn.soulapp.android:id/c_ad_skip_view_btn"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12833280',
            'https://i.gkd.li/import/12850094',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="cn.soulapp.android:id/btn_sure"]',
          snapshotUrls: 'https://i.gkd.li/import/12834093',
        },
      ],
    },
    {
      key: 2,
      name: '广场页卡片广告',
      quickFind: true,
      activityIds: ['cn.soulapp.android.component.startup.main.MainActivity'],
      rules: [
        {
          matches:
            '[id="cn.soulapp.android:id/sl_ad_root"] >n [id="cn.soulapp.android:id/fl_tag_container"]',
          snapshotUrls: 'https://i.gkd.li/import/12838000',
        },
      ],
    },
    {
      key: 3,
      name: 'app评分',
      quickFind: true,
      activityIds: ['cn.soulapp.android.component.chat.ConversationActivity'],
      rules: [
        {
          matches:
            '[id="cn.soulapp.android:id/score_message"] +3 [id="cn.soulapp.android:id/cancel"]',
          snapshotUrls: 'https://i.gkd.li/import/13425057',
        },
      ],
    },
  ],
});
