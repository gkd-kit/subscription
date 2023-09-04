import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.gotokeep.keep',
  name: 'Keep',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.gotokeep.keep.splash.SplashActivity',
      rules: '[id=`com.gotokeep.keep:id/textSkip`]',
    },
  ],
});
