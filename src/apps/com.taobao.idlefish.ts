import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '请求开启通知权限弹窗',
      activityIds:
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
      rules: '[desc^="开启系统通知"] > ImageView[clickable=true][desc=null]',
      snapshotUrls: 'https://i.gkd.li/import/13538351',
    },
    {
      key: 2,
      name: '请求开启手机信息权限弹窗',
      activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
      rules:
        '@Button[text="取消"] <<n FrameLayout >n TextView[text*="手机信息"]',
      snapshotUrls: 'https://i.gkd.li/import/13620277',
    },
    {
      key: 3,
      quickFind: true,
      name: '版本更新弹窗',
      desc: '点击暂不升级',
      rules: [
        {
          activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
          matches: '[id="com.taobao.idlefish:id/left"][text="暂不升级"]',
          snapshotUrls: 'https://i.gkd.li/import/13832272',
        },
      ],
    },
  ],
});
