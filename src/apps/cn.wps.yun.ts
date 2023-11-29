import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'cn.wps.yun',
  name: '金山文档',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]规则名称-2023-11-29 13:38:03',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      rules: [
        {
          activityIds: 'cn.wps.yun.ui.IndexActivity',
          matches:
            '[id="cn.wps.yun:id/rootGroup"] > TextView + [id="cn.wps.yun:id/moreIconRight"]',
          exampleUrls:
            'https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d',
          snapshotUrls: 'https://i.gkd.li/import/13495062',
        },
      ],
    },
  ],
});
