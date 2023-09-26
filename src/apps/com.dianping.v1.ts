import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.dianping.v1.NovaMainActivity',
        'com.dianping.main.guide.SplashActivity',
      ],
      rules: '[id=`com.dianping.v1:id/new_skip`]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12726928', // 对应第二条activityIds
      // 缺第一条activityIds对应的快照
      // 上面两条activityIds，在截快照时交替出现，故都放在判定条件里
    },
    {
      key: 1,
      name: '主页推荐关注弹窗',
      activityIds: [
        'com.dianping.main.guide.SplashActivity',
        'com.dianping.v1.NovaMainActivity',
      ],
      rules: '[id=null][desc="关闭"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12727011', // 对应第二条activityIds
      // 缺第一条activityIds对应的快照
    },
    {
      key: 2,
      name: '消息页上方开启系统通知提醒',
      activityIds: [
        'com.dianping.v1.NovaMainActivity',
        'com.dianping.main.guide.SplashActivity',
      ],
      rules: {
        matches: '[text="去开启"] +2 FrameLayout[clickable=true]',
        action: 'clickCenter', // clickNode无响应
      },
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12727070', // 对应第二条activityIds
      // 缺第一条activityIds对应的快照
    },
    {
      key: 3,
      name: '签到领红包悬浮窗',
      activityIds: [
        'com.dianping.v1.NovaMainActivity',
        'com.dianping.main.guide.SplashActivity',
      ],
      rules: '[id="com.dianping.v1:id/close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12727366', // 对应第一条activityIds
      // 缺第二条activityIds对应的快照
    },
  ],
});
