import { isRatioOk } from '../../../helper/colorContrast';
import { messages } from '../../messages';

export const checkColorContrast = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
  tag: string
): string | null => {
  const { color, backgroundColor, fontSize } = props.style || {};

  if (!color || !backgroundColor) return null;

  return !isRatioOk(color, backgroundColor, 'AA', fontSize)
    ? `[${tag}] ${messages.styles.contrast}`
    : null;
};
