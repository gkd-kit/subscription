import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.dxy.medicinehelper',
  name: '用药助手',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="cn.dxy.medicinehelper:id/ad_image"] + [id="cn.dxy.medicinehelper:id/count_down_view"]',
      snapshotUrls: 'https://i.gkd.li/import/13228270',
    },
  ],
});
