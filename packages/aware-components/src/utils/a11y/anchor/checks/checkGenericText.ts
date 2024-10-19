import { GENERIC_TEXTS } from '../../../../constants';
import { messages } from '../../../messages';

export const checkGenericText = (text: string): string | null =>
  GENERIC_TEXTS.includes(text.toLowerCase().trim())
    ? messages.anchor.generic + text
    : null;
