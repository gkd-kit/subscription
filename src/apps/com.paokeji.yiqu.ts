import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
        'com.aster.comic.app.view.MainActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          name: '腾讯SDK',
          actionDelay: 300, //防误触
          matches:
            '[id="android:id/content"] >(-n+4) FrameLayout > FrameLayout[childCount=1] > ImageView[index=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13830354',
            'https://i.gkd.li/import/13842716',
            'https://i.gkd.li/import/13842966',
          ],
        },
        {
          key: 1,
          name: '未知SDK',
          matches:
            'FrameLayout[desc^="root"] > FrameLayout + FrameLayout[desc^="webview"] > View',
          snapshotUrls: [
            'https://i.gkd.li/import/13839432',
            'https://i.gkd.li/import/13839519',
          ],
        },
        {
          key: 2,
          name: '字节SDK',
          actionDelay: 350, //防误触
          matches:
            '@Image[text.length=0] < View + View +(6-n) View >(4-n) TextView[ text*="广告" && text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/13809737',
            'https://i.gkd.li/import/13809578',
            'https://i.gkd.li/import/13809565',
            'https://i.gkd.li/import/13810150',
          ],
        },
        {
          key: 3,
          name: '穿山甲SDK',
          matches: [
            '[text="反馈"] < View + View > Image',
            'LinearLayout[id!=null && childCount=2] > @LinearLayout[id!=null] > LinearLayout > ImageView',
            '[text*="跳过" && text.length<=6] <2 @View -(3-n) View < View',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13830798',
            'https://i.gkd.li/import/13810767', //规则2
            'https://i.gkd.li/import/13829749', //规则3
          ],
        },
        {
          key: 4,
          name: '快手SDK',
          matches: [
            'ViewGroup > ImageView[visibleToUser=true] +(5-n) ViewGroup > @ViewGroup[clickable=true && visibleToUser=true] > ImageView',
            'LinearLayout[id!=null && childCount=2] > @LinearLayout[id!=null] > LinearLayout > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13809478',
            'https://i.gkd.li/import/13809629',
            'https://i.gkd.li/import/13829312',
            'https://i.gkd.li/import/13837855', //规则2
          ],
        },
      ],
    },
  ],
});
