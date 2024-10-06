import { GENERIC_TEXTS } from '../../../constants';
import { messages } from '../../messages';
import { ImgProps } from './types/imgProps';

export const checkGenericAlt = (props: ImgProps): string | null =>
  props['alt'] && GENERIC_TEXTS.includes(props['alt'].toLowerCase().trim())
    ? messages.img.generic + props['alt']
    : null;

export const imgChecks = (props: ImgProps): string[] =>
  [checkGenericAlt(props)].filter((check) => check !== null);
