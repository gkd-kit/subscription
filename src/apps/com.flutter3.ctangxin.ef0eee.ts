import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flutter3.ctangxin.ef0eee', // 注意 appId 有随机后缀, 需修改为你自己的 appId
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
      name: '广告弹窗',
      matchDelay: 6000, // 待无法跳过的5s开屏广告过后，能够主动执行匹配
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
      name: '公告弹窗',
      matchDelay: 6000,
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: [
        {
          action: 'back',
          matches: '@[desc="取消"][clickable=true] + [desc="确定"]',
          snapshotUrls: 'https://i.gkd.li/import/12836854',
        },
      ],
    },
  ],
});
