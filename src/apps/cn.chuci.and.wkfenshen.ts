import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.chuci.and.wkfenshen',
  name: '猴子分身',
  groups: [
    {
      key: 1,
      name: '购买会员弹窗',
      activityIds: 'cn.chuci.and.wkfenshen.ActMain',
      rules: [
        {
          matches:
            '@[id="cn.chuci.and.wkfenshen:id/action_close"] +n ViewGroup > [text="会员专享特权"] ',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13226988',
        },
      ],
    },
  ],
});
