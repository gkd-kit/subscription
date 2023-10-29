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
        'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
        'com.taobao.android.detail.wrapper.activity.DetailActivity',
      ],
      rules: '[desc^="限时福利"] < FrameLayout + [desc="关闭按钮"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12642792', // activityId: com.taobao.tao.welcome.Welcome
        'https://gkd-kit.gitee.io/import/12648734', // activityId: com.taobao.android.tbabilitykit.pop.StdPopContainerActivity
        'https://gkd-kit.gitee.io/import/12648746', // activityId: com.taobao.android.detail.wrapper.activity.DetailActivity
      ],
    },
    {
      key: 2,
      name: '消息页面-热门活动卡片',
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules: '[desc="热门活动抢先看"] +(6) FrameLayout > TextView',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642795',
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
    {
      key: 12,
      name: '菜鸟页面-下次从首页找到',
      activityIds: 'com.alibaba.triver.container.TriverMainActivity',
      rules: '@TextView[id="com.taobao.taobao.triver_taobao:id/close_image"] - RelativeLayout[id="com.taobao.taobao.triver_taobao:id/add_window"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13197362',
    },
    {
      key: 13,
      name: '消息页面-开启系统通知提示',
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules: 'View[text="开启系统通知，不错过桌面推送消息"] + Image["O1CN01db8geS1QXdLJRv2c3_!!6000000001986-2-tps-26-26"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13197601',
    },
  ],
});
