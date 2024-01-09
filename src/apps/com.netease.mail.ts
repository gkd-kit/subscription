import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.netease.mail',
  name: '网易邮箱大师',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          name: '开屏-1',
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          excludeMatches: '[vid="ad_skip"][text="跳过"][clickable=false]',
          snapshotUrls: 'https://i.gkd.li/import/13874492', // v7.18.1版本中开屏有个隐藏无效跳过按钮需排除，说不定以后网易会删掉
        },
        {
          key: -1,
          name: '开屏-2',
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
          excludeMatches: '[vid="ad_skip"][text="跳过"][clickable=false]',
          snapshotUrls: 'https://i.gkd.li/import/13874492', // v7.18.1版本中开屏有个隐藏无效跳过按钮需排除，说不定以后网易会删掉
        },
      ],
    },
    {
      key: 1,
      name: '更新提示',
      activityIds: [
        'com.netease.mobimail.module.flutter.CustomFlutterActivity',
      ],
      rules:
        '[id="com.netease.mail:id/tv_ignore_this_version"][text="暂不更新"]',
      snapshotUrls: 'https://i.gkd.li/import/12664070',
    },
    {
      key: 2,
      name: '全屏广告-邮件列表广告',
      activityIds: ['com.netease.mail.biz.main.MainITabActivity'],
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[id="com.netease.mail:id/ad_vip"]',
          snapshotUrls: 'https://i.gkd.li/import/12999833',
        },
        {
          preKeys: 0,
          key: 1,
          matches: '[id="com.netease.mail:id/ll_delete"]',
          snapshotUrls: 'https://i.gkd.li/import/12999841',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/import/12664070',
    },
    {
      key: 5,
      name: '全屏广告-查看成就',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: 'TextView[text="恭喜您获得以下成就"] - TextView[text=""][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/13876817',
    },
  ],
});
