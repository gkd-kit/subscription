import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '阅读页面底部广告',
      rules: [
        {
          activityIds: 'com.dragon.read.ad.banner.ui',
          matches: '@[clickable=true] TextView[text="关闭此条广告"]',
        },
        {
          activityIds: 'com.dragon.read.reader.ReaderActivity',
          matches: '@ImageView - LinearLayout TextView[text="广告"]',
        },
        {
          activityIds: 'com.dragon.read.reader.ui.ReaderActivity',
          matches:
            '[id="com.dragon.read:id/root_view"] >n ViewGroup > @FrameLayout[id!=null][clickable=true] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12716444',
        },
      ],
    },
    {
      key: 1,
      name: '更新弹窗',
      activityIds: 'com.dragon.read.update',
      rules: '@[text="以后再说"] + [text="优先体验"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716477',
    },
    {
      key: 2,
      name: '右侧悬浮红包',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules:
        '[id="com.dragon.read:id/action_bar_root"] >n RelativeLayout > ImageView[id!=null][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716506',
    },
    {
      enable: false,
      key: 10,
      name: '请求通知权限弹窗',
      desc: '自动点击【取消】',
      activityIds: 'com.dragon.read.widget.ConfirmDialogBuilder',
      rules:
        '@[text="取消"] < LinearLayout -2 LinearLayout > [text="开启推送提醒"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12716592',
    },
    {
      key: 11,
      name: '广告弹窗',
      desc: '自动点击【X】',
      activityIds: 'com.dragon.read.pages.main.MainFragmentActivity',
      rules:
        'FrameLayout > LinearLayout > ImageView[id !=null &&clickable =true ]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12878266',
    },
  ],
});
