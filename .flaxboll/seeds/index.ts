// ---------- import Internals
import { TcapsCodeData } from '../types/Tcaps/TcapsCode';

import { seeds_base } from './base/';
import { customs } from './customs';

export const seeds: TcapsCodeData = {
  ...seeds_base,
  ...customs,
};
