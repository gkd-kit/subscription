import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.mygolbs.mybus',
  name: '掌上公交',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.mygolbs.mybus.LoginActivity',
      rules: '[id="com.mygolbs.mybus:id/splash_container"] >n [text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12745634',
    },
    {
      key: 2,
      name: '开屏广告_2', //text为跳过
      activityIds: ['com.mygolbs.mybus.LoginActivity'],
      rules: [
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790377',
        },
      ],
    },
    {
      key: 3,
      name: '开屏广告_3', //text为null
      activityIds: ['com.mygolbs.mybus.LoginActivity'],
      rules: [
        {
          matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790485',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【取消】',
      activityIds: 'com.mygolbs.mybus.defines.CustomDialog',
      rules: [
        {
          matches: [
            '[text$="开启通知权限"]',
            '@[id="com.mygolbs.mybus:id/view_neg"] > [text="取消"]',
          ],
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12715980',
        },
      ],
    },
    {
      enable: false,
      key: 11,
      name: '签到成功弹窗',
      desc: '自动点击x按钮',
      activityIds: 'com.mygolbs.mybus.guligold.SignSuccessActivity',
      rules:
        '@[id="com.mygolbs.mybus:id/iv_close"] < RelativeLayout - LinearLayout >n [text="签到成功"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716035',
    },
    {
      key: 21,
      name: '首页广告_1，兼容收藏', //百毒联盟
      activityIds: ['com.mygolbs.mybus.NewHomePageActivity'],
      rules: [
        {
          matches: '[name="android.widget.ImageView"][text=null][index=2][width=44]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790521',
        },
        {
          matches: '[text="虚假欺诈"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790551',
        },
      ],
    },
    {
      key: 22,
      name: '首页广告_2', //字节穿山甲
      activityIds: ['com.mygolbs.mybus.NewHomePageActivity'],
      rules: [
        {
          matches: '[name="android.widget.Image"][text=""][width=41]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790656',
        },
        {
          matches: '[text="诱导点击"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790671',
        },
      ],
    },
    {
      key: 31,
      name: '搜索广告_1', //字节穿山甲
      activityIds: ['com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity'],
      rules: [
        {
          matches: '[name="android.widget.Image"][text=""][width=33]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790610',
        },
        {
          matches: '[text="虚假欺诈"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790616',
        },
      ],
    },
    {
      key: 32,
      name: '搜索广告_2', //百毒联盟
      activityIds: ['com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity', 'com.mygolbs.mybus.NewHomePageActivity'],
      rules: [
        {
          matches: '[name="android.widget.ImageView"][index=2][width=44]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790706',
        },
        {
          matches: '[text="虚假欺诈"]',
          snapshotUrls: [
            'https://gkd-kit.vercel.app/import/12790707',
            'https://gkd-kit.vercel.app/import/12790717',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '随机弹窗_1', //腾讯广告
      activityIds: ['com.mygolbs.mybus.mapsearch.poisearch.PoiSearchActivity', 'com.mygolbs.mybus.NewHomePageActivity'],
      rules: [
        {
          matches: '[name="android.widget.ImageView"][width=58]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790762',
        },
      ],
    },
    {
      key: 51,
      name: '定位权限', //权限请求
      activityIds: ['com.mygolbs.mybus.defines.CustomDialog'],
      rules: [
        {
          matches: '[id="com.mygolbs.mybus:id/negativeButton"][text="取消"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790762',
        },
      ],
    },
    {
      key: 52,
      name: '实时车辆底部百度推广', //实时车辆底部百度推广自动回
      activityIds: ['com.mygolbs.mybus.RTimeActivity'],
      rules: [
        {
          matches: '[id="com.mygolbs.mybus:id/img_turnup"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12791122',
        },
      ],
    },
    {
      key: 61,
      name: '实时车辆_1', //未知,顶栏小广告
      activityIds: ['com.mygolbs.mybus.RTimeActivity'],
      rules: [
        {
          matches: '[id="com.mygolbs.mybus:id/ad_close2"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790841',
        },
      ],
    },
    {
      key: 62,
      name: '实时车辆_2', //底部,百毒联盟
      activityIds: ['com.mygolbs.mybus.RTimeActivity'],
      rules: [
        {
          matches: '[name="android.widget.ImageView"][index=2][width=44][height=33]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790841',
        },
        {
          matches: '[text="虚假欺诈"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790857',
        },
      ],
    },
    {
      key: 63,
      name: '实时车辆_3', //底部,字节穿山甲
      activityIds: ['com.mygolbs.mybus.RTimeActivity'],
      rules: [
        {
          matches: '[name="android.widget.Image"][text=""][width=41]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790941',
        },
        {
          matches: '[text="虚假欺诈"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790972',
        },
      ],
    },
    {
      key: 71,
      name: '站台页面_1', //底部,百毒联盟
      activityIds: ['com.mygolbs.mybus.StationsResultActivityNew'],
      rules: [
        {
          matches: '[name="android.widget.ImageView"][index=2][width=44][height=33]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790887',
        },
        {
          matches: '[text="虚假欺诈"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790913',
        },
      ],
    },
    {
      key: 72,
      name: '站台页面_2', //底部,字节穿山甲
      activityIds: ['com.mygolbs.mybus.StationsResultActivityNew'],
      rules: [
        {
          matches: '[name="android.widget.Image"][text=""][width=31]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790903',
        },
        {
          matches: '[text="虚假欺诈"]',
          snapshotUrls: 'https://gkd-kit.vercel.app/import/12790926',
        },
      ],
    },
  ],
});
