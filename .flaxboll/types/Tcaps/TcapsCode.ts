import { TlangString } from '../index';
import { TcapsBase, TcapsIptType } from '.';

export type TcapsCodeData = { [capsCodeID: string]: TcapsCode };

export type TcapsCode = TcapsBase & {
  capsType: 'code';
  capsCodeInfo: TcapsCodeInfo;
};

// export type TcapsCodeVersions = { [versionID: string]: TcapsCodeInfo };

export type TcapsCodeForm = {
  capsLabel: TlangString;
  capsDescription: TlangString;
  capsCodeText: string;

  capsCodeTypes: string[];
};

export type TcapsCodeInfo = {
  1: TcapsCodeForm & {
    capsCodeVersionID?: string;
    capsVersionCreatedAt: {};

    capsCodeInputs: { [codeIptID: string]: TcapsCodeInput };
  };
};

export type TcapsCodeInput = TcapsCodeIptType & {
  capsIptCodeID: string;

  capsIptPosition: string;
  capsIptRemoved: boolean;
} & TIptCodeItems;

export type TcapsCodeIptType = {
  capsIptType: TcapsIptType;
};

type TIptCodeItems = {
  capsIptCapsInfo?: TcapsIptCaps;
  capsIptGpInfo?: TcapsIptGroup;
  capsIptTxtInfo?: TcapsIptText;
  capsIptNumInfo?: {};
  capsIptColorInfo?: {};
};

export type TcapsIptCaps = {
  capsIptCapsLabel: TlangString;
  capsIptCapsDescription: TlangString;

  capsIptCapsDfCode: string;
  capsIptCapsTypesToAdd: string[];
};

export type TcapsIptGroup = {
  capsIptGpItems: TcapsIptGpItem[];
  capsIptGpDfValue?: TcapsIptGpItemValue[];
  capsIptGpLabel: TlangString;
  capsIptGpDescription: TlangString;
};

export type TcapsIptText = {
  capsIptTxtDfValue: string;
  capsIptTxtLabel: TlangString;
  capsIptTxtDescription: TlangString;
};

export type TcapsIptGpItem = {
  gpItemType: TcapsIptType;
  gpItemLabel: TlangString;
  gpItemDescription?: TlangString;
  gpItemCodeName: string;
};

export type TcapsIptGpItemValue = {
  gpItemType: TcapsIptType;
  gpItemCodeID: string;
  gpItemValue: string;
};
