import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tmall.wireless',
  name: '手机天猫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchLauncher: true,
      activityIds: 'com.tmall.wireless.maintab.module.TMMainTabActivity',
      rules: '[id="com.tmall.wireless:id/splash_ad_txt_skip"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13162604',
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      activityIds: 'com.tmall.wireless.splash.TMSplashActivity',
      rules: '[id="com.tmall.wireless:id/update_button_cancel"] [text="取消"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13162603',
    },
    {
      key: 2,
      name: '弹窗广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.tmall.wireless.maintab.module.TMMainTabActivity',
      rules: 'Image[id=null][clickable=false] < View + Image[id=null][clickable=true]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/13222394',
        'https://gkd-kit.gitee.io/import/13222500',
        'https://gkd-kit.gitee.io/import/13222510',
        'https://gkd-kit.gitee.io/import/13222527',
      ],
    },
  ],
});
