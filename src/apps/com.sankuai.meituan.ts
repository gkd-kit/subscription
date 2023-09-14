import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
      rules: 'TextView[id=`com.sankuai.meituan:id/close_btn`][text^=`跳过`]',
    },
    {
      key: 1,
      name: '版本更新弹窗',
      activityIds: 'com.meituan.android.upgrade.ui.fy',
      rules: 'TextView[text^=`新版本`] - Button[id=`com.sankuai.meituan:id/btn_close`]',
      snapshotUrls: 'https://gkd-kit.gitee.io/snapshot/1694708883305',
    },
  ],
});
