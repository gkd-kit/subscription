import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.androidqqmail',
  name: 'qq邮箱',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      activityIds: 'com.tencent.qqmail.launcher.desktop.LauncherActivity',
      rules: 'RelativeLayout > ImageView[id!=null] + ImageView[id!=null]',
      snapshotUrls: 'https://gkd-kit.songe.li/import/12775855',
    },
    {
      key: 0,
      name: '广告邮件-列表卡片广告',
      activityIds: 'com.tencent.qqmail.fragment.base.MailFragmentActivity',
      rules: [
        'TextView[text=`赞助商提供的广告`] <n FrameLayout <n ListView[id=`com.tencent.androidqqmail:id/pop_up_list`] TextView[text=`不感兴趣`]',
        '[id=`com.tencent.androidqqmail:id/advertise_view_ad`]',
      ],
    },
  ],
});
