import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lenovo.browser.hd',
  name: '联想浏览器HD',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '[text="发现新版本"] - * > [id="com.lenovo.browser.hd:id/fl_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13401982',
    },
  ],
});
