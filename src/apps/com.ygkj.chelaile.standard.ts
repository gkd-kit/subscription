import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      key: 1,
      name: '局部广告-卡片式广告',
      rules: [
        {
          key: 0,
          name: '字节广告SDK',
          activityIds: [
            'dev.xesam.chelaile.app.module.func.SplashActivity',
            'dev.xesam.chelaile.app.module.PanelHostActivity',
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          ],
          matches:
            'ImageView[id^="com.ygkj.chelaile.standard:id/cll_all_pic_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13062991',
            'https://i.gkd.li/import/13062984',
            'https://i.gkd.li/import/13464325',
            'https://i.gkd.li/import/13947845', // activityIds: 'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          ],
        },
        {
          key: 1,
          activityIds: [
            'dev.xesam.chelaile.app.module.PanelHostActivity',
            'dev.xesam.chelaile.app.module.line.TimeTableActivity',
          ],
          matches:
            '[id="com.ygkj.chelaile.standard:id/cll_line_single_ad_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13625374',
            'https://i.gkd.li/import/13947849',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-广告弹窗',
      rules: [
        {
          key: 0,
          name: '字节广告SDK',
          activityIds: 'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          matches:
            'ImageView[id^="com.ygkj.chelaile.standard:id/cll_all_pic_close"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13947871',
        },
      ],
    },
  ],
});
