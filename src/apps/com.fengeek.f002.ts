import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fengeek.f002',
  name: 'fiil+',
  groups: [
    {
    key: 1,
    name: '首页-文档列表广告',
    activityIds: ['com.fengeek.f002.WelcomeActivity'],
    rules: [
      {
        matches: '[text$=	"跳过"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/13068924',
      },
    ],
  }
  ],
});