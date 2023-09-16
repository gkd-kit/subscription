import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'fm.qingting.qtradio',
  name: '蜻蜓FM',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['fm.qingting.qtradio.QTRadioActivity'],
      rules:
        '@TextView[text="跳过广告"] - TextView < LinearLayout - FrameLayout >(2) ImageView',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640433'],
    },
    {
      key: 1,
      name: '播放界面的广告',
      activityIds: ['fm.qingting.qtradio.QTRadioActivity'],
      rules:
        '@[id="fm.qingting.qtradio:id/view_ad_close"] + LinearLayout > TextView[text="广告"]',
      snapshotUrls: ['https://gkd-kit.gitee.io/import/12640438'],
    },
  ],
});
