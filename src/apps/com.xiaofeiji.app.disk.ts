import { defineAppConfig } from '../types';

export default defineAppConfig({
    "id":"com.xiaofeiji.app.disk",
    "name":"小飞机网盘",
    "groups":[
        {
            "name":"[ChangeMe]规则名称-2023-12-05 10:30:09",
            "key":0,
            "desc":"[ChangeMe]本规则由GKD网页端审查工具生成",
            "rules":[
                {
                    "activityIds":[
                        "com.xiaofeiji.app.disk.MainActivity"
                    ],
                    "matches":[
                        "[desc$=\"跳过\"]"
                    ],
                    "snapshotUrls":[
                        "https://i.gkd.li/import/13554076"
                    ],
                    "exampleUrls":[
                        "https://m.gkd.li/58279234/edf4bbb4-889e-48cb-b54b-f4bc0a2929fb"
                    ]
                }
            ]
        },
    ]
});
