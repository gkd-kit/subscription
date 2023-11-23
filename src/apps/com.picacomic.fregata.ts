import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.picacomic.fregata',
  name: 'PicACG',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[id="com.picacomic.fregata:id/imageButton_popup_close"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/2a9a1179-3a50-4317-900a-42c8197517ed',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13422624'],
        },
      ],
    },
    {
      key: 2,
      name: '公告',
      desc: '点击主页面的公告和广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.picacomic.fregata.activities.MainActivity',
      rules: [
        {
          matches:
            '[id="com.picacomic.fregata:id/button_dialog_announcement_negative"][text="確定"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/a5cbd7ce-79b4-49da-ba01-2b7db907d1f1',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13422767'],
        },
      ],
    },
    {
      key: 3,
      name: '漫画页广告',
      desc: '点击卡片广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.picacomic.fregata.activities.MainActivity',
      rules: [
        {
          matches: '[id="com.picacomic.fregata:id/imageButton_banner_close"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/92feb979-d75a-4ee5-a880-da2e4250d1e3',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13423009'],
        },
      ],
    },
    {
      enable: false,
      key: 4,
      name: '签到',
      desc: '切换到个人页面时自动签到，并确定',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: 'com.picacomic.fregata.activities.MainActivity',
      rules: [
        {
          matches:
            '[id="com.picacomic.fregata:id/textView_profile_punch_in"][text="打嗶卡"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/d53cc0cb-2a3e-4398-a415-3b8083edd328',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13422844'],
        },
        {
          matches:
            '[id="com.picacomic.fregata:id/button_dialog_custom_positive"][text="確定"]',
          exampleUrls: [
            'https://m.gkd.li/83610194/90048fce-fe89-4ac7-9ae6-fe3d7b99aeaf',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13422874'],
        },
      ],
    },
  ],
});
