import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.huabenapp',
  name: '话本小说',
  groups: [
    {
      key: 1,
      name: '更新提示',
      resetMatch: 'app',
      actionMaximum: 1,
      activityIds: 'com.huabenapp.MainActivity',
      rules:
        '[text="发现新版本"] <n ViewGroup < ScrollView +n ViewGroup[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/14072723',
    },
  ],
});
