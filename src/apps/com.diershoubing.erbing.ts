import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.diershoubing.erbing',
  name: '二柄',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '@[id="com.byted.pangle:id/tt_splash_skip_btn"] <<n [id="com.diershoubing.erbing:id/containerV"]',
      snapshotUrls: 'https://i.gkd.li/import/13378853',
    },
  ],
});
