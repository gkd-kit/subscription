import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.xiaomi.market',
  name: '小米应用商店',
  groups: [
    {
      key: 0,
      name: '首页悬浮窗广告',
      activityIds: 'com.xiaomi.market.ui.FloatWebActivity',
      rules: 'Button[text="关闭"]',
    },
    {
      enable: false,
      key: 10,
      name: '忽略升级',
      desc: '应用升级界面-自动点击忽略',
      exampleUrls: '', // 如何上传 gif?
      activityIds: 'com.xiaomi.market.ui.UpdateListActivity',
      rules: [
        {
          key: 0,
          matches:
            '[id="com.xiaomi.market:id/fold_text"][text^="查看全部升级"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12674261',
        },
        {
          key: 1,
          matches:
            '[id="com.xiaomi.market:id/expandable_textview"] + [id="com.xiaomi.market:id/expand_button"][desc="更多"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12674264',
        },
        {
          preKeys: [1],
          key: 2,
          matches:
            '@[id="com.xiaomi.market:id/ignore_this"][text="忽略本次"] + [id="com.xiaomi.market:id/ignore_permanently"][text="永久忽略"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12674269',
        },
      ],
    },
  ],
});
