import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';
import { ccc_dirSeed } from './ccc_dirSeed';
import { ccc_fileSeed } from './ccc_fileSeed';

export const system: TcapsCodeData = {
  ...ccc_dirSeed,
  ...ccc_fileSeed,
};
