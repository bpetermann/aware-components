import { isRatioOk } from '../../../helper/colorContrast';
import { messages } from '../../messages';

export const checkColorContrast = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
  tag: string
): string | null =>
  !isRatioOk(
    props.style?.color,
    props.style?.backgroundColor,
    'AA',
    props.style?.fontSize
  )
    ? `[${tag}] ${messages.styles.contrast}`
    : null;
