import { defineAppConfig } from '../types';
export default defineAppConfig({
    "id": "cn.silent.comic",
    "name": "免漫",
    "groups": [
      {
        "key": 1,
        "name": "首页-开屏广告",
        "desc": "[ChangeMe]本规则由GKD网页端审查工具生成",
        activityIds:[
          'io.dcloud.PandoraEntryActivity',
          'io.dcloud.PandoraEntry'
        ],
        "rules": [

          {
            "activityIds": "io.dcloud.PandoraEntryActivity",
            "matches": "[id='cn.silent.comic:id/ksad_splash_circle_skip_view']",
            "exampleUrls": "https://m.gkd.li/83610194/f7c54df0-30d8-405a-b7eb-dd06c8db11cf",
            "snapshotUrls": "https://i.gkd.li/import/13405442"
          },
          {
            "activityIds": "io.dcloud.PandoraEntry",
            "matches": "[id='cn.silent.comic:id/ksad_splash_circle_skip_view']",
            "exampleUrls": "https://m.gkd.li/83610194/94a8ecb5-1124-4090-a1ce-11340a4a76f2",
            "snapshotUrls": "https://i.gkd.li/import/13405483"
          },
          {
            "activityIds": "io.dcloud.PandoraEntryActivity",
            "matches": "[id='cn.silent.comic:id/ad_dcloud_main_skip']"
          },
          {
            "activityIds": "io.dcloud.PandoraEntry",
            "matches": "[id='cn.silent.comic:id/ad_dcloud_main_skip']"
          },
        ]
      }
    ]
  });
