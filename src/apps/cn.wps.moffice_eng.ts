import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.wps.moffice_eng',
  name: 'WPS',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'cn.wps.moffice.documentmanager.PreStartActivity',
      rules: '[id=`cn.wps.moffice_eng:id/splash_skip`]',
    },
    {
      key: 1,
      name: '首页-文档列表广告',
      exampleUrls: [
        'https://github.com/gkd-kit/subscription/assets/38517192/57787554-0443-4bc0-9f29-1759aae07b9b',
      ],
      activityIds: [
        'cn.wps.moffice.main.StartPublicActivity',
        'cn.wps.moffice.main.local.HomeRootActivity',
      ],
      rules: [
        {
          matches: '[text="关闭当前广告"||text="不喜欢此广告"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12505365',
            'https://gkd-kit.songe.li/import/12882277',
          ],
        },
        {
          matches: '[id$="/nativeclose"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12505350',
            'https://gkd-kit.gitee.io/import/12505286',
          ],
        },
      ],
    },
    {
      enable: false,
      key: 2,
      name: '升级提示',
      activityIds:
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      rules:
        '[id="cn.wps.moffice_eng:id/close_new_func_guide_dialog_imageView"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12882371',
    },
  ],
});
