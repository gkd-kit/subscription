import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.feeyo.vz.pro.cdm',
  name: '飞常准业内版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '点击跳过',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13926823',
        },
      ],
    },
  ],
});
