import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cnspeedtest.globalspeed',
  name: '全球网测',
  groups: [
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.ruili.android.taierspeed.main.MainActivity',
      rules: [
        '[text="更新消息"] - ImageView < LinearLayout +(4) LinearLayout > Button[text="取消"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12642345',
    },
  ],
});
