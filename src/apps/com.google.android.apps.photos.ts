import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.google.android.apps.photos',
  name: '谷歌相册',
  groups: [
    {
      key: 0,
      name: '取消更新',
      desc: '点击[以后再说]',
      activityIds: [
        'com.google.android.apps.photos.update.treatment.UpdateAppTreatmentPromoPageActivity',
      ],
      quickFind: true,
      rules: [
        {
          matches:
            '[id=`com.google.android.apps.photos:id/negative_button`][text=`以后再说`]',
          snapshotUrls: 'https://i.gkd.li/import/13218940',
        },
        {
          matches:
            '[id=`com.google.android.apps.photos:id/negative_button`][text=`Not now`]',
          snapshotUrls: 'https://i.gkd.li/import/13761928',
        },
      ],
    },
  ],
});
