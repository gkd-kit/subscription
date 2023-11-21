import {defineAppConfig} from '../types';

export default defineAppConfig({
  id: 'com.yunmai.scale',
  name: '好轻',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      quickFind: true,
      activityIds:
        'com.yunmai.haoqing.ui.activity.welcome.LauncherPageActivity',
      rules: '[id="com.yunmai.scale:id/launcherpage_jump_tv"]',
      snapshotUrls: 'https://i.gkd.li/import/13421468',
    },
  ],
});
