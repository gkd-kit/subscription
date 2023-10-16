import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lemon.lv',
  name: '剪映',
  groups: [
    {
      key: 0,
      name: '下方广告',
      desc: '关闭完成导出后的下方广告',
      matchLauncher: false,
      quickFind: false,
      activityIds: 'com.vega.export.edit.view.ExportActivity',
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_native_video_frame"] < FrameLayout < FrameLayout -2 FlattenUIImage',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12911010',
        },
      ],
    },
  ],
});
