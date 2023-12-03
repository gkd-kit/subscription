import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.qihoo360.antilostwatch',
  name: '360儿童卫士',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.qihoo.kids.watch.im.boot.MainActivity',
      rules: '[name="android.widget.TextView"&&text="跳过"]',
      snapshotUrls: 'https://i.gkd.li/import/13538012',
    },
  ],
});
