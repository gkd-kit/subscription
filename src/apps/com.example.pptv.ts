import { defineAppConfig } from '../types';

export default defineAppConfig([{
	id: 'com.miui.systemAdSolution',
	name: 'systemAd',
	groups: [{
		key: 1,
		name: '系统广告',
		activityIds: [],
		rules: [{
			matches: '[text="跳过"]',
			snapshotUrls: 'https://i.gkd.li/snapshot/1703655729664'
		}],
	}, ],
},
{
  id: 'com.example.pptv',
  name: '人人视频',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      activityIds: ['com.pptv.rrtvtrunk.main.presentation.MainActivity'],
      rules: [
        {
          matches: '[id="com.bykv.vk:id/tt_splash_skip_btn"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1703655595011',
        },
        {
          matches: '[id="com.example.pptv:id/view_count_shake"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1703656736790',
          ],
        },
        {
          matches: '[id="com.example.pptv:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/snapshot/1703655711860',
            ],
        }
      ],
    },
    ],
}
]);
