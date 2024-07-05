import { TcapsUseCodeData } from '../types/Tcaps/TcapsUseCode';

import fernandes from './fernandes_actions.json';
import carlos from './carlos_actions.json';
import renan from './renan_actions.json';

import _c_01 from './01k/01.json';

const c_01 = _c_01 as TcapsUseCodeData;
export const capsules: TcapsUseCodeData = {
  ...c_01,
};

export const capsInitID = 'xxx_dir1';
export { cacheControl as codeCache } from './cacheControl';

export const actions = {
  ...renan,
  ...fernandes,
  ...carlos,
};
