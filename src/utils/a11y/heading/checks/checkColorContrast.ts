import { isRatioOk } from '../../../../helper/colorContrast';
import { messages } from '../../../messages';
import { HeadingProps } from '../types/headingProps';

export const checkColorContrast = (
  props: HeadingProps,
  heading: string
): string | null =>
  !isRatioOk(
    props.style?.color,
    props.style?.backgroundColor,
    'AA',
    props.style?.fontSize
  )
    ? `[${heading}] ${messages.heading.contrast}`
    : null;
