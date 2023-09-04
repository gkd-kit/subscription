import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.hupu.shihuo',
  name: '识货',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds:
        'com.shizhi.shihuoapp.module.main.ui.welcome.WelcomeActivity',
      rules: '[id=`com.hupu.shihuo:id/fl_countdown`]',
    },
  ],
});
