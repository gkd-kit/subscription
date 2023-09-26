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
    },
    {
      key: 1,
      name: '主页推荐关注弹窗',
      activityIds: 'com.dianping.main.guide.SplashActivity',
      rules: '[id=null][desc="关闭"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12727011',
    },
    {
      key: 2,
      name: '消息页上方开启系统通知提醒',
      activityIds: 'com.dianping.main.guide.SplashActivity',
      rules: '[text="去开启"] +2 FrameLayout[clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12727070',
    },
  ],
});
