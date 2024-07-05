import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';
import { btnProps } from './button';
import { imageProps } from './image';
import { inputProps } from './inputText';
import { listProps } from './list';
import { loaderProps } from './loader';
import { scrollViewProps } from './scrollview';
import { textProps } from './text';
import { viewProps } from './view';

export const properties: TcapsCodeData = {
  ...btnProps,
  ...imageProps,
  ...inputProps,
  ...listProps,
  ...loaderProps,
  ...scrollViewProps,
  ...textProps,
  ...viewProps,
};
