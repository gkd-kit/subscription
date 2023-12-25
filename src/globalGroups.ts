import apps from './rawApps';
import type { RawGlobalGroup } from './types';

const diabledAppIds = [
  'com.android.systemui',
  'com.miui.aod',
  'com.miui.home',
  'com.android.launcher.Launcher',
  'com.bbk.launcher2.Launcher',
  'com.huawei.android.launcher.unihome.UniHomeLauncher',
];

// 如果应用规则已有开屏广告一类的规则, 则在全局规则禁用此应用
diabledAppIds.push(
  ...apps
    .filter((a) => a.groups.some((g) => g.name.startsWith('开屏广告')))
    .map((a) => a.id),
);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    actionMaximum: 1,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10]',
        action: 'clickCenter',
      },
      {
        key: 1,
        matches:
          '[(text.length<10&&(text*="跳过"||text*="skip")) || id$="tt_splash_skip_btn" || desc*="跳过" || desc*="skip"]',
        action: 'clickCenter',
      },
    ],
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
