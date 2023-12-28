import { defineAppConfig } from '../types';

export default defineAppConfig({
    id: 'com.dsocial.dzpq',
    name: '大众评球',
    groups: [
        {
            key: 0,
            name: '开屏广告',
            quickFind: true,
            matchTime: 10000,
            resetMatch: 'app',
            actionMaximum: 1,
            rules: '[text*="跳过"]',
            snapshotUrls: 'https://i.gkd.li/import/13786926',
        },
    ],
});