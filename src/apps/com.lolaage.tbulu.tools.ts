import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lolaage.tbulu.tools',
  name: '两步路户外助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.lolaage.tbulu.tools:id/skipPart"]',
          snapshotUrls: 'https://i.gkd.li/import/12882538',
        },
        {
          name: '腾讯SDK',
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: 'https://i.gkd.li/import/13627060',
        },
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.lolaage.tbulu.tools.upgrade',
      rules:
        '[id="com.lolaage.tbulu.tools:id/tvFullUpgrade"] + [id="com.lolaage.tbulu.tools:id/tvCancel"]',
      snapshotUrls: 'https://i.gkd.li/import/12882550',
    },
    {
      key: 6,
      name: '首页广告弹窗',
      desc: '来自腾讯广告SDK',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.lolaage.tbulu.tools.ui.activity.WelcomeActivity',
      rules:
        'FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]',
      snapshotUrls: 'https://i.gkd.li/import/13627061',
    },
  ],
});
