import { FONTSIZE } from '../../../../constants';
import { getStyleValue, isTooSmall } from '../../../../helper/style';
import { messages } from '../../../messages';
import { ParagraphProps } from '../types';

const MIN_SIZE_PX = 9 as const;
const MIN_SIZE_EM = 0.563 as const;

export const checkFontSize = (props: ParagraphProps): string | null =>
  isTooSmall(getStyleValue(props.style, FONTSIZE), MIN_SIZE_PX, MIN_SIZE_EM)
    ? messages.p.min
    : null;
