import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.weread',
  name: '微信读书',
  groups: [
    {
      key: 1,
      name: '系统推送弹窗',
      desc: '系统推送弹窗-点击取消',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      activityIds: [
        'com.tencent.weread.module.bottomSheet.BottomSheetForFragment',
        'com.tencent.weread.WeReadFragmentActivity',
      ],
      rules: [
        {
          matches: '[id="com.tencent.weread:id/open_notification_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642247',
            'https://i.gkd.li/import/13233735',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式弹窗',
      quickFind: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'app',
      activityIds: 'com.tencent.weread.WeReadFragmentActivity',
      rules: '[text="设置青少年模式"] - LinearLayout >2 [text="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/import/13233668',
    },
    {
      name: '观看15秒广告-X',
      key: 3,
      desc: '微信读书15秒后自动关闭广告，左上角为一个X',
      quickFind: false,
      rules: [
        {
          actionCd: 1000,
          activityIds: ['com.qq.e.tg.RewardvideoPortraitADActivity'],
          matches: [
            'Image[name="android.widget.Image"][text="cross"] < @View[clickable=true] - TextView < View < View + TextView[text="已观看视频15秒，可获得奖励"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13623891'],
        },
      ],
    },
    {
      name: '观看15秒广告-跳过广告',
      key: 4,
      desc: '微信读书15秒后自动关闭广告，左上角按钮为“跳过广告”',
      quickFind: false,
      rules: [
        {
          actionCd: 1000,
          activityIds: ['com.qq.e.tg.RewardvideoPortraitADActivity'],
          matches: [
            '@TextView[id="com.tencent.weread:style/AndroidThemeColorAccentYellow"] + TextView[text="已观看视频15秒，可获得奖励"]',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13624414'],
        },
      ],
    },
  ],
});
