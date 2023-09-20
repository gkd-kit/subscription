import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'net.csdn.csdnplus',
  name: 'CSDN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'net.csdn.csdnplus.activity.SplashActivity',
      rules: 'TextView[text*="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12668884',
    },
    {
      key: 1,
      name: '推荐条目广告',
      activityIds: 'net.csdn.csdnplus.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches: 'TextView[text="广告"] + @ImageView[id*="more"][clickable=true]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12668903',
        },
        {
          key: 1,
          matches: 'TextView[text="内容素材质量较低"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12668923',
        },
      ],
    },
  ],
});
