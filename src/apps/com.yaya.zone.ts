 import { defineAppConfig } from '../types';

export default defineAppConfig({ 
  id: 'com.yaya.zone', 
  name: '叮咚买菜', 
  groups: [{
  id: 'com.yaya.zone',//应用ID
  name: '叮咚买菜',//应用名称
  groups: [
    {
      key: 1,
      name: '开屏广告',//规则名称
      activityIds: ['cn.me.android.splash.activity.SplashActivity'],//ActivityId
      rules: [
        {
          matches: '[id="com.yaya.zone:id/tv_skip"]',//找点击元素
          snapshotUrls: 'https://gkd-kit.gitee.io/snapshot/1698151049770',//快照地址
        },
      ],
    },
  ],
}], 
});
