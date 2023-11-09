import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.miui.player',
  name: '小米音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules:
        '@TextView[text$=`跳过`] + TextView[id="com.miui.player:id/ad_view"]',
      snapshotUrls: [
        'https://gkd-kit.gitee.io/import/12700962',
        'https://i.gkd.li/import/12852707',
      ],
    },
    {
      key: 1,
      name: '浮窗广告',
      desc: '关闭免费20分钟提示  ',
      activityIds:
        'com.tencent.qqmusiclite.activity.player.MusicPlayerActivity',
      rules:
        '[id="com.miui.player:id/free_mode_tips_layout"] + [id="com.miui.player:id/iv_close"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13303283',
    },
    {
      enable: false,
      key: 10,
      name: '会员过期续费弹窗',
      activityIds: 'com.tencent.qqmusiccommon.hybrid.HybridViewActivity',
      rules: '[id=null][desc="关闭弹框按钮"][clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700955',
    },
    {
      enable: false,
      key: 11,
      name: '我的页面-顶部 banner 广告',
      activityIds: 'com.tencent.qqmusiclite.activity.MainActivity',
      rules:
        '[id="com.miui.player:id/banner_image"] + [id="com.miui.player:id/close_banner"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12700984',
    },
  ],
});
