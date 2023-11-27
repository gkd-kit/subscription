import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.handsgo.jiakao.android',
  name: '驾考宝典',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id=`com.handsgo.jiakao.android:id/closeLayout`]', // 缺少快照
    },
  ],
});
