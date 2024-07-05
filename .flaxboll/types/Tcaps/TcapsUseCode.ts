import { TcreatedAt } from '../timeStampRef';
import { TlangString } from '../index';
import { TobjAny } from '../utils';
import { TcapsBase } from '.';

export type TcapsUseCodeData = { [capsUseID: string]: TcapsUseCode };

export type TcapsUseCode = TcapsBase & {
  capsType: 'useCode';
  capsUseCodeInfo: TcapsUseCodeInfo;
};

export type TcapsUseCodeInfo = {
  capsCodeID: string;
  capsUseFSPath: string;

  // #ATTENTION Start: Juan Review
  capsCodeVersionID: '1';
  // #ATTENTION End!
  capsUpdatedAt: TcreatedAt[];
  capsUseDescription: TlangString;
  capsUseInputs: { [iptID: string]: TcapsUseInput };
  capsUseLabel: TlangString;
  capsUseConections: string;
};

export type TcapsUseInput = {
  capsIptCodeID: string;

  capsIptGpValue?: TobjAny;
  capsIptTxtValue?: string;
  capsIptCapsValue?: string[];
  capsIptNumValue?: number;
  capsIptColorValue?: string;
};
