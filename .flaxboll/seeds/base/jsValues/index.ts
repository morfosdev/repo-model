// ---------- import Internals
import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

import { ccc_propJsonStringfy } from './ccc_propJsonStringfy';
import { ccc_joinStringsValue } from './ccc_joinStringsValue';
import { ccc_propJoinStrings } from './ccc_propJoinStrings';
import { ccc_propUrlEncoded } from './ccc_propUrlEncoded';
import { ccc_objectValue } from './ccc_objectValue';
import { ccc_stringValue } from './ccc_stringValue';
import { ccc_arrayValue } from './ccc_arrayValue';
import { ccc_propString } from './ccc_propString';
import { ccc_freeValue } from './ccc_freeValue';
import { ccc_propArray } from './ccc_propArray';
import { ccc_toggleVar } from './ccc_toggleVar';
import { ccc_propObj } from './ccc_propObj';
import { ccc_number } from './ccc_number';

import { ccc_varReader } from './ccc_varReader';
import { ccc_argReader } from './ccc_argReader';

export const jsValues: TcapsCodeData = {
  // from JSVALUES
  ...ccc_arrayValue,
  ...ccc_freeValue,
  ...ccc_joinStringsValue,
  ...ccc_number,
  ...ccc_objectValue,
  ...ccc_propArray,
  ...ccc_propJoinStrings,
  ...ccc_propJsonStringfy,
  ...ccc_propObj,
  ...ccc_propString,
  ...ccc_propUrlEncoded,
  ...ccc_stringValue,
  ...ccc_toggleVar,

  ...ccc_varReader,
  ...ccc_argReader,
};
