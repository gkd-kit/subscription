import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  deprecatedKeys: [0, 3],
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          quickFind: true,
          matches: '[id="com.cainiao.wireless:id/draw_dialog_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12914371',
            'https://i.gkd.li/import/13692758',
          ],
        },
        {
          key: 1,
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            'View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13042279',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-包裹页面-地图底部横条广告',
      activityIds: [
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      ],
      rules: 'View[desc="立即查看"] +2 ImageView[id=null]',
      snapshotUrls: ['https://i.gkd.li/import/12914450'],
    },
    {
      key: 4,
      name: '更新提示',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      ],
      rules: '[text="确认"] - [text="取消"]',
      snapshotUrls: ['https://i.gkd.li/import/13042207'],
    },
    {
      key: 5,
      name: '通知提示',
      desc: '自动点击关闭。',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      ],
      rules: '[id="com.cainiao.wireless:id/gg_dialog_base_close"]',
      snapshotUrls: ['https://i.gkd.li/import/13068573'],
    },
    {
      key: 6,
      name: '评价提示',
      activityIds: 'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      rules: '@[text="取消"] + [text="好评"]',
      snapshotUrls: 'https://i.gkd.li/import/13692761',
    },
    {
      key: 7,
      name: '全屏广告-发现页新装试用弹窗',
      desc: '点击X',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: 'View[childCount=2][clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/14033859',
        },
      ],
    },
  ],
});
