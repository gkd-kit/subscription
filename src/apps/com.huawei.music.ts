import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huawei.music',
  name: '华为音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.android.mediacenter.PageActivity'],
      rules: [
        {
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          action: 'clickCenter',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12745222'],
        },
      ],
    },
    {
      key: 1,
      name: '首页横幅广告',
      quickFind: true,
      activityIds: [
        'com.huawei.android.launcher.unihome.UniHomeLauncher',
        'com.android.mediacenter.MainActivity',
      ],
      rules: [
        {
          matches: 'Textview[id="com.huawei.music:id/ad_banner_tag"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13068287',
            'https://gkd-kit.gitee.io/import/13067243',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '广告反馈下拉窗',
      quickFind: true,
      activityIds: ['com.huawei.openalliance.ad.activity.FeedbackActivity'],
      rules: [
        {
          matches:
            'TextView[text="直接关闭"&&id="com.huawei.music:id/label_title"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13067574',
            'https://gkd-kit.gitee.io/import/13067572',
            'https://gkd-kit.gitee.io/import/13067571',
            'https://gkd-kit.gitee.io/import/13067659',
            'https://gkd-kit.gitee.io/import/13067665',
            'https://gkd-kit.gitee.io/import/13067820',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '播放界面直播浮窗',
      quickFind: true,
      activityIds: ['com.android.mediacenter.MainActivity'],
      rules: [
        {
          matches:
            'TextView[id="com.huawei.music:id/live_info"] < LinearLayout -2 [id="com.huawei.music:id/close_button"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/13067649'],
        },
      ],
    },
    {
      key: 4,
      name: '播放（音乐、视频）页面广告',
      quickFind: true,
      activityIds: ['com.android.mediacenter.MainActivity'],
      rules: [
        {
          matches:
            'Textview[id="com.huawei.music:id/ad_icon"&&visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13067806',
            'https://gkd-kit.gitee.io/import/13067956',
            'https://gkd-kit.gitee.io/import/13067978',
            'https://gkd-kit.gitee.io/import/13067387',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '评论区广告',
      quickFind: true,
      activityIds: [
        'com.android.mediacenter.comment.ui.CommentListMainActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.music:id/ad_icon"]',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/13067937'],
        },
      ],
    },
    {
      key: 6,
      name: '视频播放页广告反馈',
      quickFind: true,
      activityIds: ['com.android.mediacenter.MainActivity'],
      rules: [
        {
          matches: 'TextView[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13067986',
            'https://gkd-kit.gitee.io/import/13067981',
          ],
        },
      ],
    },
  ],
});
