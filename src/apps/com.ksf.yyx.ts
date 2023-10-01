/*
 * @Author: shjdgwj 1018996814@qq.com
 * @Date: 2023-09-30 23:00:38
 * @LastEditors: shjdgwj 1018996814@qq.com
 * @LastEditTime: 2023-10-01 17:24:13
 * @FilePath: \gkd_subscription\src\apps\com.ksf.yyx.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ksf.yyx',
  name: 'OMOFUN',

  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '[id="com.ksf.yyx:id/ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775918',
        },
        {
          matches: '[text="|"] + ImageView',
          snapshotUrls: ['https://gkd-kit.gitee.io/import/12775919'],
        },
        {
          matches: '[text *= "跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775926',
        },
      ],
    },
    {
      key: 1,
      name: '首页通知',
      activityIds: ['com.ksf.yyx.MainActivity'],
      rules: [
        {
          matches: '[desc="我知道了"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775920',
        },
      ],
    },
    {
      key: 2,
      name: '插屏广告',
      activityIds: [
        'com.ksf.yyx.MainActivity',
        'com.sigmob.sdk.base.common.TransparentAdActivity',
      ],
      rules: [
        {
          action: 'clickCenter',
          matches:
            'FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775921',
        },
        {
          matches: '@ViewGroup [text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775922',
        },
        {
          matches: '@ViewGroup[clickable=true][childCount=1] ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775923',
        },
        {
          matches: '[text="跳过"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775924',
        },
        {
          matches: '[id="close_btn"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12775925',
        },
      ],
    },
  ],
});
