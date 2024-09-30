import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

const isEmailLink = (props: AnchorProps): boolean =>
  'href' in props && props['href']!.startsWith('mailto:');

const isValidEmail = (text: string): boolean => text.includes('@');

export const checkMailLink = (
  props: AnchorProps,
  text: string
): string | null =>
  isEmailLink(props) && !isValidEmail(text) ? messages.anchor.mail : null;
