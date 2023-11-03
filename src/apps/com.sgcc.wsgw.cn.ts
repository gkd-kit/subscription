import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 1,
      name: '首页弹窗广告',
      matchLauncher: true,
      activityIds: [
        'com.sgcc.wsgw.mainbundle.NewsSyRemind2Activity',
        'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity'
      ],
      rules: [
        {
          key: 1,
          actionCd: 2000,
          matches: '@[focusable=true][checked=false] + [text="今日不再出现"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12745042',
            'https://gkd-kit.gitee.io/import/13247655',
            'https://gkd-kit.gitee.io/import/13247655',
            ],
        },
        {
          preKeys: 1,
          key: 2,
          actionDelay: 300, //测试时没有delay点击失效
          matches: 'ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13247655',
            'https://gkd-kit.gitee.io/import/13247655',
            ],
        },
        {
          preKeys: 1,
          key: 3,
          actionDelay: 300,
          matches: '[id="com.sgcc.wsgw.cn:id/news_remind_laytout"] >n [id="com.sgcc.wsgw.cn:id/btn_remind_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12745042',
            ],
        },
  ],
    },
  ],
});
