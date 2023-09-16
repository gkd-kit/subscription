import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maque.app',
  name: '麻雀省钱',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.uzmap.pkg.EntranceActivity',
      rules:
        'TextView[id="com.maque.app:id/ksad_logo_text"] - ImageView < * < * -(2) LinearLayout >(3) TextView[text="跳过"]',
    },
    {
      key: 1,
      name: '首页活动弹窗',
      activityIds: 'com.uzmap.pkg.EntranceActivity',
      rules: 'ImageView + ViewGroup > ImageView[id=null]',
    },
  ],
});
