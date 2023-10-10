import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: '	net.dxzq.jgzx',
  name: '东兴198',
  groups: [
    {
      key:0,
      name: '开屏广告',
      activityIds:["net.dxzq.jgzx.activity.LoginPage"],
      rules:'[id="net.dxzq.jgzx:id/tv_m"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12852136',
        }
      ]
    }
  ],
});
