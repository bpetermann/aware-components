import { isSkipLink } from '../../../../helper/isSkipLink';
import { messages } from '../../../messages';

export const checkSkipLink = (links: string[]): string | null =>
  links.length && !links.some((href) => isSkipLink(href))
    ? messages.anchor.skipLink
    : null;
