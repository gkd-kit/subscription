import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  deprecatedKeys: [3],
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
          key: 0,
          name: '开屏广告-1',
          matches: '[text^="跳过"][text.length<=4]',
          snapshotUrls: [
            'https://i.gkd.li/import/12901758',
            'https://i.gkd.li/import/12724823',
          ],
        },
        {
          key: 1,
          name: '开屏广告-2',
          matches: '[id="com.cainiao.wireless:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/import/13459538',
        },
      ],
    },
    {
      key: 1,
      name: '弹窗广告',
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
      name: '包裹页面-地图底部横条广告',
      activityIds: [
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      ],
      rules: 'View[desc="立即查看"] +2 ImageView[id=null]',
      snapshotUrls: ['https://i.gkd.li/import/12914450'],
    },
    {
      key: 4,
      name: '升级提示',
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
      name: '开启消息弹窗',
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
      name: '请求好评弹窗',
      activityIds: 'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      rules: '@[text="取消"] + [text="好评"]',
      snapshotUrls: 'https://i.gkd.li/import/13692761',
    },
    {
      key: 1,
      name: '红包弹窗',
      desc: '自动点击关闭',
      rules: [
        {
          matches: '[name="android.widget.ImageView"][id="com.cainiao.wireless:id/dialog_full_image_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13804415',
        },
      ],
    },
  ],
});
