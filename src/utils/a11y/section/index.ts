import { ARIA_LABEL, ARIA_LABELLEDBY } from '../../../constants';
import { messages } from '../../messages';

export type sectionprops = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const sectionChecks = (props: sectionprops): string[] => [
  ...(!(props[ARIA_LABELLEDBY] || props[ARIA_LABEL])
    ? [messages.section.label]
    : []),
];
