import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qinlin.edoor',
  name: '亲邻开门',
  groups: [
    {
      key: 1,
      name: '局部广告-首页顶部广告',
      activityIds: 'com.qinlin.edoor.MainActivity',
      rules: [
        {
          matches: [
            '[id="com.qinlin.edoor:id/reaper_ad_source_layout"]',
            '[id="com.qinlin.edoor:id/close"]',
            '[id="com.qinlin.edoor:id/close_m_image_left_text_right_no_compliance"]'
          ],
          snapshotUrls: 'https://i.gkd.li/import/13927366',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          name: '穿山甲SDK',
          quickFind: true,
          matches:
            '@[id="com.qinlin.edoor:id/iv_close"] - LinearLayout >n [text*="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13771774',
        },
      ],
    },
    {
      enable: false,
      key: 10,
      name: '全屏广告-开门有奖弹窗',
      activityIds: 'com.qinlin.edoor.MainActivity',
      rules: '[desc="开门有奖"] +2 [desc="立即领取"] + ImageView',
      snapshotUrls: 'https://i.gkd.li/import/12707736',
    },
    {
      enable: false,
      key: 11,
      name: '全屏广告-获得金币弹窗',
      activityIds: 'com.qinlin.edoor.MainActivity',
      rules: ['[desc="获得金币"] +3 [desc="开心收下"] + ImageView'],
      snapshotUrls: ['https://i.gkd.li/import/12707738'],
    },
    {
      key: 12,
      name: '全屏广告-开门成功后广告弹窗',
      desc: '来自【腾讯广告sdk】',
      rules: '[vid="interact_ad_root"] >2 [vid="iv_close"]',
      snapshotUrls: 'https://i.gkd.li/import/13932707',
    },
  ],
});
