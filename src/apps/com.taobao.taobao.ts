import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.taobao.bootimage.activity.BootImageActivity',
      rules: '[id="com.taobao.taobao:id/close"]', // 1687596777612
    },
    {
      enable: false,
      key: 1,
      name: '限时福利弹窗',
      activityIds: [
        'com.taobao.tao.welcome.Welcome',
        'com.taobao.tao.TBMainActivity',
        'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
        'com.taobao.android.detail.wrapper.activity.DetailActivity',
      ],
      rules: '[desc^="限时福利"] < FrameLayout + [desc="关闭按钮"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642792', // activityId: com.taobao.tao.welcome.Welcome
        'https://gkd-kit.gitee.io/import/13180826', // activityId: com.taobao.tao.TBMainActivity
        'https://gkd-kit.gitee.io/import/12648734', // activityId: com.taobao.android.tbabilitykit.pop.StdPopContainerActivity
        'https://gkd-kit.gitee.io/import/12648746', // activityId: com.taobao.android.detail.wrapper.activity.DetailActivity
      ],
    },
    {
      key: 2,
      name: '消息页面-热门活动卡片',
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules: 'View[desc.length>0] +2n FrameLayout > TextView[text="퀺"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642795',
        'https://i.gkd.li/import/13197877',
      ],
    },
    {
      enable: false,
      key: 8,
      name: '开启系统通知提示',
      desc: '自动点击关闭',
      activityIds: ['com.taobao.tao.welcome.Welcome'],
      rules: 'View[text^="开启系统通知"] + Image[clickable=true]',
      snapshotUrls: ['https://i.gkd.li/import/13197594'],
    },
    {
      enable: false,
      key: 9,
      name: '各级页面-添加到首页弹窗',
      desc: '自动点击退出',
      quickFind: true,
      activityIds: [
        'com.taobao.themis.container.app.TMSActivity',
        'com.alibaba.triver.container.TriverMainActivity',
      ],
      rules: 'TextView[text="去首页"] + TextView[text="退出"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13197553',
        'https://i.gkd.li/import/13197546',
      ],
    },
    {
      key: 10,
      name: '视频页面-活动弹窗',
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules:
        'View[id=null] > [text="立即参加"] + TextView[id=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642813',
    },
    {
      enable: false,
      key: 11,
      name: '视频页面-签到弹窗',
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules: '@View[clickable=true] - View > View > TextView[text="立即签到"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642798',
    },
  ],
});
