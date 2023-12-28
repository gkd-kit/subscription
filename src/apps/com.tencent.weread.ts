import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.weread',
  name: '微信读书',
  groups: [
    {
      enable: false,
      key: 1,
      name: '更新弹窗',
      desc: '点击\'不想更新\'关闭更新弹窗',
      activityIds: ['com.tencent.weread.WeReadFragmentActivity'],
      quickFind: true,
      rules: [
        {
          matches: '[name = `android.widget.Button`][text = `不想更新`]',
          snapshotUrls: 'https://i.gkd.li/import/13786531',
        },
      ],
    },
  ],
});
