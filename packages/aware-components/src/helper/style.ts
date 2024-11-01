import { EM, PX, REM } from '../constants';

const ROOT_FONT_SIZE = 16;

export const convertToPx = (
  size: string,
  rootFontSize = ROOT_FONT_SIZE
): number => {
  if (size.endsWith('rem') || size.endsWith('em')) {
    const value = parseFloat(size);
    return value * rootFontSize;
  }
  return parseFloat(size);
};

export const getStyleValue = (
  style: React.CSSProperties | undefined,
  property: keyof React.CSSProperties
): string | undefined => style && style[property]?.toString();

export const isTooSmall = (
  size: string = '',
  minPx: number,
  minEm: number
): boolean =>
  (size && !isNaN(+size) && +size < minPx) ||
  (size?.endsWith(PX) && +size.split(PX)[0] < minPx) ||
  (size?.endsWith(EM) && +size.split(EM)[0] < minEm) ||
  (size?.endsWith(REM) && +size.split(REM)[0] < minEm);
