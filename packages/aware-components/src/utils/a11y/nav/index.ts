import { ARIA_LABEL, ARIA_LABELLEDBY } from '../../../constants';
import { messages } from '../../messages';

type NavProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const navChecks = (props: NavProps): string[] => [
  ...(!(props[ARIA_LABELLEDBY] || props[ARIA_LABEL])
    ? [messages.nav.label]
    : []),
];
