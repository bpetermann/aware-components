import {
  HEIGHT,
  MAX_HEIGHT,
  MAX_WIDTH,
  PADDING,
  WIDTH,
} from '../../../../constants';
import {
  convertToPx,
  getStyleValue,
  isTooSmall,
} from '../../../../helper/style';
import { messages } from '../../../messages';
import { ButtonProps } from '../types/buttonProps';

const MIN_WIDTH_PX = 24 as const;
const MIN_WIDTH_EM = 1.5 as const;

const checkMinDimension = (
  width: string | undefined,
  height: string | undefined
): boolean =>
  isTooSmall(width, MIN_WIDTH_PX, MIN_WIDTH_EM) ||
  isTooSmall(height, MIN_WIDTH_PX, MIN_WIDTH_EM);

const isPaddingEnough = (padding: string | undefined): boolean =>
  !!padding && convertToPx(padding) >= 12;

const width = (props: ButtonProps) =>
  getStyleValue(props.style, WIDTH) || getStyleValue(props.style, MAX_WIDTH);

const height = (props: ButtonProps) =>
  getStyleValue(props.style, HEIGHT) || getStyleValue(props.style, MAX_HEIGHT);

const padding = (props: ButtonProps) => getStyleValue(props.style, PADDING);

export const checkMinSize = (props: ButtonProps): string | null =>
  checkMinDimension(width(props), height(props)) &&
  !isPaddingEnough(padding(props))
    ? messages.button.min
    : null;
