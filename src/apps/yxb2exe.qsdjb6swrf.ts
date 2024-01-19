import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'yxb2exe.qsdjb6swrf',
  name: '银杏视频',
  groups: [
    {
      key: 2,
      name: '权限提示-获取文件存储权限失败',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.yxmaadddf21.yxmaadddf21.MainActivity',
          matches:
            '@Button[text="OK"] <<11 [id="android:id/parentPanel"] >4 [text^="获取文件存储权限失败"]',
          snapshotUrls: 'https://i.gkd.li/import/13990914',
        },
      ],
    },
    {
      key: 3,
      name: '通知提示',
      matchTime: 10000,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.yxmaadddf21.yxmaadddf21.MainActivity',
          matches:
            '@[text="我知道了"] <2 ViewGroup - [text="银杏官网: yyxxok.com"]',
          snapshotUrls: 'https://i.gkd.li/import/13990959',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-播放前广告',
      quickFind: true,
      rules: [
        {
          activityIds: 'com.yxmaadddf21.yxmaadddf21.MainActivity',
          matches: '@ViewGroup > TextView[text=""]',
          snapshotUrls: 'https://i.gkd.li/import/13990893',
        },
      ],
    },
  ],
});
