import { messages } from '../../../messages';

export const checkAllCaps = (text: string): string | null =>
  !!text && text === text.toUpperCase()
    ? messages.anchor.uppercase + text
    : null;
