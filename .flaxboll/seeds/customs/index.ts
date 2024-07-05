// ----------- JSX
import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';
import { ccc_btnUpdateAmount } from './ccc_btnUpdateAmount';
import { ccc_getUserLocation } from './ccc_getUserLocation';
import { ccc_countTimer } from './ccc_countTimer';
import { ccc_iptPicker } from './ccc_iptPicker';
import { ccc_mapPlaces } from './ccc_mapPlaces';
// ----- generic names
import { ccc_currencyString } from './ccc_currencyString';

// ----------- JS
import { ccc_checkCurrSecondsValue } from './ccc_checkCurrSecondsValue';
import { ccc_processCheckout } from './ccc_processCheckout';
import { ccc_checkInitData } from './ccc_checkInitData';
import { ccc_watcher } from './ccc_watcher';

// ----- payment funcs
import { ccc_pagarme } from './ccc_pagarme';

// ----- generic names
import { ccc_filePicker } from './ccc_filePicker';

export const customs: TcapsCodeData = {
  // ----------- JSX
  ...ccc_btnUpdateAmount,
  ...ccc_currencyString,
  ...ccc_getUserLocation,
  ...ccc_countTimer,
  ...ccc_iptPicker,
  ...ccc_mapPlaces,
  ...ccc_filePicker,
  // ----- generic names

  // ----------- JS
  ...ccc_checkCurrSecondsValue,
  ...ccc_processCheckout,
  ...ccc_checkInitData,
  ...ccc_watcher,
  // ----- payment funcs
  ...ccc_pagarme,

  // ----- generic names
};
