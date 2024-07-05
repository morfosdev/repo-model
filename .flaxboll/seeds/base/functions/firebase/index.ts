// ---------- import Internals
import { TcapsCodeData } from '../../../../types/Tcaps/TcapsCode';

import { ccc_fireDeleteData } from './ccc_fireDeleteData';
import { ccc_fireUpdateDoc } from './ccc_fireUpdateDoc';

import { ccc_fireGetDocs } from './ccc_fireGetDocs';
import { ccc_fireGetDoc } from './ccc_fireGetDoc';

import { ccc_fireSetDoc } from './ccc_fireSetDoc';
import { ccc_fireUpload } from './ccc_fireUpload';

import { ccc_fireWhereConds } from './ccc_fireWhereConds';
import { ccc_fireWhere } from './ccc_fireWhere';

import { ccc_fireInit } from './ccc_fireInit';

export const firestore_funcs: TcapsCodeData = {
  // from FUNCTIONS
  ...ccc_fireDeleteData,
  ...ccc_fireUpdateDoc,

  ...ccc_fireGetDocs,
  ...ccc_fireGetDoc,

  ...ccc_fireSetDoc,
  ...ccc_fireUpload,

  ...ccc_fireWhereConds,
  ...ccc_fireWhere,

  ...ccc_fireInit,
};
