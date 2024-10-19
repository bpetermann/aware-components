import { ALT, GENERIC_TEXTS } from '../../../../constants';
import { messages } from '../../../messages';
import { ImgProps } from '../types/imgProps';

export const checkGenericAlt = (props: ImgProps): string | null =>
  props[ALT] && GENERIC_TEXTS.includes(props[ALT].toLowerCase().trim())
    ? messages.img.generic + props[ALT]
    : null;
