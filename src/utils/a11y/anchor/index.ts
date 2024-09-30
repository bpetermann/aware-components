import { checkMailLink } from './checks/checkMailLink';
import { AnchorProps } from './types/AnchorProps';

export const anchorChecks = (props: AnchorProps): string[] =>
  [checkMailLink(props)].filter((check) => check !== null);
