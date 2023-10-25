import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sina.weibolite',
  name: '微博极速版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: [
        'com.weico.international.ui.ad.AdActivity',
        'com.weico.international.activity.LogoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '开屏广告1',
          matches: 'LinearLayout > TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12738090',
        },
        {
          key: 1,
          name: '开屏广告2',
          matches: 'TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13146158',
        },
      ],
    },
    {
      key: 1,
      name: '信息流广告',
      desc: '点击广告卡片右上角x图标,点击[不感兴趣]',
      activityIds: 'com.weico.international.activity.MainFragmentActivity',
      rules: [
        {
          key: 0,
          name: '点击广告卡片右上角x图标',
          matches: '[id="com.sina.weibolite:id/item_timeline_ad_action"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12738110',
        },
        {
          preKeys: 0,
          name: '点击[不感兴趣]',
          matches:
            '@View[clickable=true][childCount=1] > TextView[text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12738132',
        },
      ],
    },
  ],
});
