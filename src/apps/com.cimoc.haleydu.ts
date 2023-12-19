import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.cimoc.haleydu',
  name: 'Cimoc',
  groups: [
{
  id: 'com.cimoc.haleydu',
  name: 'Cimoc',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]首次启动广告',
       rules: [
        {
          activityIds: 'com.haleydu.cimoc.ui.activity.MainActivity',
          matches: '[name="android.widget.ImageView"][depth=7]',
          exampleUrls: 'https://m.gkd.li/51596517/def9c70c-25e2-4feb-bf3e-9a5565997422',
          snapshotUrls: 'https://i.gkd.li/import/13710153',
        },
      ],
    },
  ],
}
],
});
