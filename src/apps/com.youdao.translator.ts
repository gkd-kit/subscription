import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.youdao.translator',
  name: '有道翻译官',
  groups: [
    {
      key: 1,
      name: '翻译界面-结果下方广告',
      activityIds: ['com.youdao.translator.activity.trans.TransResultActivity'],
      rules: [
        {
          matches: '@ImageView[id=`com.youdao.translator:id/close_iv`]',
          snapshotUrls: 'https://i.gkd.li/import/13259910',
        },
      ],
    },
  ],
});
