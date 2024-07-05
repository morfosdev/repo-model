import { TcapsUseCodeData } from './TcapsUseCode';
import { TcapsCodeData } from './TcapsCode';
import { TcreatedAt } from '../timeStampRef';

export type TcapsBase = { capsDB: TcapsDB; capsType: TcapsType };

export type TcapsDB = {
  capsPrjID: string;
  capsUserID: string;
  capsCreatedAt: TcreatedAt;
  capsID: string;
};

export type TcapsIptType = 'text' | 'capsules';
// export type TcapsIptType = 'text' | 'color' | 'number' | 'capsules' | 'group';

type TcapsType = 'code' | 'useCode';

export type TcapsAll = { capsCodes: TcapsCodeData; capsUses: TcapsUseCodeData };
