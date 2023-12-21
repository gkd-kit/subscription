import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.charge',
  name: 'E充站',
  groups: [
    {
      enable: false,
      key: 0,
      name: '开屏广告',
      desc: '打开APP广告',
      quickFind: true,
      activityIds: ['cn.charge.ktx.splash.SplashActivity'],
      rules: [
        {
          matches: '[id="cn.charge:id/advertising_jump"]',
          snapshotUrls: 'https://i.gkd.li/import/13725653', //开屏广告页面
        },
      ],
    },
  ],
});
