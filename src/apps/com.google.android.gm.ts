import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.gm',
  name: 'Gmail',
  groups: [
    {
      key: 2,
      name: '信息流广告',
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点击广告扩展',
          matches: '[id="com.google.android.gm:id/button_chip_ad_teaser_info_icon" || id="com.google.android.gm:id/basic_ad_teaser_info_icon"]',
          snapshotUrls: 'https://i.gkd.li/import/13255698',
        },
        {
          preKeys: 0,
          key: 1,
          name: '广告中心-点击屏蔽',
          matches: 'Button[text="屏蔽此广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13255700',
        },
        {
          preKeys: 1,
          key: 2,
          name: '点击继续确认屏蔽',
          matches: 'Button[text="继续"]',
          snapshotUrls: 'https://i.gkd.li/import/13255701',
        },
      
      ],
      
    },
  ],
});
