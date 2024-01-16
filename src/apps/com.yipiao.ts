import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.yipiao',
  name: '智行火车票',
  groups: [
    {
      key: 1,
      name: '更新升级弹窗',
      desc: '点击弹窗下方x',
      rules: [
        {
          activityIds: 'com.app.main.entrance.MainActivity',
          matches: 'TextView[text*="V"] +2 ImageView[id="com.yipiao:id/arg"][clickable=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13947144',
        },
      ],
    },
    {
      key: 2,
      name: '添加桌面小组件横幅',
      desc: '点击横幅右上角x',
      rules: [
        {
          activityIds: 'com.app.main.entrance.MainActivity',
          matches: 'TextView[text="去添加"] + ImageView[id="com.yipiao:id/arg"][clickable=true][focusable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13947145',
        },
      ],
    },
    {
      key: 3,
      name: '广告横幅',
      desc: '点击横幅右上角x',
      rules: [
        {
          activityIds: 'com.app.main.entrance.MainActivity',
          matches: 'LinearLayout > ImageView[id="com.yipiao:id/arg"][clickable=true][focusable=true][width=53][height=53]',
          snapshotUrls: 'https://i.gkd.li/import/13947145',
        },
      ],
    },
  ],
});
