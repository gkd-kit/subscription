import { defineAppConfig } from '../types';

export default defineAppConfig({
  "id": "com.dz.xmbnxj",
  "name": "小卖部逆袭记",
  "groups": [
    {
      "key": 1,
      "name": "主页面广告",
      "rules": [
        {
          "activityIds": "com.lynx.boot.LynxActivity",
          "matches": "[id='com.dz.xmbnxj:id/mix_img_close']",
          "exampleUrls": "https://m.gkd.li/99116490/40d3c3c9-9443-4c71-9a98-69efa38f8bfd",
          "snapshotUrls": "https://i.gkd.li/import/13399232"
        }
      ]
    }
  ]
});
