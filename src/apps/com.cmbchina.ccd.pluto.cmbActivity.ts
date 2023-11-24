import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cmbchina.ccd.pluto.cmbActivity',
  name: '掌上生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/tv_skip_timer"][text^="跳过"]',
      snapshotUrls: ['https://i.gkd.li/import/12647186'],
    },
    {
      key: 1,
      name: '版本更新',
      quickFind: true,
      matchLauncher: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
        'com.cmbchina.ccd.pluto.cmbActivity.secplugin',
      ],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/bt_sure_tips"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/bt_cancel_tips"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12647025',
        'https://i.gkd.li/import/12727203',
        'https://i.gkd.li/import/13345771', // matchLauncher: true,
      ],
    },
    {
      key: 2,
      name: '首页弹窗',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2'],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/lly_pop_shell"] > [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cf_view_close"]',
      snapshotUrls: [
        'https://i.gkd.li/import/12647000',
        'https://i.gkd.li/import/13360282',
      ],
    },
    {
      key: 3,
      name: '右侧悬浮广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          name: '信用卡、我的页面',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.secondNav',
          ],
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/img_floating_ad_cmb"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_close_floating_ad_cmb"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12647039', // 信用卡页面
            'https://i.gkd.li/import/12647052', // 我的页面
          ],
        },
        {
          name: '查账页面',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
            'com.cmbchina.ccd.pluto.cmbActivity.repaymentBillv3.billRepay',
          ],
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_bg"] - [id="com.cmbchina.ccd.pluto.cmbActivity:id/img_cmb_drag_pendant_close"]',
          snapshotUrls: ['https://i.gkd.li/import/12647127'],
        },
        {
          name: '发现页',
          activityIds: 'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
          matches:
            '[id="com.cmbchina.ccd.pluto.cmbActivity:id/view_cat"] + [id="com.cmbchina.ccd.pluto.cmbActivity:id/view_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13402782',
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '消息页面-通知开关',
      desc: '点击x按钮，不开启系统通知',
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.messagebox'],
      rules:
        '[id="com.cmbchina.ccd.pluto.cmbActivity:id/btn_open_notify"] + [id="com.cmbchina.ccd.pluto.cmbActivity:id/iv_delete"]',
      snapshotUrls: ['https://i.gkd.li/import/12647068'],
    },
  ],
});
