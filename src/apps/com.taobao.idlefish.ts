import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
      rules: '@RelativeLayout > TextView[text*="跳过广告"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12668670',
    },
  ],
});