import { TcreatedAt } from './timeStampRef';

export type TcurrProject = {
  projectDB: {
    prjCreatedAt: TcreatedAt;
    projectID: string;
    userID: string;
  };
  // injectedCode?: string;
  projectInfo: { capsInitID: string };
  isMobile: boolean;
};
