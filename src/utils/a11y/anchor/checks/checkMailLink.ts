import { getElementTextContent } from '../../../../helper/getElementTextContent';
import { messages } from '../../../messages';
import { AnchorProps } from '../types/AnchorProps';

const isEmailLink = (props: AnchorProps): boolean =>
  'href' in props && props['href']!.startsWith('mailto:');

const isValidEmail = (text: string): boolean => text.includes('@');

export const checkMailLink = (props: AnchorProps): string | null =>
  isEmailLink(props) &&
  !isValidEmail(getElementTextContent(props.children) || '')
    ? messages.anchor.mail
    : null;
