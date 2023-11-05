import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'dxwt.questionnaire.ui',
  name: '10000社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="关闭"][desc.length<=10][visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/13255491',
        'https://i.gkd.li/import/13259475', // 限制 visibleToUser=true 防止按钮未出现就触发规则
      ],
    },
  ],
});
