import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'xxxxx',
  name: 'xxxx',
  groups: [
    {
      key: 0,
      name: 'xxxx',
      desc: 'xxxx',
      matchLauncher: true,
      quickFind: true, //选择器的focus=true
      activityIds: 'xxxx',
          rules: [
            {
              matches: 'xxxxx', //[id="xx" || id="xx"], [text="xx"] +n * > * > [text="xx"] *指代全部
              snapshotUrls: 'xxxxxx',
            },
          ],
    },
  ],
});
import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jsguohua.youquanmall.tt',
  name: '图图影视',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchLauncher: true,
      quickFind: true,
      activityIds: 'com.zero.flutter_qq_ads.page.AdSplashActivity',
          rules: [
            {
              matches: '[text="跳过 "]',
              snapshotUrls: 'https://gkd-kit.gitee.io/import/13163305',
            },
          ],
    },
    {
        key: 1,
        name: '应用内弹窗',
        activityIds: 'com.zero.flutter_qq_ads.page.AdSplashActivity',
            rules: [
              {
                matches: '[text="去微信看看"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView',
                snapshotUrls: 'https://gkd-kit.gitee.io/import/13163314',
              },
            ],
      },
  ],
});
