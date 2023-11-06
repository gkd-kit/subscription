import { defineAppConfig } from '../types';

export default defineAppConfig({
    "id": "com.kugou.android.lite",
    "name": "酷狗概念版",
    "groups": [{
            "name": "开屏广告",
            "key": 0,
            "matchLauncher": true,
            "activityIds": ["com.kugou.android.app.splash.adcontainer.AdContainerActivity"],
            "rules": [{
                    "preKeys": [],
                    "matches": ["LinearLayout > @TextView[text=`跳过`]"],
                    "excludeMatches": []
                }
            ],
            "snapshotUrls": ["https://i.gkd.li/snapshot/1699258882134"]
        }
    ]
});
