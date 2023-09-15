import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.dongqiudi.news',
  name: '懂球帝',
  groups: [
    {
        key: 0,
        name: '开屏广告-1',
        activityIds: 'com.dongqiudi.news.BaseSplashActivity',
        rules: '@View[id="com.byted.pangle:id/tt_splash_skip_btn"] + TextView[id="com.byted.pangle:id/tt_splash_ad_logo"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620568',
    },
    {
        key: 1,
        name: '开屏广告-2',
        activityIds: 'com.dongqiudi.news.BaseSplashActivity',
        rules: 'FrameLayout + @TextView[text="跳过"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620577',
    },
    {
        key: 2,
        name: '开屏广告-3',
        activityIds: 'com.dongqiudi.news.BaseSplashActivity',
        rules: '@TextView[id="com.dongqiudi.news:id/ad_skip_time"] + ImageView[id="com.dongqiudi.news:id/scale_iv"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620583',
    },
    {
        key: 3,
        name: '更新弹窗',
        activityIds: 'com.dongqiudi.news.DownloadActivity',
        rules: 'TextView[text*="新版本"] +(3) TextView[text="下次提醒"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620586',
    },
    {
        key: 4,
        name: '穿山甲广告弹窗',
        activityIds: 'com.dongqiudi.news.MainActivity',
        rules: 'FrameLayout[desc^="webview-close"] > View',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620588',
    },
    {
        key: 5,
        name: '首页信息流广告-1',
        desc: '信息流广告较多，开启可能会干扰正常信息浏览，需要同时开启【首页信息流广告-反馈理由】',
        activityIds: 'com.dongqiudi.news.MainActivity',
        rules: 'TextView[id="com.dongqiudi.news:id/ads_label"] +(n) ImageView[id="com.dongqiudi.news:id/feedback_close"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620654',
        enable: false,
    },
    {
        key: 6,
        name: '首页信息流广告-2',
        desc: '信息流广告较多，开启可能会干扰正常信息浏览，需要同时开启【首页信息流广告-反馈理由】',
        activityIds: 'com.dongqiudi.news.MainActivity',
        rules: 'TextView[id="com.dongqiudi.news:id/ads_title"] +(2) RelativeLayout > ImageView[id="com.dongqiudi.news:id/feedback_close"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620788',
        enable: false,
    },
    {
        key: 7,
        name: '首页信息流广告-反馈理由',
        activityIds: 'com.dongqiudi.news.MainActivity',
        rules: 'TextView + RecyclerView > RelativeLayout > @TextView[text="诱导点击"]',
        snapshotUrls: 'https://gkd-kit.gitee.io/import/12620656',
        enable: false,
    },
  ],
});
