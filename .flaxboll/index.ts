// ---------- import Internals
import { timeStampRef } from './types/timeStampRef';

import { capsules, capsInitID, actions, codeCache } from './capsules';
import { Tproject } from './types';
import { seeds } from './seeds';

export const projectData: Tproject = {
  currProject: {
    projectDB: {
      prjCreatedAt: timeStampRef,
      projectID: 'ppp_01',
      userID: 'uuu_01',
    },
    projectInfo: { capsInitID },

    isMobile: true,
  },

  seeds: { ...seeds },
  capsules: { ...capsules },
  codeCache,

  actions: { ...actions },
};
