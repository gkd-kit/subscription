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
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.tencent.docs.DocsFlutterActivity',
      rules: '@[desc="暂不更新"] + [desc="现在更新"]',
      snapshotUrls: 'https://i.gkd.li/import/13198091',
    },
  ],
});
