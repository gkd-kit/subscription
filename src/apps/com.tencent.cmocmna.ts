import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.cmocmna',
  name: '腾讯手游加速器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.tencent.mocmna.activity.MainActivity',
      matchLauncher: true,
      quickFind: true,
      rules: '[text$="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12847303',
    },
});
