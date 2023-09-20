import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.zhiyin.qingdan.dashixiong',
    name: '大师兄影视',
    groups: [
        {
            key: 1,
            name: '首页必读通告 - 跳过',
            activityIds: [
                'com.zhiyin.qingdan.dashixiong.MainActivity'
            ],
            rules: [
                {
                    matches: '[desc="我知道了"]',
                    snapshotUrls: 'https://gkd-kit.songe.li/import/12674664',
                }
            ],
        },
    ],
});