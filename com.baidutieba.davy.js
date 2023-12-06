import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidutieba.davy',
  name: '贴吧一键签到大师',
  groups: [
    {
      name: '[ChangeMe]规则名称-2023-12-05 10:47:04',
      key: 0,
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: ['com.baidutieba.SplashActivity'],
          matches: ['[text="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/import/13554329'],
          exampleUrls: [
            'https://m.gkd.li/58279234/1b9a8b32-2b3d-41d8-aee5-78ef11faae88',
          ],
        },
      ],
    },
  ],
});
