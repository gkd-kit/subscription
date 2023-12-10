import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qjy.youqulife.io',
  name: 'MINO',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 1,
          name: '快手广告',
          activityIds: 'com.qjy.youqulife.io.MainActivity',
          quickFind: true,
          matches:
            '[text="广告"] <2 ViewGroup -n ViewGroup > ViewGroup > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/import/13378653',
        },
        {
          key: 2,
          name: '腾讯广告',
          activityIds: 'com.qjy.youqulife.io.MainActivity',
          matches: [
            '@FrameLayout[index=1][childCount=1]',
            '@FrameLayout[index=2][childCount=1]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13628208', //index=1
            'https://i.gkd.li/import/13628253', //index=2
          ],
        },
      ],
    },
  ],
});
