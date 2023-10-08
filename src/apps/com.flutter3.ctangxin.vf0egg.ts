import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.flutter3.ctangxin.vf0egg',
  name: '糖心Vlog',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: '@View[clickable=true]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12836857',
    },
    {
      key: 1,
      name: '弹窗广告',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: 'View[clickable=true]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12836891',
    },
    {
      key: 2,
      name: '公告',
      activityIds: ['com.example.flutter3_frame.MainActivity'],
      rules: 'View[desc="取消"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12836854',
    },
  ],
});