import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingdong.pdj',
  name: '京东到家',
  groups: [
    {
      key: 1,
      name: '首页广告弹窗',
      matchTime: 10000,
      activityIds: 'pdj.main.MainActivity',
      rules: [
        {
          key: 0,
          matches: 'WebView[text="京东到家"] >7 TextView[text=""]',
          snapshotUrls: 'https://i.gkd.li/import/13217796',
        },
        {
          key: 1,
          quickFind: true,
          matches: '[id="com.jingdong.pdj:id/ivClose"][desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13223282',
        },
      ],
    },
    {
      key: 2,
      name: '更新弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.jingdong.pdj.plunginupdate.update.UpdateDialogActivity',
      rules: 'Button[text="暂不安装"]',
      snapshotUrls: 'https://i.gkd.li/import/13217634',
    },
  ],
});
