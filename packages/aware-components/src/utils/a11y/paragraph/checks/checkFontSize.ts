import { FONTSIZE } from '../../../../constants';
import { getStyleValue, isTooSmall } from '../../../../helper/style';
import { messages } from '../../../messages';
import { ParagraphProps } from '../types';

const MIN_WIDTH_PX = 9 as const;
const MIN_WIDTH_EM = 0.563 as const;

export const checkFontSize = (props: ParagraphProps): string | null =>
  isTooSmall(getStyleValue(props.style, FONTSIZE), MIN_WIDTH_PX, MIN_WIDTH_EM)
    ? messages.p.min
    : null;
