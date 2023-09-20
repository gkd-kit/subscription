import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.didikee.gifparser',
  name: 'GIF助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gif.SplashAdActivity',
      rules: [
        {
          matches:
            '[id="com.didikee.gifparser:id/skip_view"][text^="跳过"][clickable=true]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12674390'],
        },
      ],
    },
    /*
    {
      enable: false, // app 关闭按钮无效，点击不感兴趣仍然无法关闭广告
      key: 999,
      name: '处理进度-底部广告',
      activityIds: 'com.gif.process.ProcessingActivity',
      rules: [
        {
          key: 0,
          matches: 'Image[id=null] < @View +(2) View >(3) [text*="广告"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12674424',
            'https://gkd-kit.gitee.io/import/12674435',
          ],
        },
        {
          key: 1,
          matches: 'Image[id=null] < @View + View >(2) [text="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12674464'],
        },
        {
          key: 2,
          matches: 'Image[id=null] < @View - View >(2) [text="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12674473'],
        },
        {
          key: 3,
          matches: 'Image[id=null] < @View -(3) View >(2) [text="广告"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12674604'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 10,
          matches: '[id="com.byted.pangle:id/tt_item_tv"][text="不感兴趣"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12674540'],
        },
      ],
    },
    */
  ],
});
