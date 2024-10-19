import { ALT } from '../../../../constants';
import { messages } from '../../../messages';
import { ImgProps } from '../types/imgProps';

export const checkAltText = (props: ImgProps): string | null =>
  !props[ALT] ? messages.img.alt : null;
