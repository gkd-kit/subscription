import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.crirp.zhipu',
  name: '智谱',
  quickFind: true,
  groups: [
    {
      name: '启动页-广告',
      key: 1,
      enable: true,
      activityIds: 'com.ruipeng.zipu.ui.bootpage.BootPageActivity',
      rules: [
        {
          matches: '[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13725305',
        },
      ],
    },
    {
      name: '首页-今日要闻-不再提示',
      key: 2,
      desc: '【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可',
      enable: true,
      activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
      rules: [
        {
          matches: '[id$="/cancel_tv"]',
          snapshotUrls: 'https://i.gkd.li/import/13725337',
        },
      ],
    },
    {
      name: '首页-今日要闻-关闭',
      key: 3,
      desc: '【首页-今日要闻-不再提示】和【首页-今日要闻-关闭】只开启一个即可',
      enable: false,
      activityIds: 'com.ruipeng.zipu.ui.main.uniauto.UniautoHomeActivity',
      rules: [
        {
          matches: '[id$="/tv_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13725337',
        },
      ],
    },
  ],
});
