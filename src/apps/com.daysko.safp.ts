import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.daysko.safp',
  name: '7天澳門統考',
  groups: [
    {
      key: 1,
      name: '谷歌广告-全屏广告',
      activityIds: 'com.google.android.gms.ads.AdActivity',
      rules: [
        {
          key: 1,
          matches: '@[text="关闭"] < View + View > [text="安装"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12642909',
        },
        {
          key: 2,
          matches: '[id="adchoiceWrap"] + [id="mv_close_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12643032',
        },
        {
          key: 3,
          matches:
            '@Button[id=null][clickable=true] < View - TextView < View + View >(7) [text="安装"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12643039',
        },
      ],
    },
    {
      key: 2,
      name: '谷歌广告-视频广告',
      desc: '点击跳过视频-点击关闭按钮',
      activityIds: ['com.google.android.gms.ads.AdActivity'],
      rules: [
        {
          key: 1,
          matches:
            'TextView[id=null][text="跳过视频"] < View +(2) View > Button[clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12642913',
        },
        {
          key: 2,
          matches: [
            'Button[id=null][clickable=true] < @View -(2) View < View - View >(n) View[desc="安装"]', // 点中间的View才会关闭广告，最后两个 View 之间的距离不确定
          ],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12642932'],
        },
        {
          key: 3,
          matches: [
            'Button[id=null][clickable=true] < @View - TextView < View - View >(n) View[desc="安装"]', // 点中间的View才会关闭广告，最后两个 View 之间的距离不确定
          ],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12642952'],
        },
        {
          key: 4,
          cd: 2500,
          activityIds: ['com.google.android.gms.ads.AdActivity'],
          matches: ['[desc="了解详情"] - View > [text="关闭"]'],
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12642983'],
        },
      ],
    },
    {
      enable: false, // 底部广告难以去除，原因未知
      key: 99,
      name: '谷歌广告-页面底部广告',
      activityIds: 'com.daysko.safp.MainActivity',
      rules: [
        {
          key: 1,
          matches: [
            'View[id="mys-wrapper"] + View >(2) Button[clickable=true]',
            'View[desc="Advertisement"] + View >(2) Button',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642993',
            'https://gkd-kit.gitee.io/import/12643001',
          ],
        },
      ],
    },
  ],
});
