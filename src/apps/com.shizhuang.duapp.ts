import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.shizhuang.duapp',
  name: '得物',
  groups: [
    {
      enable: false,
      key: 4,
      name: '截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      quickFind: true,
      activityIds:
        'com.shizhuang.duapp.modules.product_detail.detailv4.ui.ProductDetailActivityV4',
      rules:
        '[id="com.shizhuang.duapp:id/ivClose"] +2 [id="com.shizhuang.duapp:id/ivSave"]',
      snapshotUrls: 'https://i.gkd.li/import/13473449',
    },
  ],
});
