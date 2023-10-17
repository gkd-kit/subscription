import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flutter3.ctangxin.vf0egg',
  name: '糖心Vlog',
  groups: [
    {
      enable: false,
      key: 0,
      name: '开屏广告',
      desc: '虚假按钮，实际点击无法跳过，规则暂时保留',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: [
        {
          matches:
            'FrameLayout > View > View > View > View > @View[clickable=true && desc.length=2] + ImageView[childCount=1]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12836857',
        },
      ],
    },
    {
      key: 1,
      name: '广告弹窗',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: [
        {
          matches:
            'FrameLayout > View > View > View[index=0] > View > ImageView[childCount=1] + View[clickable=true && desc=null]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12836854',
        },
      ],
    },
    {
      key: 2,
      name: '公告弹窗',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: [
        {
          matches: '@[desc="取消"][clickable=true] + [desc="确定"]',
          snapshotUrls: 'https://gkd-kit.songe.li/import/12836891',
        },
      ],
    },
  ],
});
