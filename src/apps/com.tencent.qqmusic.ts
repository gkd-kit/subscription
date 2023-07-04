import type { AppConfig } from '../types';

export default <AppConfig>{
  id: 'com.tencent.qqmusic',
  groups: [
    {
      key: 0,
      name: 'QQ音乐-开屏广告',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: 'TextView[text=`跳过`]',
    },
    {
      key: 1,
      name: 'QQ音乐-推荐页-广告卡片',
      activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
      rules: `@LinearLayout[isClickable=true] > TextView[text='广告'] + ImageView`, // 1688045698846
    },
  ],
};
