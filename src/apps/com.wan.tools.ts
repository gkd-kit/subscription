import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.wan.tools',
  name: '下载工具箱',
  groups: [
    {
      enable: false,
      key: 1,
      name: '公告弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: 'LinearLayout[childCount=2] > @[text="取消"] + [text="确认"]',
      snapshotUrls: 'https://i.gkd.li/import/13392027',
    },
  ],
});
