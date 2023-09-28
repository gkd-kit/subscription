import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sfexpress.sfim',
  name: '丰声',
  groups: [
    {
      enable: false,
      key: 10,
      name: 'CAS安全认证-自动登录',
      desc: '自动点击【登录】按钮',
      activityIds: [
        'com.sfexpress.sfim.scan.view.SfScanActivity',
        'com.sfexpress.sfim.microservice.commonservice.ui.MicroAppContainerActivity',
        'com.sfexpress.sfim.sdkuikit.widget.dialog.NoticeDialog',
      ],
      rules: '[text="CAS安全认证"] >n [text="登录"]',
      snapshotUrls: [
        'https://gkd-kit.songe.li/import/12745239',
        'https://gkd-kit.songe.li/import/12745240',
        'https://gkd-kit.songe.li/import/12745241',
      ],
    },
  ],
});
