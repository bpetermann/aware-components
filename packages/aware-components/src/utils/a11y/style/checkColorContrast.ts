import { isRatioOk } from '../../../helper/colorContrast';
import { messages } from '../../messages';

export const checkColorContrast = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
  tag: string,
  bgColor?: string
): string | null => {
  const { color, backgroundColor, fontSize } = props.style || {};

  const bg = backgroundColor || bgColor;

  if (!color || !bg) return null;

  return !isRatioOk(color, bg, 'AA', fontSize)
    ? `[${tag}] ${messages.styles.contrast}`
    : null;
};
