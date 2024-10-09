import { ARIA_LABEL } from '../../../constants';
import { messages } from '../../messages';

export type sectionprops = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const sectionChecks = (
  amount: number,
  props: sectionprops
): string[] => [
  ...(amount > 1 && !(props[ARIA_LABEL] || props[ARIA_LABEL])
    ? [messages.section.label]
    : []),
];
