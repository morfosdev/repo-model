import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';
import { ccc_stlGroup } from './group';
import { viewStyles } from './view';
import { imageStyles } from './image';
import { layoutStyles } from './layout';
import { shadowStyles } from './shadow';
import { textStyles } from './text';

export const styles: TcapsCodeData = {
  ...ccc_stlGroup,
  ...imageStyles,
  ...layoutStyles,
  ...shadowStyles,
  ...textStyles,
  ...viewStyles,
};
