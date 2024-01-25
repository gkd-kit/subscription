import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.jingcai.apps.qualitydev',
  name: '到梦空间',
  groups: [
    {
      key: 0,
      name: '全屏广告-学习活动',
      desc: '开屏后屏幕下方的弹窗广告',
      quickFind: true,
      activityIds:
        'com.jingcai.apps.qualitydev.qualitync.activity_home.ActivityMainTab',
      rules: 'TextView[text="关闭"][clickable=true][id$="id/tv_step"]',
      snapshotUrls: 'https://i.gkd.li/import/14054117',
    },
  ],
});
