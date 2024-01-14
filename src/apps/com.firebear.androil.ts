import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.firebear.androil',
  name: '小熊油耗',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '自定义规则[字节广告SDK]',
          matches: 'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13927561',
        },
        {
          key: 1,
          name: '全局默认规则1',
          quickFind: true,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
        },
        {
          key: 2,
          name: '全局默认规则2',
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      desc: '来自第三方SDK【穿山甲】',
      activityIds:
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      rules: [
        {
          key: 0,
          name: '点击右上角x',
          matches: '[text="反馈"] +2 View > Image',
          snapshotUrls: [
            'https://i.gkd.li/import/12754919',
            'https://i.gkd.li/import/13324698',
          ],
        },
        {
          key: 1,
          name: '点击右上角[数字s|跳过]',
          matches: '[text="广告"] + View >4 [text="| 跳过"]',
          snapshotUrls: ['https://i.gkd.li/import/12864214'],
        },
        {
          key: 2,
          name: '点击右上角x (2)',
          matches: '[id="com.byted.pangle.m:id/tt_reward_full_count_down"]',
          snapshotUrls: ['https://i.gkd.li/import/13175439'],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      activityIds: 'com.firebear.androil.app.home.MainActivity',
      rules:
        '@[id="com.firebear.androil:id/dismissNtfImgView"] < RelativeLayout - [id="com.firebear.androil:id/contentLay"] >3 TextView[text^="升级"]',
      snapshotUrls: 'https://i.gkd.li/import/12755032',
    },
  ],
});
