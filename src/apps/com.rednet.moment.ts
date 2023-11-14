import { defineAppConfig } from '../types';

export default defineAppConfig({
    "id": "com.rednet.moment",
    "name": "时刻新闻",
    "groups": [
      {
        "key": 1,
        "name": "开屏广告",
        "desc": "时刻新闻的开屏广告",
        "rules": [
          {
            "activityIds": "com.rednet.news.activity.SplashActivity",
            "matches": "[id='com.rednet.moment:id/skip_descr']",
            "exampleUrls": "https://m.gkd.li/6328439/0fa0dae9-ef89-42ea-be0d-e810741744cc",
            "snapshotUrls": "https://i.gkd.li/import/13348244"
          }
        ]
      }
    ]
});