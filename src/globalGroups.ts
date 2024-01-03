import apps from './rawApps';
import type { RawGlobalGroup } from './types';

const diabledAppIds = [
  'com.android.systemui',
  'com.android.settings',

  // miui 锁屏应用
  'com.miui.aod',

  // 在桌面禁用
  'com.miui.home',
  'com.android.launcher',
  'com.bbk.launcher2.Launcher',
  'com.huawei.android.launcher.unihome.UniHomeLauncher',

  //电池设置
  'com.iqoo.powersaving',

  // 在一些常见的应用中禁用
  'com.tencent.mm',
  'li.songe.gkd',
];

// 如果应用规则已有开屏广告一类的规则, 则在全局规则禁用此应用
diabledAppIds.push(
  ...apps
    .filter((a) =>
      a.groups.some((g) => g.name.startsWith('开屏广告') && g.enable !== false),
    )
    .map((a) => a.id),
);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: -1,
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down") || desc*="跳过" || desc*="skip"]',
      },
    ],
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
