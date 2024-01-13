import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flutter3.ctangxin.vf0egg', // 注意 appId 有随机后缀, 每个版本都变，需修改为你自己的 appId
  name: '糖心Vlog',
  groups: [
    {
      enable: false,
      key: 0,
      name: '开屏广告',
      desc: '虚假按钮，实际点击无法跳过，规则暂时保留',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > View > View > View > View > @View[clickable=true && desc.length=2] + ImageView[childCount=1]',
          snapshotUrls: 'https://i.gkd.li/import/12836857',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-广告弹窗', // 目前已叠加了三层广告
      //matchDelay: 6500, // 待无法跳过的5s开屏广告过后，能够主动执行匹配
      matchTime: 10000,
      actionCd: 100,
      resetMatch: 'app',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: [
        {
          action: 'back',
          matches:
            'FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]',
          snapshotUrls: 'https://i.gkd.li/import/12836891',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-公告弹窗',
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: [
        {
          action: 'back',
          matches: '[desc="公告"] +2 [desc="取消"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12836854',
        },
      ],
    },
    {
      // key1、2的延迟工具，matchDelay如在key1、2，有时候开屏广告时切了后台，
      // 后台恢复时，界面上的弹窗就得等6.5s了
      key: 3,
      name: '全屏广告-延迟工具(协助key1、2)',
      desc: '5s开屏广告后主动触发匹配',
      matchDelay: 6500, // 时间太小会导致低性能手机赶不上
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      rules: 'TextView[text="xxxxx"]',
    },
  ],
});
