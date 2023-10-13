import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.android.browser',
  name: '小米浏览器',
  groups: [
    {
      key: 0,
      name: '关闭[个性推荐开启提示]',
      activityIds: ['com.android.browser.BrowserActivity'],
      rules: [
        {
          matches:
            '@ImageView[id!=null][clickable=true] -2 [text="个性推荐获得更丰富内容"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12829403',
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '关闭[卡片广告]',
      desc: '点击右侧X-弹出原因-点击【不感兴趣】',
      activityIds: [
        'com.android.browser.BrowserActivity',
        'com.android.browser.flow.view.FeedbackDialog',
        'com.android.browser.homepage.infoflow.InfoFlowVideoActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '[id = "com.android.browser:id/ee" || id = "com.android.browser:id/ad_feed_back" ]',
          snapshotUrls: [
          'https://gkd-kit.songe.li/import/12893622',
          'https://gkd-kit.songe.li/import/12893649',
          'https://gkd-kit.songe.li/import/12893677',
          ],
        },
        {
          prekey: [0,1],
          matches:
            '@TextView[text="不感兴趣"] < ViewGroup < FrameLayout + FrameLayout [text="出现过于频繁"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12893693',
            'https://gkd-kit.songe.li/import/12893637',
          ],
        },
      ],
    },
  ],
});
