import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cyl.musiccy.ou',
  name: 'OMOFUN',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          quickFind: true,
          matches: '[text*="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775918',
            'https://i.gkd.li/import/12775926',
            'https://i.gkd.li/import/13063151',
            'https://i.gkd.li/import/13063246',
            'https://i.gkd.li/import/13071599',
          ],
        },
        {
          key: 1,
          matches:
            '[id="com.cyl.musiccy.ou:id/ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
          snapshotUrls: ['https://i.gkd.li/import/12775919'],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-首页通知公告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.cyl.musiccy.ou.MainActivity'],
      rules: [
        {
          matches: '[desc="我知道了"]',
          snapshotUrls: 'https://i.gkd.li/import/13063206',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      actionDelay: 300,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.cyl.musiccy.ou.MainActivity',
            'com.ksf.yyx.MainActivity',
          ],
          name: '快手广告-1',
          matches:
            '[id$="ksad_container"] >n @ViewGroup[clickable=true] > [text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775922',
            'https://i.gkd.li/import/13063222',
          ],
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: [
            'com.ksf.yyx.MainActivity',
            'com.cyl.musiccy.ou.MainActivity',
          ],
          matches:
            '[text="广告"] <2 ViewGroup -2 ViewGroup > @ViewGroup[clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12775923',
            'https://i.gkd.li/import/13800051',
          ],
        },
        {
          key: 2,
          name: 'Sigmob广告',
          activityIds: [
            'com.cyl.musiccy.ou.MainActivity',
            'com.sigmob.sdk.base.common.TransparentAdActivity',
          ],
          matches: '[id="ad_area"] [id="close_btn"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13759345',
            'https://i.gkd.li/import/12775925',
            'https://i.gkd.li/import/12775924',
          ],
        },
        {
          key: 3,
          name: '腾讯广告SDK',
          activityIds: [
            'com.ksf.yyx.MainActivity',
            'com.android.internal.app.ResolverActivity',
            'com.cyl.musiccy.ou.MainActivity',
          ],
          matches:
            'FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775921',
            'https://i.gkd.li/import/12776903',
            'https://i.gkd.li/import/12789928',
            'https://i.gkd.li/import/13215476',
            'https://i.gkd.li/import/13071595',
            'https://i.gkd.li/import/13063249',
            'https://i.gkd.li/import/13422363',
            'https://i.gkd.li/import/13936028',
          ],
        },
      ],
    },
  ],
});
