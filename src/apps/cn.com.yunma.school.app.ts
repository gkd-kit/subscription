import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.com.yunma.school.app',
  name: '易校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.com.yunma.school.app',
      matchLauncher: true,
      rules:
        '[id="cn.com.yunma.school.app:id/iv_advert"] + [id="cn.com.yunma.school.app:id/skip"]',
      snapshotUrls: 'https://i.gkd.li/import/13178276',
    },
  ],
});
