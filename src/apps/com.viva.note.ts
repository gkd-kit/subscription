import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.viva.note',
  name: '囧次元',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.miui.home.launcher.Launcher'],
      matchLauncher: true,
      rules: [
        {
          //这里应该有简单的定位写法, 请指教
          matches:
            'TextView[text="滑动屏幕"] <3 ViewGroup <2 ViewGroup < ViewGroup +3 ViewGroup > ViewGroup > @TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888429',
        },
        {
          matches:
            'TextView[text^="点击跳转"] < LinearLayout < RelativeLayout -3 @TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888730',
        },
        {
          matches: 'FrameLayout[childCount=4] > TextView[text^="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888762',
        },
      ],
    },
    {
      key: 1,
      name: '应用内通知',
      activityIds: [
        'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        'com.maoyun.guoguo.MainActivity',
      ],
      matchLauncher: true,
      rules: [
        {
          matches: '@Button[desc="关闭"] + Button[desc="不再显示"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12888361',
            'https://gkd-kit.gitee.io/import/12888389',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '应用内弹窗',
      activityIds: ['com.sigmob.sdk.base.common.TransparentAdActivity'],
      matchLauncher: true,
      rules: [
        {
          matches:
            '@TextView[text="跳过"] < View <4 View +3 TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888388',
        },
        {
          matches:
            'TextView[text="广告"] + View > TextView[text="反馈"] + @TextView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888419',
        },
        {
          matches:
            'TextView[text="广告"] <3 View -2 View > @TextView[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888578',
        },
        {
          matches: 'TextView[text="反馈"] + @TextView +3 TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12888647',
        },
      ],
    },
  ],
});
