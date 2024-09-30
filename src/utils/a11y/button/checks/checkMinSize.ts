import React from 'react';
import { convertToPx } from '../../../../helper/style';
import { messages } from '../../../messages';
import { ButtonProps } from '../types/buttonProps';

const MIN_WIDTH_PX = 24 as const;
const MIN_WIDTH_EM = 1.5 as const;

const PX = 'px' as const;
const EM = 'em' as const;
const REM = 'rem' as const;

const WIDTH = 'width' as const;
const HEIGHT = 'height' as const;
const MAX_WIDTH = 'maxWidth' as const;
const MAX_HEIGHT = 'maxHeight' as const;

const PADDING = 'padding' as const;

const getStyleValue = (
  style: React.CSSProperties | undefined,
  property: keyof React.CSSProperties
): string | undefined => style && style[property]?.toString();

const isTooSmall = (size: string): boolean =>
  (size?.endsWith(PX) && +size.split(PX)[0] < MIN_WIDTH_PX) ||
  (size?.endsWith(EM) && +size.split(EM)[0] < MIN_WIDTH_EM) ||
  (size?.endsWith(REM) && +size.split(REM)[0] < MIN_WIDTH_EM);

const checkMinDimension = (
  width: string | undefined,
  height: string | undefined
): boolean => isTooSmall(width || '') || isTooSmall(height || '');

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
