import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.vgjump.jump',
  name: 'Jump',

  groups: [
    {
      key: 1,
      name: 'jump开屏广告',
      desc: '跳过jump开屏广告',
      rules: [
        {
          activityIds: 'com.vgjump.jump.ui.main.launch.LaunchActivity',
          matches:
            '[name=\'android.view.View\'][clickable=true][id=\'com.byted.pangle:id/tt_splash_skip_btn\']',
        },
      ],
    },
  ],
});
