// ---------- import Internals
import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

import { system } from './system';

import { functions } from './functions';
import { jsValues } from './jsValues';
import { elements } from './elements';
import { styles } from './styles';
import { properties } from './properties';
import { firestore_funcs } from './functions/firebase';

export const seeds_base: TcapsCodeData = {
  ...system,
  ...elements,
  ...functions,
  ...jsValues,
  ...styles,
  ...properties,
  ...firestore_funcs,
};
