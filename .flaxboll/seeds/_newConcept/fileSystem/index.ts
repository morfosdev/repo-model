// ---------- import Internals
import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

// import {ccc_project_old1} from './ccc_project';
import { ccc_folder } from './ccc_folder';
import { ccc_root } from './ccc_root';
import { ccc_file } from './ccc_file';

export const elements: TcapsCodeData = {
  // ...ccc_project(),
  ...ccc_folder,
  ...ccc_root,
  ...ccc_file,
};
