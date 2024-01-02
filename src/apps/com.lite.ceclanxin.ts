import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lite.ceclanxin',
  name: '蓝信',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击右上角的关闭按钮，关闭“丧心病狂”的开屏广告',
      activityIds: ['com.lite.lanxin.startuppage.DefaultActivity'],
      rules: [
        {
          matches: '[id="com.lite.ceclanxin:id/fullScreenTv"]',
          snapshotUrls: 'https://i.gkd.li/import/13806523',
        },
      ],
    },
  ],
});
