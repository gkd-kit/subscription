import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from './types';

const subsConfig: RawSubscription = {
  id: 825,
  version: 0,
  name: 'Adpro的GKD订阅',
  author: 'Adpro - AdproTeam',
  supportUri: 'https://github.com/Adpro-Team/subscription/issue',
  updateUrl:
    'https://cdn.jsdelivr.net/gh/Adpro-Team/GKD_subscription@main/dist/Adpro_gkd.json5',
  checkUpdateUrl:
    'https://cdn.jsdelivr.net/gh/Adpro-Team/GKD_subscription@main/dist/Adpro_gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
