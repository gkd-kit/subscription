import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '空规则组-待实现',
      activityIds: 'com.uc.browser.InnerUCMobile',
      // TODO
    },
    {
      key: 0,
      name: '信息流广告',
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="广告"] +n ImageView[desc="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12880737',
            'https://gkd-kit.songe.li/import/12881751', // 限定 visibleToUser=true，尽量减少对正常浏览信息的干扰
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text^="屏蔽"][text$="广告"]',
          snapshotUrls: [
            'https://gkd-kit.songe.li/import/12880772',
            'https://gkd-kit.songe.li/import/12881307',
          ],
        },
      ],
    },
  ],
});
