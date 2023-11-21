import { defineAppConfig } from '../types';
export default defineAppConfig({
    "id": "com.x2era.xcloud.app",
    "name": "Fa米家",
    "groups": [
      {
        "key": 1, 
        "name": "Fa米家-升级提示",
        "desc": "关闭升级弹窗",
        "rules": [
          {
            "activityIds": "com.x2era.xcloud.app.MainActivity",
            "matches": "[id$='com.x2era.xcloud.app:id/iv_cancel']",
            "snapshotUrls": "https://i.gkd.li/import/13420706"
          }
        ]
      },
      {
        "key": 1,
        "name": "Fa米家-开屏广告",
        "desc": "跳过开屏广告",
        "rules": [
          {
            "activityIds": "com.x2era.xcloud.app.ui.home.welcome.WelcomeActivity",
            "matches": "[id$='com.x2era.xcloud.app:id/tv_jump']",
            "snapshotUrls": "https://i.gkd.li/import/13420730"
          }
        ]
      }
    ]
  });