import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo360.antilostwatch',
  name: '360儿童卫士',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          key: -1,
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        }, //确保全局规则在被排除后仍可用
        {
          key: 1,
          quickFind: true,
          matches:
            '@ImageView[clickable=true] + ViewGroup > [text="跳过"][text.length<=5]',
          snapshotUrls: 'https://i.gkd.li/import/13964236',
        },
      ],
    },
  ],
});
