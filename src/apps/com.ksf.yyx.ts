import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ksf.yyx',
  name: 'OMOFUN',

  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '[id="com.ksf.yyx:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775918',
        },
        {
          matches: '[text="|"] + ImageView',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12775919'],
        },
      ],
    },
    {
      key: 1,
      name: '首页通知',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '[desc="我知道了"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775920',
        },
      ],
    },
    {
      key: 2,
      name: '插屏广告1',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          action: 'clickCenter',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775921',
        },
      ],
    },
    {
      key: 3,
      name: '插屏广告2',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '@ViewGroup [text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775922',
        },
      ],
    },
    {
      key: 4,
      name: '插屏广告3',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          action: 'clickCenter',
          matches: '@ViewGroup[clickable=true][childCount=1] ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775923',
        },
      ],
    },
    {
      key: 5,
      name: '插屏广告4',
      activityIds: ['com.sigmob.sdk.base.common.TransparentAdActivity'],
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775924',
        },
      ],
    },
    {
      key: 6,
      name: '插屏广告5',
      activityIds: ['com.sigmob.sdk.base.common.TransparentAdActivity'],
      rules: [
        {
          matches: '[id="close_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775925',
        },
      ],
    },
    {
      key: 7,
      name: '开屏广告2',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '[text *= "跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775926',
        },
      ],
    },
  ],
});
