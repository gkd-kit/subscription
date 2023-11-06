import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '@* > [text *= "跳过" && text.length<6]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12504489',
            'https://gkd-kit.gitee.io/import/12504507',
            'https://i.gkd.li/import/12852509',
            'https://gkd-kit.gitee.io/import/12504492',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '内部弹窗广告',
      matchLauncher: true,
      activityIds: ['com.copymanga.app.MainActivity'],
      delay: 500,
      rules: [
        {
          activityIds: 'com.kwad.components.ad.interstitial',
          matches: '@ViewGroup[clickable=true][visibleToUser=true] > ImageView',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12504486',
            'https://gkd-kit.gitee.io/import/12504488'
          ],
        },
        {
          matches: [
            '[text^="立即" || text^="领取" || text*="看"]', //软件正常元素都用的des,只有广告用text
            '[depth=6][childCount=1] > ImageView',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12504520',
            'https://gkd-kit.gitee.io/import/12661019',
            'https://i.gkd.li/import/13193877',
            'https://gkd-kit.gitee.io/import/12892156',
            'https://gkd-kit.gitee.io/import/12504501',
            'https://gkd-kit.gitee.io/import/13246786',
            'https://i.gkd.li/import/13259082', //text^="领取"
          ],
        },
        {
          matches: [
            '[text="京东"]',
            '[_id=20]',
          ],
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/13233178',
            'https://i.gkd.li/import/13259085',
          ]
        }
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View - Image',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12925052',
        },
        {
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -4 @View < View[childCount=7]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12925095',
        },
      ],
    },
    {
      key: 2,
      name: '加入书架按钮下面的广告',
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
        {
          name: '点击右上角x',
          matches: 'ImageView[id="com.copymanga.app:id/close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12504525',
        },
        {
          name: '点击右下角x',
          matches:
            'FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12851671',
            'https://gkd-kit.gitee.io/import/12909005',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '关闭赞助提示',
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
        {
          matches: '@[desc="就这样吧"] + [desc^="赞助免广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12851627',
        },
      ],
    },
    {
      key: 4,
      name: '自动确认线路',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="进入拷贝漫画"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13233179',
        },
      ],
    }
    {
      key: 5,
      name: '关闭提示',
      matchTime: 20000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="系统提示"] +2 [desc="确定"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13233180',
        },
      ],
    }
  ],
});
