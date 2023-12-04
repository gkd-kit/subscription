import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 1,
      name: '青少年弹窗',
      desc: '点击【我知道了】（旧版本）【关闭】（新版本）',
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        'Button[desc="开启青少年模式"] + Button[text="我知道了"]', //旧版本
        'Button[text="开启青少年模式"] + LinearLayout > Button[text="关闭"]', //新版本
      ],
      snapshotUrls: [
        'https://i.gkd.li/import/13111607', //旧版本
        'https://i.gkd.li/import/13542867', //新版本
      ],
    },
  ],
});
