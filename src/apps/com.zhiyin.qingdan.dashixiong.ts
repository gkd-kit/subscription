import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.zhiyin.qingdan.dashixiong',
  name: '大师兄影视',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
      matchLauncher: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: 'ImageView -n LinearLayout > [text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12843284',
        },
        {
          key: 1,
          matches:
            '[id="com.zhiyin.qingdan.dashixiong:id/ksad_splash_circle_skip_view"] > [text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12843283',
        },
      ],
    },
    {
});
