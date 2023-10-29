import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.docs',
  name: '腾讯文档',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.docs.DocsFlutterActivity',
      matchLauncher: true,
      rules: '@LinearLayout > [id="com.tencent.docs:id/tv_gdt_ad_text"]',
      snapshotUrls: 'https://i.gkd.li/import/13198082',
    },
  ],
});
